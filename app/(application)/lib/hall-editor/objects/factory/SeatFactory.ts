import { Point } from "fabric";
import { HallObject } from "../HallObject";
import { Seat } from "../Seat";
import { HallObjectFactory } from "./HallObjectFactory";

export class SeatFactory implements HallObjectFactory {

    private _count: number;

    constructor(count: number) {
        this._count = count;
    }

    public createObject(point: Point): HallObject {
        return new Seat(point);
    }

    public createObjects(point: Point): HallObject[] {

        // Расчет количества строк и столбцов объектов (сидения добавляются в виде квадрата)

        // Округление корня из количества объектов до большего целого. 
        // Так, для 8 элементов получится, что они будут вписаны в квадрат 3х3 объекта
        const sideLength = Math.ceil(Math.sqrt(this._count)); 

        //Вычисление стороны сидения в пикселях (радиус + толщина границы) * 2
        const seatSide = Math.round((Seat.baseRadius + Seat.baseStrokeWidth) * 2);

        //Вычисление отступа между центрами объектов
        const gapBetweenObjects = 4;

        //Вычисление длины и ширины зоны добавляемых объектов в пикселях
        const zoneSide = (seatSide + gapBetweenObjects) * sideLength - gapBetweenObjects;

        //Вычисление центра первого элемента в первой строке (X = Y)
        const firstElementCenterCoord = point.y - Math.round(zoneSide / 2) + Math.round(seatSide / 2);

        const seats: HallObject[] = [];

        for (let row = 0; row < sideLength; row++) {
            const rowCenterY = firstElementCenterCoord + row * (seatSide + gapBetweenObjects);
            for (let col = 0; col < sideLength; col++) {
                const seatX = firstElementCenterCoord + col * (seatSide + gapBetweenObjects);
                const seatPoint: Point = new Point({
                    x: seatX, 
                    y: rowCenterY
                });
                const seat = this.createObject(seatPoint);
                seats.push(seat);
            }
        }

        return seats;
    }

}