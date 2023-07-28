import { Character } from "@/models/Character";
import { Box, Button, HStack, Heading, Stack, Text, VStack } from "native-base";
import React from "react";

type Props = {
  character: Character;
};

export const CharacterCard: React.FC<Props> = ({ character }) => {
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
        <Stack p="4">
          <Stack>
            <Heading color={"yellow.400"} size="md" ml="-1">
              {character.name}
            </Heading>
            <Text
              fontSize="xs"
              color={"cyan.300"}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            ></Text>
          </Stack>
          <Text fontWeight="400"></Text>
          <HStack alignItems="center" justifyContent="space-between">
            <VStack>
              <Text color="yellow.300" fontWeight="400">
                Cor dos olhos: {character.eyeColor}
              </Text>
              <Text color="cyan.300" fontWeight="400">
                Cabelo: {character.hairColor}
              </Text>
              <Text color="cyan.300" fontWeight="400">
                Altura: {character.height}cm
              </Text>
            </VStack>
          </HStack>
        </Stack>
        <Button rounded={"none"} backgroundColor={"darkBlue.600"}>
          <Text color={"white"} fontWeight={"bold"}>
            Ver mais
          </Text>
        </Button>
      </Box>
    </Box>
  );
};
