import { Layout } from "@/components/common/layout/Layout";
import { PlanetCard } from "@/components/planet/PlanetCard";
import { listPlanets } from "@/services/planet-services";
import { useQuery } from "@tanstack/react-query";
import { FlatList, Spinner, Text, View, useTheme } from "native-base";
import React from "react";

const Planets = () => {
  const { data: planets, isLoading } = useQuery(["planets"], listPlanets);
  const { colors } = useTheme();
  return (
    <Layout>
      {isLoading ? <Spinner color={colors.white} /> : null}

      {planets ? (
        <FlatList
          w={"full"}
          data={planets}
          renderItem={({ item, index }) => (
            <View mb={4}>
              <PlanetCard planet={item} index={index} />
            </View>
          )}
          keyExtractor={({ url }) => url}
        />
      ) : null}
    </Layout>
  );
};

export default Planets;
