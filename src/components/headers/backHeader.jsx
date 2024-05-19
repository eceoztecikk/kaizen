import React from 'react';
import { View,TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { width } from "../../constants/lenght";
import BackBtn from "../../assets/svg/BackBtn";

const BackHeader = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('Keşfet');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress}>
        <BackBtn />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'android' ? width * 0.05 : width * 0.12,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal:15
  },
});

export default BackHeader;
