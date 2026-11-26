import RowConfigData from "../../events/data/RowConfigData";
import { RowNumerationDirectionData } from "../../events/data/RowNumerationDirection";

export default class ElementsLibraryUtils {

    public static getDefaultRowConfig(): RowConfigData {
        return {
            placesCount: 10,
            rounded: false,
            numerationDirection: RowNumerationDirectionData.LEFT_TO_RIGHT
        };
    }
    
}