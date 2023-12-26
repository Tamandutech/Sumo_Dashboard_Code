import HomeIcon from "@/components/icons/HomeIcon";
import {
  Heading,
  Icon,
  Text,
  useColorMode,
  useToken,
} from "@gluestack-ui/themed";
import { Tabs } from "expo-router";
import type { ComponentType } from "react";

const pages = new Map<
  string,
  { title: string; icon: ComponentType; headerShown: boolean }
>([["index", { title: "Início", icon: HomeIcon, headerShown: false }]]);

export default function RootLayout() {
  const colorMode = useColorMode();
  const tabBarStyle = {
    backgroundColor: useToken(
      "colors",
      colorMode === "dark" ? "backgroundDark950" : "backgroundDark50",
    ),
    borderTopColor: useToken(
      "colors",
      colorMode === "dark" ? "backgroundDark800" : "backgroundDark200",
    ),
  };
  const headerStyle = {
    backgroundColor: tabBarStyle.backgroundColor,
    borderColor: tabBarStyle.borderTopColor,
    elevation: 1,
  };
  return (
    <Tabs
      screenOptions={{
        tabBarStyle,
        headerStyle,
        headerTitle: ({ children }) => <Heading>{children}</Heading>,
        tabBarLabel: ({ children }) => <Text size="sm">{children}</Text>,
        tabBarActiveTintColor: "$primary500",
        tabBarInactiveTintColor: "$tertiary500",
      }}
    >
      {Array.from(pages.entries()).map(
        ([name, { title, icon, headerShown }]) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title,
              tabBarIcon: ({ color }) => <Icon as={icon} color={color} />,
              headerShown,
            }}
          />
        ),
      )}
    </Tabs>
  );
}
