import { classRegistry, FabricObject, FabricText, GroupProps, Path, Point } from "fabric";
import { HallObject } from "./HallObject";

export class HallScreen extends HallObject {

    private _screenLine: Path;
    private _label: FabricText;

    static type = "HallScreen";

    constructor(
        pointOrObjects: Point | FabricObject[],
        options: Partial<GroupProps> = {}
    ) {
        const isDeserialization = Array.isArray(pointOrObjects);

        const components: FabricObject[] = isDeserialization
            ? pointOrObjects
            : [
                HallScreen._createScreenLine(),
                HallScreen._createLabel()
            ];

        super(
            components,
            isDeserialization
                ? options
                : {
                    ...options,
                    left: (pointOrObjects as Point).x,
                    top: (pointOrObjects as Point).y
                }
        );

        // Получаем ссылки на восстановленные или созданные объекты
        this._screenLine = components.find(
            obj => obj instanceof Path
        ) as Path;

        this._label = components.find(
            obj => obj instanceof FabricText
        ) as FabricText;

        this._initDefaultEvents();
    }

    private static _createScreenLine(): Path {
        return new Path("M 0 10 Q 50 10 150 10", {
            left: 0,
            top: 10,
            fill: null,
            stroke: 'black',
            strokeWidth: 2
        });
    }

    private static _createLabel(): FabricText {
        return new FabricText("Экран", {
            left: 0,
            top: 30,
            originX: 'center',
            lockScalingX: true,
            lockScalingY: true,
            fontFamily: "Inter, sans-serif", 
            fontSize: 12
        });
    }

    private _initDefaultEvents() {
        this.on('scaling', this._handleScaling);
    }

    private _handleScaling() {
        this._screenLine.set({
            scaleY: 1 / this.scaleY
        });

        this._label.set({
            scaleX: 1 / this.scaleX,
            scaleY: 1 / this.scaleY
        });

        this._label.setCoords();
        this._screenLine.setCoords();
    }

    public getType(): string {
        return "Экран";
    }
}

classRegistry.setClass(HallScreen);