import { FullMovie, Movie } from "../../core/models/movie.model";
import { FullMovieDBResponse } from "../interfaces/full-movie-db.response";
import { type Result } from "../interfaces/movie-db.responses";

export class MovieMapper {

  static fromMovieResultToMovieModel(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
    }
  }

  static fromFullMovieResultToMovieModel(fullMovie: FullMovieDBResponse): FullMovie {
    return {
      id: fullMovie.id,
      title: fullMovie.title,
      description: fullMovie.overview,
      releaseDate: new Date(fullMovie.release_date),
      rating: fullMovie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${fullMovie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${fullMovie.backdrop_path}`,
      genres: fullMovie.genres.map((genre) => genre.name),
      duration: fullMovie.runtime,
      budget: fullMovie.budget,
      originalTitle: fullMovie.original_title,
      productionCompanies: fullMovie.production_companies.map((company) => company.name)
    }
  }
}
