import { StyleSheet } from "react-native";
import { Layout } from "@/components/common/layout/Layout";
import { useQuery } from "@tanstack/react-query";
import { listMovies } from "@/services/movie-services";
import { FlatList, HStack, Spinner, VStack, View, useTheme } from "native-base";
import { Card } from "@/components/common/layout/Card";

export default function MoviesScreen() {
  const { data: movies, isLoading } = useQuery(["movies"], listMovies);
  const { colors } = useTheme();
  return (
    <Layout>
      {isLoading ? <Spinner color={colors.white} /> : null}
      <VStack py="2">
        {movies ? (
          <FlatList
            w={"full"}
            data={movies}
            renderItem={({ item }) => (
              <View mb={4}>
                <Card
                  date={item.releaseDate}
                  title={item.title}
                  description={item.openingCrawl}
                />
              </View>
            )}
            keyExtractor={({ episodeId }) => episodeId.toString()}
          />
        ) : null}
      </VStack>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
