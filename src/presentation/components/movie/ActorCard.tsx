import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Actor } from '../../../core/models/actor.model'

interface Props {
  actor: Actor;
}

const ActorCard = ({ actor }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.characterImg}
        source={{ uri: actor.avatar }} />

      <View style={styles.infoContainer}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.nameText}>{actor.name}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.characterText}>{actor.character}
        </Text>
      </View>
    </View>
  )
}

export default ActorCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf9f9',
    borderRadius: 10,
    width: 140,
    shadowColor: '#000',
    shadowOffset: {
      width: -1,
      height: 1
    },
    shadowOpacity: 0.24,
    textShadowRadius: 2,
    elevation: 9,
    marginHorizontal: 5, marginBottom: 20
  },
  characterImg: {
    height: 180,
    width: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  characterText: {
    fontSize: 12,
    opacity: 0.7
  }
})