import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import Animated, { interpolate, Extrapolate, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from "../../constants/colors";

const { width: SRC_WIDTH } = Dimensions.get("window");
const CARD_LENGTH = SRC_WIDTH * 0.8;
const SPACING = SRC_WIDTH * 0.05;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.05) / 3;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface itemProps {
  index: number,
  scrollX: number,
  item: any,
  textColor: string,
}

function Item({ index, scrollX, item, textColor }: itemProps) {
  const size = useSharedValue(0.8);

  const inputRange = [
    (index - 1) * (CARD_LENGTH + SPACING),
    index * (CARD_LENGTH + SPACING),
    (index + 1) * (CARD_LENGTH + SPACING),
  ];

  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP,
  );

  const opacity = useSharedValue(1);
  const opacityInputRange = [
    (index - 1) * (CARD_LENGTH + SPACING),
    index * (CARD_LENGTH + SPACING),
    (index + 1) * (CARD_LENGTH + SPACING),
  ];
  opacity.value = interpolate(
    scrollX,
    opacityInputRange,
    [0.5, 1, 0.5],
    Extrapolate.CLAMP,
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
      opacity: opacity.value,
    };
  });

  const navigation = useNavigation();

  const navigateToDetail = (tagId) => {
    navigation.navigate('Detail', { id: tagId });
  };

  const parseTitle = (title) => {
    const strippedTitle = title.replace(/<[^>]+>/g, '');
    return strippedTitle;
  };
  const [tags, setTags] = useState([]);

  return (
    <TouchableOpacity onPress={() => navigateToDetail(item.Id)}>
      <Animated.View style={[styles.card, cardStyle, {
        marginLeft: index === 0 ? SIDECARD_LENGTH : SPACING / 2,
        marginRight: index === tags.length - 2 ? SIDECARD_LENGTH : SPACING / 2,
      }]}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.ImageUrl }}
            style={styles.image}
          />
          <View style={styles.remaining}>
            <Text style={styles.remainingText}>{item.RemainingText}</Text>
          </View>
          <Image source={{ uri: item.BrandIconUrl }} style={styles.brandIcon} />
        </View>
        <Text style={styles.text}>{parseTitle(item.Title)}</Text>
        <Text style={[styles.text2, { color: textColor }]}>Daha Daha</Text>
        <View style={[styles.slantedBoxContainer, { backgroundColor: textColor }]}>
          <View style={styles.slantedBox}></View>
        </View>
      </Animated.View>

    </TouchableOpacity>
  );
}

function Pagination({ scrollX, dataLength }) {
  const dots = new Array(dataLength).fill(0);

  return (
    <View style={styles.pagination}>
      {dots.map((_, index) => {
        const isActive = Math.round(scrollX / (CARD_LENGTH + SPACING)) === index;
        const dotStyle = useAnimatedStyle(() => {
          const opacity = interpolate(
            scrollX,
            [
              (index - 1) * (CARD_LENGTH + SPACING),
              index * (CARD_LENGTH + SPACING),
              (index + 1) * (CARD_LENGTH + SPACING),
            ],
            [0.3, 1, 0.3],
            Extrapolate.CLAMP
          );
          const width = interpolate(
            opacity,
            [0.3, 1],
            [10, 20]
          );
          return { opacity, width };
        });
        return (
          <Animated.View key={index} style={[styles.dot, dotStyle, { backgroundColor: isActive ? COLORS.RED : '#1D1E1C' }]} />
        );
      })}
    </View>
  );
}

export default function Carousel() {
  const [scrollX, setScrollX] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.extrazone.com/promotions/list?Channel=PWA', {
        headers: {
          'X-Country-Id': 'TR',
          'X-Language-Id': 'TR',
        },
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

  return (
    <Animated.View>
      <AnimatedFlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + SPACING}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={"center"}
        data={tags}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <Item index={index} scrollX={scrollX} item={item} textColor={item.ListButtonTextBackGroudColor} />
          );
        }}
        keyExtractor={(item) => item.Id.toString()}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
      />
      <Pagination scrollX={scrollX} dataLength={tags.length} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_LENGTH,
    height: 400,
    overflow: 'hidden',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
    borderWidth: 2,
    borderColor: '#F4F6F5',
    padding: 3,
    alignItems: "center"
  },
  imageContainer: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginBottom: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    borderBottomLeftRadius: 120,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D1E1C',
    textAlign: 'center',
  },
  brandIcon: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  remaining: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#1D1E1C',
    color: 'white',
    padding: 7,
    borderRadius: 100,
  },
  remainingText: {
    color: 'white',
  },
  text2: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: '700',
    marginTop: 10
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1D1E1C',
    marginHorizontal: 5,
  },
  slantedBoxContainer: {
    position: 'absolute',
    bottom: -5,
    left: 0,
    width: '100%',
    height: 10,
    overflow: 'hidden',
  },
  slantedBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '5%',
    backgroundColor: 'transparent',
    transform: [{ skewY: '-5deg' }],
  },
});
