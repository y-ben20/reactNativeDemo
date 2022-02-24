import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const CallActionBox = () => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const onReverseCamera = () => {
    console.log('onReverseCamera');
  };
  const onToggleCamera = () => {
    setIsCameraOn(currentValue => !currentValue);
    console.log('onToggleCamera');
  };
  const onToggleMicrophone = () => {
    setIsMicOn(currentValue => !currentValue);
    console.log('onToggleMicrophone');
  };
  const onHangup = () => {
    console.log('onHangup');
  };
  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Feather name="camera" size={30} color={'white'} />
      </Pressable>
      <Pressable onPress={onToggleCamera} style={styles.iconButton}>
        <Feather
          name={isCameraOn ? 'camera-off' : 'camera'}
          size={30}
          color={'white'}
        />
      </Pressable>
      <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <Feather name={isMicOn ? 'mic-off' : 'mic'} size={30} color={'white'} />
      </Pressable>
      <Pressable
        onPress={onHangup}
        style={[styles.iconButton, {backgroundColor: 'red'}]}>
        <Feather name="phone-off" size={30} color={'white'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});
export default CallActionBox;
