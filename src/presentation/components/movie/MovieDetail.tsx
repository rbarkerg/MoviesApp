import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FullMovie } from '../../../core/models/movie.model'
import RatingStar from '../movies/RatingStar'
import { Formatter } from '../../../config/helpers/Formatter'
import { Actor } from '../../../core/models/actor.model'
import ActorCard from './ActorCard'

interface Props {
  genres: string[];
  description: string;
  budget: number;
  actors: Actor[];
}

const MovieDetail = ({ genres, description, budget, actors }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Genres: {genres.join(', ')}</Text>

        <Text style={styles.subTitle}>History</Text>
        <Text style={styles.textDescription}>{description}</Text>

        <Text style={styles.subTitle}>budget</Text>
        <Text>{Formatter.currency(budget)}</Text>

        <Text style={styles.subTitle}>Actors</Text>
        <FlatList
          data={actors}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ActorCard actor={item} />}
          style={{ marginBottom: 40 }}
        />
      </View>
    </>
  )
}

export default MovieDetail

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  subTitle: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
  },
  textDescription: {
    fontSize: 16
  }
})