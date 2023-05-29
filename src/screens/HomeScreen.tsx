import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useNavigation } from '@react-navigation/native';
import { Movie } from '../interfaces/movieInterface';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = ({ movie }: Props) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
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
      <View style={{ backgroundColor: 'black', alignItems: 'center', paddingVertical: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("GuideScreen", movie)}>
          <Text style={{ fontWeight: '900', fontSize: 30, backgroundColor: 'green', color: 'black', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 10 }}>GUIDE</Text>
        </TouchableOpacity>
      </View>

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
