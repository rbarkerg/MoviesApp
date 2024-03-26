import { useEffect, useState } from 'react'
import { Movie } from '../../core/models/movie.model'

import * as UseCases from '../../core/use-cases';
import { moviesDBFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {

  let popularPage = 1;

  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
  const [popular, setPopular] = useState<Movie[]>([])
  const [topRated, setTopRated] = useState<Movie[]>([])
  const [upcoming, setUpcoming] = useState<Movie[]>([])

  useEffect(() => {
    getData()

  }, [])

  const getData = async () => {
    let [nowPlaying, popular, topRated, upcoming] = await Promise.all([
      UseCases.moviesNowPlayingUseCase(moviesDBFetcher),
      UseCases.moviesPopularUseCase(moviesDBFetcher),
      UseCases.moviesTopRatedUseCase(moviesDBFetcher),
      UseCases.moviesUpcomingUseCase(moviesDBFetcher)
    ])

    setNowPlaying(nowPlaying);
    setPopular(popular);
    setTopRated(topRated);
    setUpcoming(upcoming);
    setIsLoading(false);
  }

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    //Methods
    popularNextPage: async () => {
      popularPage++;
      const popularMoview = await UseCases.moviesPopularUseCase(moviesDBFetcher, {
        page: popularPage
      })

      setPopular(prev => [...prev, ...popularMoview])
    }
  }
}
