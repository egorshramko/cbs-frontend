import { HallObjectData } from "./HallObjectData";
import { SelectedLibraryElementData } from "./SelectedLibraryElementData";
import { SelectedObjectData } from "./SelectedObjectData";

export type EditorEventData = 
    Partial<SelectedLibraryElementData> & 
    Partial<HallObjectData> &
    Partial<SelectedObjectData>;