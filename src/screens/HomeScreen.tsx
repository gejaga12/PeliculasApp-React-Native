import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { peliculasEnCine, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 15 }}>
        {/* CARRUSEL PRINCIPAL */}
        <View style={{ height: 400 }}>
          <Carousel
            data={peliculasEnCine}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* PELICULAS POPULARES */}
        <HorizontalSlider movies={peliculasEnCine} title="En Cine" />
      </View>
    </ScrollView>
  );
};
