import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/native';
import CallActionBox from '../../components/CallActionBox';

const CallingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const user = route?.params?.user;

  const callAsync = async () => {
    await console.log('20');
    console.log('30');
    await console.log('23');
    console.log('31');
    console.log('32');
    console.log('33');
    console.log('34');
    console.log('35');
    await console.log('21');
    await console.log('22');
    await console.log('24');
    await console.log('25');
  };
  const goBack = () => {
    console.log('1');
    callAsync();
    console.log('5');
    console.log('51');
    console.log('52');
    console.log('53');
    console.log('54');
    navigation.goBack();
  };
  return (
    <View style={styles.page}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <Feather name="arrow-left" color={'white'} size={25} />
      </Pressable>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>{user?.user_display_name}</Text>
        <Text style={styles.phoneNumber}>ringing +86 131 1111 1234</Text>
      </View>
      <CallActionBox />
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
    marginTop: 20,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 20,
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
});
export default CallingScreen;
