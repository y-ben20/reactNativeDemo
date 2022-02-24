import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import bg from '../../../assets/images/backgroundImage.jpg';
import Feather from 'react-native-vector-icons/Feather';

const IncomingCallScreen = () => {
  const onDecline = () => {
    console.log('on Decline');
  };
  const onAccep = () => {
    console.log('on Accep');
  };
  return (
    <ImageBackground source={bg} style={styles.bg} resizeMethod="auto">
      <Text style={styles.name}>Alex</Text>
      <Text style={styles.phoneNumber}>WhatsApp Video...</Text>
      <View style={[styles.row, {marginTop: 'auto'}]}>
        <View style={styles.iconContainer}>
          <Feather name="clock" color="black" size={30} />
          <Text style={styles.iconText}>Remind me</Text>
        </View>
        <View style={styles.iconContainer}>
          <Feather name="message-circle" color="black" size={30} />
          <Text style={styles.iconText}>Message</Text>
        </View>
      </View>
      <View style={styles.row}>
        {/* 拒绝按钮 */}
        <Pressable onPress={onDecline} style={styles.iconContainer}>
          <View style={styles.iconButtonContainer}>
            <Feather name="x" color="black" size={40} />
          </View>
          <Text style={styles.iconText}>Decline</Text>
        </Pressable>
        {/* 接受按钮 */}
        <Pressable onPress={onAccep} style={styles.iconContainer}>
          <View
            style={[styles.iconButtonContainer, {backgroundColor: '#2e7bff'}]}>
            <Feather name="check" color="black" size={40} />
          </View>
          <Text style={styles.iconText}>Accept</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 20,
  },
  bg: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingBottom: 50,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconText: {marginTop: 10},
  iconButtonContainer: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50,
    margin: 10,
  },
});
export default IncomingCallScreen;
