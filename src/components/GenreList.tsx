import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();
  return data.map((genre) => <li key={genre.id}>{genre.name}</li>);
};

export default GenreList;
