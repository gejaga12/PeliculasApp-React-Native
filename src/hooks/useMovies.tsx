import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBMovieResponse } from '../interfaces/movieInterface';

interface MovieState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MovieState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBMovieResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMovieResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMovieResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMovieResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    // now_playing (PELICULAS REPRODUCIENDOSE)
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
