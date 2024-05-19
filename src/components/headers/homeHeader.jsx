import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import Logo from "../../assets/svg/Logo";
import { COLORS } from "../../constants/colors";
import { height, width } from "../../constants/lenght";
import User from "../../assets/svg/User";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Logo />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <User />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: COLORS.WHITE,
    marginTop: Platform.OS === 'android' ? width * 0.1 : width * 0.2,

  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: COLORS.RED,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    marginRight: 10,
    width: width * 0.25,
    height:height * 0.05,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Header;
