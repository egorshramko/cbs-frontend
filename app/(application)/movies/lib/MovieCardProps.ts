import Duration from "./Duration";

export default interface MovieCardProps {
    id: string;
    imageUrl: string;
    name: string;
    genre: string;
    duration?: Duration;
    country: string;
    year: number;
    ageLimit: number;
}