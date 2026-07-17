import MovieCard from "./components/MovieCard";

export default function Home() {
  return (
    <MovieCard 
      imageUrl="/temp-poster.png"
      name="Название фильма"
      genre="комедия, боевик"
      country="Россия"
      duration={{hours: 1, minutes: 30}}
      year={ 2001 }
      ageLimit={ 16 }
    />
  );
}