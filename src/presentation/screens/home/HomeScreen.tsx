import { Text, View } from 'react-native'
import React from 'react'
import { useMovies } from '../../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviesCarousel from '../../components/movies/MoviesCarousel';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';
import FullScreenLoading from '../../components/shared/FullScreenLoading';


const HomeScreen = () => {
  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (<FullScreenLoading />)
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

        {/* Main movies */}
        <MoviesCarousel movies={nowPlaying} />

        {/* Popular movies */}
        <HorizontalCarousel
          movies={popular}
          title='Popular'
          loadNextPage={popularNextPage}
        />

        {/* Top rated movies */}
        <HorizontalCarousel movies={topRated} title='Top rated' />

        {/* Upcoming movies */}
        <HorizontalCarousel movies={upcoming} title='Upcoming' />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
