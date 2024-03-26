import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Movie } from '../../../core/models/movie.model'
import { FlatList } from 'react-native-gesture-handler';
import MovieCard from './MovieCard';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

const HorizontalCarousel = ({ movies, title, loadNextPage }: Props) => {

  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies])


  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true
    // load more movies 
    loadNextPage && loadNextPage();
  }

  return (
    <View style={{
      height: title ? 260 : 220
    }}>
      {
        title && (
          <Text style={styles.title}>{title}</Text>
        )
      }

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard movie={item} width={140} height={200} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  )
}

export default HorizontalCarousel

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '300',
    marginLeft: 10,
    marginBottom: 10
  }
})