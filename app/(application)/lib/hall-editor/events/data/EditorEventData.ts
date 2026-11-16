import { HallObjectData } from "./HallObjectData";
import ObjectPropertiesData from "./ObjectPropertiesData";
import { SelectedLibraryElementData } from "./SelectedLibraryElementData";
import { SelectedObjectData } from "./SelectedObjectData";

export type EditorEventData = 
    Partial<SelectedLibraryElementData> & 
    Partial<HallObjectData> &
    Partial<SelectedObjectData> & 
    Partial<ObjectPropertiesData>;