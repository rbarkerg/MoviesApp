import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Movie } from '../../../core/models/movie.model'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/StackNavigator';
import RatingStar from './RatingStar';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  showRating?: boolean;
}

const MovieCard = ({ movie, height = 420, width = 300, showRating = false }: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <Pressable
      onPress={() => navigation.navigate('Detail', { movieId: movie.id })}
      style={({ pressed }) => ({
        width,
        height,
        opacity: pressed ? 0.8 : 1,
        paddingHorizontal: 8,
        paddingBottom: 20,
      })}
    >
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{ uri: movie.poster }} />
        {
          showRating && (
            <View style={styles.ratingInfo}>
              <RatingStar rating={movie.rating} />
            </View>
          )
        }
      </View>
    </Pressable>
  )
}


export default MovieCard

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fbf9f9',
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.24,
    textShadowRadius: 7,
    elevation: 9
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
  ratingInfo: {
    position: 'absolute',
  }
})