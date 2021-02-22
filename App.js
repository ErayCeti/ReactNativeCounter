import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

const App = () => {
  const [Count, SetCount] = useState(0);
  return (
    <View>
      <View>
        <View
          style={{alignItems: 'center', justifyContent: 'center', height: 100}}>
          <Text style={{fontSize: 20}}> {Count} </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <View style={{width: 100, display: 'flex', marginLeft: 10}}>
            <Button title="Increase" onPress={() => SetCount(Count + 1)} />
          </View>
          <View style={{width: 100, marginLeft: 10}}>
            <Button title="Decrease" onPress={() => SetCount(Count - 1)} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
