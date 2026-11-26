import { RowNumerationDirectionData } from "./RowNumerationDirection";

export default interface RowConfigData {
    rowNumber?: number;
    placesCount: number;
    rounded: boolean;
    roundingRadius?: number;
    numerationDirection: RowNumerationDirectionData;
}