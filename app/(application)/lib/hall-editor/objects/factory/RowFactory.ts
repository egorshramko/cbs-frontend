import { Point } from "fabric";
import RowConfigData from "../../events/data/RowConfigData";
import { HallObject } from "../HallObject";
import { HallObjectFactory } from "./HallObjectFactory";
import { Seat } from "../Seat";
import { RowNumerationDirectionData } from "../../events/data/RowNumerationDirection";

//Фабрика рядов
//Особенность этой фабрики в том, что она создает массив сидений (Seat[])
//по определенным правилам. Класса Row в иерархии не существует
export default class RowFactory implements HallObjectFactory {

    private _rowConfig: RowConfigData;

    constructor(rowConfig: RowConfigData) {
        this._rowConfig = rowConfig;
    }

    public createObject(point: Point): HallObject {
        throw "Operation not supported";
    }

    public createObjects(point: Point): HallObject[] {
        if (this._rowConfig.rounded && this._rowConfig.roundingRadius !== undefined) {
            return this._createRoundedRow(point);
        }
        else {
            return this._createStraightRow(point);
        }
    }

    private _createStraightRow(point: Point): HallObject[] {
        const seats: HallObject[] = [];
        const leftSeatPoint = this._getLeftSeatPoint(point);

        for (let i = 0; i < this._rowConfig.placesCount; i++) {
            const seatPoint = new Point(
                leftSeatPoint.x + i * (this._getSeatDiameter() + this._getSeatGap()),
                leftSeatPoint.y
            );
            const seat = new Seat(seatPoint);
            if (!!this._rowConfig.rowNumber) {
                seat.row = this._rowConfig.rowNumber;
            }
            if (this._rowConfig.numerationDirection == RowNumerationDirectionData.LEFT_TO_RIGHT) {
                seat.place = i + 1;
            }
            else {
                seat.place = this._rowConfig.placesCount - i;
            }
            seats.push(seat);
        }

        return seats;
    }

    private _createRoundedRow(point: Point): HallObject[] {
        const seats: HallObject[] = [];
        const leftSeatPoint = this._getLeftSeatPoint(point);
        const rightSeatPoint = this._getRightSeatPoint(point);

        const straightLineHalf = this._getStraightSeatLineLength() / 2;

        //Угол дуги окружности, по которой будет располагаться ряд
        if (this._rowConfig.roundingRadius !== undefined) {
            //const rowArcAngle = 2 * Math.asin(straightLineHalf / this._rowConfig.roundingRadius);

            //Переход в полярные координаты

            //Поиск длины отрезка между точкой клика и центром окружности
            const lengthBetweenClickAndCircleCenter = Math.sqrt(Math.pow(this._rowConfig.roundingRadius, 2) - Math.pow(straightLineHalf, 2));

            //Точка полюса
            //const polePoint = new Point(point.x, point.y - lengthBetweenClickAndCircleCenter);
            const polePoint = new Point(point.x, lengthBetweenClickAndCircleCenter - point.y);

            //Точка левого сидения относительно полюса
            const leftSeatPointRelativelyPole = new Point(
                leftSeatPoint.x - polePoint.x, 
                - leftSeatPoint.y - polePoint.y); //?

            const rightSeatPointRelativelyPole = new Point(
                rightSeatPoint.x - polePoint.x,
                - rightSeatPoint.y - polePoint.y
            );

            const leftSeatFi = Math.PI + Math.atan(leftSeatPointRelativelyPole.y / leftSeatPointRelativelyPole.x);
            const rightSeatFi = 2 * Math.PI + Math.atan(rightSeatPointRelativelyPole.y / rightSeatPointRelativelyPole.x);
            const rowArcAngle = rightSeatFi - leftSeatFi;

            for (let i = 0; i < this._rowConfig.placesCount; i++) {
                const currentFi = leftSeatFi + i * (rowArcAngle / (this._rowConfig.placesCount - 1));

                const seatPoint = new Point(
                    this._rowConfig.roundingRadius * Math.cos(currentFi) + polePoint.x,
                    - (this._rowConfig.roundingRadius * Math.sin(currentFi) + polePoint.y)
                );

                const seat = new Seat(seatPoint);

                if (!!this._rowConfig.rowNumber) {
                    seat.row = this._rowConfig.rowNumber;
                }
                if (this._rowConfig.numerationDirection == RowNumerationDirectionData.LEFT_TO_RIGHT) {
                    seat.place = i + 1;
                }
                else {
                    seat.place = this._rowConfig.placesCount - i;
                }

                seats.push(seat);
            }
        }

        return seats;
        
    }

    private _getLeftSeatPoint(clickPoint: Point): Point {
        const straightLineLength = this._getStraightSeatLineLength();
        return new Point(
            clickPoint.x - Math.round(straightLineLength / 2), //точка клика - середина прямой между крайними сидениями
            clickPoint.y
        );
    }

    private _getRightSeatPoint(clickPoint: Point): Point {
        const straightLineLength = this._getStraightSeatLineLength();
        return new Point(
            clickPoint.x + Math.round(straightLineLength / 2),
            clickPoint.y
        );
    }

    //Получение длины прямой линии между крайними сидениями
    private _getStraightSeatLineLength(): number {
        const seatDiameter = this._getSeatDiameter();
        const seatGap = this._getSeatGap(); //Расстояние между сидениями в прямом ряду

        const placesCount = this._rowConfig.placesCount;

        //Расчет расстояния ведется между центрами двух крайних сидений, 
        //поэтому два крайних умножаются на радиус, остальные на диаметр
        return (placesCount - 2) * seatDiameter + (placesCount - 1) * seatGap + 2 * (Seat.baseRadius + Seat.baseStrokeWidth);

    }

    private _getSeatGap(): number {
        return 4;
    }

    private _getSeatDiameter(): number {
        return Seat.baseRadius * 2 + Seat.baseStrokeWidth * 2;
    }

}