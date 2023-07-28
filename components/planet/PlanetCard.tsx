import { Planet } from "@/models/Planet";
import { Ionicons } from "@expo/vector-icons";
import { Box, Button, HStack, Heading, Icon, Stack, Text } from "native-base";
import React from "react";

type Props = {
  planet: Planet;
  index: number;
};

const colors = ["emerald.400", "yellow.500", "cyan.500", "red.400"];

export const PlanetCard: React.FC<Props> = ({ planet, index }) => {
  return (
    <Box alignItems="center">
      <Box
        rounded="lg"
        w={"full"}
        overflow="hidden"
        borderColor="dark.500"
        borderWidth="1"
        backgroundColor={"dark.50"}
      >
        <HStack>
          <Stack p="4" space={3} w={"3/4"}>
            <Stack space={2}>
              <Heading color={"yellow.400"} size="md" ml="-1">
                {planet.name}
              </Heading>
              <Text
                fontSize="xs"
                color={"cyan.300"}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                População: {planet.population}
              </Text>
              <Text
                fontSize="xs"
                color={"cyan.300"}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                Clima: {planet.climate}
              </Text>
            </Stack>

            <Text fontWeight="400"></Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text color="yellow.600" fontWeight="400">
                  {/* Lançado em: {moment(movie.releaseDate).format("DD/MM/YYYY")} */}
                </Text>
              </HStack>
            </HStack>
          </Stack>
          <Icon
            alignSelf={"center"}
            as={Ionicons}
            size={"5xl"}
            color={colors[index % colors.length]}
            name="planet-sharp"
          />
        </HStack>
      </Box>
    </Box>
  );
};
