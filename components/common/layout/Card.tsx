import moment from "moment";
import { Box, Button, HStack, Heading, Stack, Text } from "native-base";
import React from "react";

type Props = {
  title: string;
  description: string;
  date: string;
};

const handleTextLimit = (text: string, limit: number) => {
  return text.length >= limit ? `${text.substring(0, limit)}...` : text;
};

export const Card: React.FC<Props> = ({ description, title, date }) => {
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
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading color={"yellow.400"} size="md" ml="-1">
              {title}
            </Heading>
            <Text
              fontSize="xs"
              color={"cyan.300"}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {handleTextLimit(description, 140)}
            </Text>
          </Stack>
          <Text fontWeight="400"></Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="yellow.600" fontWeight="400">
                Lançado em: {moment(date).format("DD/MM/YYYY")}
              </Text>
            </HStack>
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
