import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MoviesDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../models/movie.model";


export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MoviesDBResponse>('/top_rated');
    return topRated.results.map(MovieMapper.fromMovieResultToMovieModel)
  } catch (error) {
    console.log(error)
    throw new Error("Error fetching movies - topRated");

  }
}