import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

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
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* PELICULAS POPULARES */}
        <HorizontalSlider movies={popular} title="Populares" />
        {/* PELICULAS TOP */}
        <HorizontalSlider movies={topRated} title="Top" />
        {/* PELICULAS POR VENIR */}
        <HorizontalSlider movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
