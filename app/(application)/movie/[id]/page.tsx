import MovieSessionPageWrapper from "./components/MovieSessionPageWrapper";

export default async function MovieSessionsPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {

  const { id } = await params;

  return (
    <MovieSessionPageWrapper id={ id } />
  );

}