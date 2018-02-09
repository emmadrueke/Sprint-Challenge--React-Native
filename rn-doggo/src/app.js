import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Breeds from './breeds';

class Home extends React.Component {
  render() {
    <View style={container}>
      <Text>All The Doggo's</Text>
      <Button 
        title={'Get Them Dogs'}
        onPress={() => {
          this.props.navigation.navigate('Breeds');
        }} />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bakcgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const { container } = styles;

const Routes = StackNavigator({
  
})

export default Routes;