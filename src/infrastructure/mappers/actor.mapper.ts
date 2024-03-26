import { Actor } from "../../core/models/actor.model";
import { Cast } from "../interfaces/cast-movie-db.response";

export class ActorMapper {
  public static fromResponseToModel(acthor: Cast): Actor {
    return {
      id: acthor.id,
      name: acthor.name,
      character: acthor.character ?? 'No character',
      avatar: acthor.profile_path ?
        `https://image.tmdb.org/t/p/w500${acthor.profile_path}` :
        'https://i.stack.imgur.com/l60Hf.png'
    }
  }
}