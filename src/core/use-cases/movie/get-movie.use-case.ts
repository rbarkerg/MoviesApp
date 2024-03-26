import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { FullMovieDBResponse } from "../../../infrastructure/interfaces/full-movie-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../models/movie.model";


export const getMovieBy = async (id: number, fetcher: HttpAdapter): Promise<FullMovie> => {
  try {
    const fullMovie = await fetcher.get<FullMovieDBResponse>(`/${id}`);
    return MovieMapper.fromFullMovieResultToMovieModel(fullMovie);
  } catch (error) {
    console.log(error)
    throw new Error(`can't get the movie by id: ${id} Error: ${error}`);
  }
} 