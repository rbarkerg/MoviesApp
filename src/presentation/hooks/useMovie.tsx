import React, { useEffect, useState } from 'react'
import { moviesDBFetcher } from '../../config/adapters/movieDB.adapter';
import * as UseCases from '../../core/use-cases';
import { FullMovie } from '../../core/models/movie.model';
import { Actor } from '../../core/models/actor.model';

export const useMovie = (movieId: number) => {

  const [isLoading, setIsLoading] = useState(true)
  const [fullMovie, setFullMovie] = useState<FullMovie>()
  const [actors, setActors] = useState<Actor[]>([])

  useEffect(() => {
    getData()
  }, [movieId])


  const getData = async () => {
    let [fullMovie, acthors] = await Promise.all([
      UseCases.getMovieBy(movieId, moviesDBFetcher),
      UseCases.getCastBy(movieId, moviesDBFetcher)
    ])
    setFullMovie(fullMovie);
    setActors(acthors);
    setIsLoading(false);
  }

  return {
    isLoading,
    fullMovie,
    actors
  }
}
