import Duration from "./Duration";

export default interface ReceivedMovieJson {
    
    id: string;
    imageUrl: string;
    name: string;
    genre: string[];
    duration?: Duration;
    country: string;
    ageLimit: number;
    releaseDate: string;
    
}