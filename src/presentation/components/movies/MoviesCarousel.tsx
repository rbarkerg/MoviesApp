import { Text, View } from 'react-native'
import React from 'react'
import { Movie } from '../../../core/models/movie.model'
import { ScrollView } from 'react-native-gesture-handler';
import MovieCard from './MovieCard';

interface Props {
  movies: Movie[];
  height?: number
}

const MoviesCarousel = ({ movies, height = 430 }: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          movies.map(movie => <MovieCard key={movie.id} movie={movie} showRating />)
        }
      </ScrollView>
    </View>
  )
}

export default MoviesCarousel