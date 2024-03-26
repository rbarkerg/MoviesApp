import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonIcon from '../shared/IonIcon';

interface Props {
  rating: number;
}

const RatingStar = ({ rating }: Props) => {
  const roundRating = parseFloat(rating.toFixed(1))
  return (
    <View style={styles.container}>
      <Text style={styles.rating}>{roundRating} </Text>
      <IonIcon name={getIconByRating(rating)} color={'#dce43c'} size={30} />
    </View>
  )
}

const getIconByRating = (rating: number): string => {
  if (rating >= 8) {
    return 'star'
  } else if (rating >= 5) {
    return 'star-half-outline'
  }
  return 'star-outline';
}

export default RatingStar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 14,
    margin: 10,
    paddingHorizontal: 8
  },
  rating: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#dce43c',
  }
})