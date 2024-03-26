import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { FullMovie } from '../../../core/models/movie.model'
import { useNavigation } from '@react-navigation/native'
import IonIcon from '../shared/IonIcon'
import RatingStar from '../movies/RatingStar'

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
  rating: number;
}

const MovieHeader = ({ poster, originalTitle, title, rating }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <>
      <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
        <View style={styles.imageBorder}>
          <Image
            style={styles.posterImage}
            source={{ uri: poster }} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <View style={{ flex: 1 }}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.subTitle}>{originalTitle}</Text>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.title}>{title}</Text>
        </View>

        <RatingStar rating={rating} />
      </View>

      <View style={styles.backButton}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={styles.backButtonContainer}>
            <IonIcon name={'chevron-back-sharp'} color={'#fff'} size={40} style={styles.backButtonIcon} />
            <Text style={styles.backButtonText}>Back</Text>
          </View>
        </Pressable>
      </View>
    </>
  )
}

export default MovieHeader

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 35,
    left: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  backButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonIcon: {
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
})