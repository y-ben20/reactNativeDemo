import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const CallingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Alex</Text>
        <Text style={styles.phoneNumber}>ringing +86 131 1111 1234</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.iconButton}>
          <Feather name="camera" size={30} color={'white'} />
        </View>
        <View style={styles.iconButton}>
          <Feather name="camera-off" size={30} color={'white'} />
        </View>
        <View style={styles.iconButton}>
          <Feather name="mic-off" size={30} color={'white'} />
        </View>
        <View style={[styles.iconButton, {backgroundColor: 'red'}]}>
          <Feather name="phone-off" size={30} color={'white'} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#7b4e80',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 20,
    color: 'white',
  },
  buttonsContainer: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});
export default CallingScreen;
