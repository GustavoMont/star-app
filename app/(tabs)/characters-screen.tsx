import { Layout } from "@/components/common/layout/Layout";
import { FlatList, Spinner, View, useTheme } from "native-base";
import { useQuery } from "@tanstack/react-query";
import { listCharacters } from "@/services/character-services";
import { CharacterCard } from "@/components/characters/CharacterCard";

export default function CharactersScreen() {
  const { data: characters, isLoading } = useQuery(
    ["characters"],
    listCharacters
  );
  const { colors } = useTheme();
  return (
    <Layout>
      {isLoading ? <Spinner color={colors.white} /> : null}

      {characters ? (
        <FlatList
          w={"full"}
          data={characters}
          renderItem={({ item }) => (
            <View mb={4}>
              <CharacterCard character={item} />
            </View>
          )}
          keyExtractor={({ url }) => url}
        />
      ) : null}
    </Layout>
  );
}
