import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from "react-native";
import { COLORS } from "../../constants/colors";

const TabView = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.extrazone.com/tags/list', {
      headers: {
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR'
      }
    })
      .then(response => response.json())
      .then(data => {
        setTabs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={COLORS.RED} style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.tabBar} showsHorizontalScrollIndicator={false}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.Id}
            style={selectedTab === index ? styles.activeTab : styles.tab}
            onPress={() => setSelectedTab(index)}
          >
            <Image source={{ uri: tab.IconUrl }} style={styles.icon} />
            <Text style={selectedTab === index ? styles.activeTabText : styles.tabText}>
              {tab.Name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tab: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'lightgray',
    flexDirection: "row",
  },
  activeTab: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.RED,
    flexDirection: "row"
  },
  tabText: {
    color: '#1D1E1C',
    marginLeft: 5
  },
  activeTabText: {
    color: '#1D1E1C',
    fontWeight: 'bold',
    marginLeft: 5
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius:10
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabView;
