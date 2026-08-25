import Duration from "@/app/(application)/movies/lib/Duration";
import Cinema from "./Cinema";

export default interface Movie {
    id: string;
    imageUrl: string;
    name: string;
    genre: string[];
    duration?: Duration;
    country: string;
    ageLimit: number;
    releaseDate: Date;
    cinemas: Cinema[];
}