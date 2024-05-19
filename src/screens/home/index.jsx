import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/headers/homeHeader";
import TabView from "../../components/tabs/homeTab";
import Carousel from "../../components/tabs/slider";


const Home = () => {

  return (
    <ScrollView showsVerticalScrollIndicator={false}  style={styles.container}>
      <Header />
      <TabView />
      <Carousel />
    </ScrollView>
  );
};

export default Home;
