import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => ({ data: genres, isLoading: false, erro: null });

export default useGenre;
