import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import ISONavigator from './src/components/navigator/isolution.navigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
        />
        <ISONavigator/>
        <Text>Hien Tran</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
