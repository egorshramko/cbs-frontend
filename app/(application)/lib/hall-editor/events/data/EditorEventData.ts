import { HallObjectData } from "./HallObjectData";
import { SelectedLibraryElementData } from "./SelectedLibraryElementData";

export type EditorEventData = 
    Partial<SelectedLibraryElementData> & 
    Partial<HallObjectData>;