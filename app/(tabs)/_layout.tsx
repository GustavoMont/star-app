import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, TextStyle, useColorScheme } from "react-native";

import Colors from "@/constants/Colors";
import { StyleProp } from "react-native";
import { Icon, StatusBar, useTheme } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Layout } from "@/components/common/layout/Layout";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { colors } = useTheme();

  const tabBarLabelStyle: StyleProp<TextStyle> = {
    fontSize: 16,
  };

  return (
    <>
      <StatusBar backgroundColor={colors.dark[50]} barStyle={"light-content"} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.yellow[300],
          tabBarInactiveBackgroundColor: colors.dark[300],
          tabBarActiveBackgroundColor: colors.dark[50],
          tabBarInactiveTintColor: colors.dark[700],
          headerStyle: {
            backgroundColor: colors.dark[50],
          },
          headerTitleStyle: {
            color: colors.yellow[300],
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Filmes",
            tabBarLabelStyle,
            tabBarIcon: ({ color }) => (
              <Icon as={MaterialIcons} color={color} name="movie" />
            ),
          }}
        />
        <Tabs.Screen
          name="characters-screen"
          options={{
            title: "Personagens",
            tabBarIcon: ({ color }) => (
              <Icon as={MaterialIcons} color={color} name="groups" />
            ),
            tabBarLabelStyle,
          }}
        />
        <Tabs.Screen
          name="planets"
          options={{
            title: "Planetas",
            tabBarIcon: ({ color }) => (
              <Icon as={Ionicons} color={color} name="planet-sharp" />
            ),
            tabBarLabelStyle,
          }}
        />
      </Tabs>
    </>
  );
}
