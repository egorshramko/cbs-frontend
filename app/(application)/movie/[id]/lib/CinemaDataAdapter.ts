import { CinemaData } from "@/app/(application)/movies/lib/CinemaData";
import Cinema from "./Cinema";

export class CinemaDataAdapter implements CinemaData {
    
    id: number;
    name: string;
    city: string;
    address: string;

    constructor(adaptee: Cinema) {
        this.id = adaptee.id;
        this.name = adaptee.name;
        this.city = adaptee.city;
        this.address = adaptee.address;
    }

}