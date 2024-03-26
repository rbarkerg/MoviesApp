import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { CastMovieDBResponse } from "../../../infrastructure/interfaces/cast-movie-db.response";
import { ActorMapper } from "../../../infrastructure/mappers/actor.mapper";
import { Actor } from "../../models/actor.model";


export const getCastBy = async (movieId: number, fetcher: HttpAdapter): Promise<Actor[]> => {
  try {
    const { cast } = await fetcher.get<CastMovieDBResponse>(`/${movieId}/credits`);
    return cast.map(ActorMapper.fromResponseToModel);
  } catch (error) {
    console.log(error)
    throw new Error(`can't get movie cast by movieId: ${movieId} Error: ${error}`);
  }
} 