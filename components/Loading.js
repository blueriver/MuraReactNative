import React from 'react'
import {StyleSheet, Text, View } from 'react-native';

class Loading extends React.Component {
  componentDidMount() {
    if (window.initLoader) {
      window.initLoader()
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  render () {
    return (
			<View style={styles.container}>
 			 <Text>Loading...</Text>
 		 </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
