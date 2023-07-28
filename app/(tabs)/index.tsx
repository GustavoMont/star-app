import { StyleSheet } from "react-native";
import { Layout } from "@/components/common/layout/Layout";
import { useQuery } from "@tanstack/react-query";
import { listMovies } from "@/services/movie-services";
import { FlatList, Spinner, VStack, View, useTheme } from "native-base";
import { MovieCard } from "@/components/movie/MovieCard";
import { Movie } from "@/models/Movie";
import { useRouter } from "expo-router";

export default function MoviesScreen() {
  const { data: movies, isLoading } = useQuery(["movies"], listMovies);
  const { colors } = useTheme();
  const router = useRouter();
  const onSelectMovie = (movie: Movie) => {
    router.push("/information/movie");
  };
  return (
    <Layout>
      {isLoading ? <Spinner color={colors.white} /> : null}
      <VStack>
        {movies ? (
          <FlatList
            w={"full"}
            data={movies}
            renderItem={({ item }) => (
              <View mb={4}>
                <MovieCard onPress={onSelectMovie} movie={item} />
              </View>
            )}
            keyExtractor={({ episodeId }) => episodeId.toString()}
          />
        ) : null}
      </VStack>
    </Layout>
  );
}
