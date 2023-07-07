import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();
  return genres.map((genre) => <li key={genre.id}>{genre.name}</li>);
};

export default GenreList;
