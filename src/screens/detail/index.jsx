import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import { useRoute } from '@react-navigation/native';
import BackHeader from "../../components/headers/backHeader";
import { COLORS } from "../../constants/colors";
const { width: screenWidth } = Dimensions.get('window');
import { styles } from "./styles";

const Detail = () => {
  const route = useRoute();
  const { id } = route.params;
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      const response = await fetch(`https://api.extrazone.com/promotions?Id=${id}`, {
        headers: {
          'X-Country-Id': 'TR',
          'X-Language-Id': 'TR'
        }
      });
      const data = await response.json();
      setDetail(data);
    } catch (error) {
      console.error('Error fetching detail:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (!detail) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Data not available.</Text>
      </View>
    );
  }
  const parseTitle = (title) => {
    const strippedTitle = title.replace(/<[^>]+>/g, '');
    return strippedTitle;
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={{ uri: detail.ImageUrl }}
            style={{
              width: screenWidth,
              height: screenWidth,
              borderBottomLeftRadius: 120,
            }}
          />
          <Image source={{ uri: detail.BrandIconUrl }} style={styles.brandIcon} />
        </View>
        <View style={{ alignItems: 'center', width: screenWidth }}>
          <Text style={styles.title}>{parseTitle(detail.Title)}</Text>
          <Text style={styles.detail}>{parseTitle(detail.Description)}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.blur}></View>
        <Text style={styles.buttonText}>Hemen Katıl</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Detail;
