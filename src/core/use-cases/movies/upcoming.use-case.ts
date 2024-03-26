import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MoviesDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../models/movie.model";


export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MoviesDBResponse>('/upcoming');
    return upcoming.results.map(MovieMapper.fromMovieResultToMovieModel)
  } catch (error) {
    console.log(error)
    throw new Error("Error fetching movies - upcoming");

  }
}