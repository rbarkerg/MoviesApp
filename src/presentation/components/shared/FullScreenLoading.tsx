import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FullScreenLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'indigo'} />
    </View>
  )
}

export default FullScreenLoading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})