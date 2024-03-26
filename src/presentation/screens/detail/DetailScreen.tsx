import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../navigator/StackNavigator'
import { useMovie } from '../../hooks/useMovie'
import MovieHeader from '../../components/movie/MovieHeader'
import MovieDetail from '../../components/movie/MovieDetail'
import FullScreenLoading from '../../components/shared/FullScreenLoading'

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { };

const DetailScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { isLoading, fullMovie, actors } = useMovie(movieId);

  if (isLoading) {
    return (<FullScreenLoading />)
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MovieHeader
        poster={fullMovie!.poster}
        originalTitle={fullMovie!.originalTitle}
        title={fullMovie!.title}
        rating={fullMovie!.rating}
      />

      <MovieDetail
        genres={fullMovie!.genres}
        description={fullMovie!.description}
        budget={fullMovie!.budget}
        actors={actors}
      />


    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({

})