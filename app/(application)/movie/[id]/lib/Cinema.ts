import CinemaFeatures from "./CinemaFeatures";
import HallSessionsInfo from "./HallSessionsInfo";

export default interface Cinema {
    id: number,
    name: string,
    imageUrl: string,
    city: string,
    address: string,
    features: CinemaFeatures,
    hallSessions: Array<HallSessionsInfo>
}