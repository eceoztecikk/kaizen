import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { width } from "../../constants/lenght";

const windowWidth = Dimensions.get('window').width;

const SliderExample = () => {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.extrazone.com/promotions/list?Channel=PWA', {
        headers: {
          'X-Country-Id': 'TR',
          'X-Language-Id': 'TR'
        }
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setTags(data);
      } else {
        console.error('Data is not in expected format:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const parseTitle = (title) => {
    const strippedTitle = title.replace(/<[^>]+>/g, '');
    return strippedTitle;
  };
  const handleScroll = (event) => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor((contentOffsetX + slideWidth / 2) / slideWidth);
    setActiveSlide(index);
  };

  const navigateToDetail = (tagId) => {
    navigation.navigate('Detail', { id: tagId });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {tags.map((tag, index) => (
          <TouchableOpacity key={index} onPress={() => navigateToDetail(tag.Id)}>
            <View style={[styles.slide, { backgroundColor: 'white' }]}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: tag.ImageUrl }} style={styles.image} />
                <View style={styles.remaining}>
                  <Text style={styles.remainingText}>{tag.RemainingText}</Text>
                </View>
                <Image source={{ uri: tag.BrandIconUrl }} style={styles.brandIcon} />
              </View>
              <Text style={styles.text}>{parseTitle(tag.Title)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {tags.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeSlide ? '#F40000' : '#aaa',
                width: index === activeSlide ? 30 : 10,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: windowWidth,
    alignItems: 'center',
    padding: 5,
    borderWidth: 2,
    borderColor: '#F4F6F5',
    height: 500,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
  },
  imageContainer: {
    width: width - 10,
    height: 400,
    borderRadius: 50,
    marginBottom: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderBottomLeftRadius: 120
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#1D1E1C'
  },
  brandIcon: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    borderRadius: 5,
    backgroundColor: '#D8D8D8',
    marginHorizontal: 5,
    marginTop: -20,
    height:10
  },
  remaining: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#1D1E1C',
    color: 'white',
    padding: 5,
    borderRadius:100
  },
  remainingText: {
    color: 'white',
  },
});

export default SliderExample;
