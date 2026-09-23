import HallSession from "./HallSession";
import { MovieFormatInfo } from "./MovieFormatInfo";

// описание сеансов в зале
export default interface HallSessionsInfo {
    hallName: string, // имя зала
    hallMovieFormats: Set<MovieFormatInfo>, // форматы фильма зала
    sessions: Array<HallSession> // сеансы
}