import Duration from "./Duration";

export default interface MovieCardProps {
    id: string;
    imageUrl: string;
    name: string;
    genre: string;
    duration?: Duration;
    country: string;
    ageLimit: number;
    releaseDate: Date;
}