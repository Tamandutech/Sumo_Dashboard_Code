import { config } from "@config/gluestack-ui.config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";

export default function MainLayout() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <GluestackUIProvider config={config} colorMode={colorScheme || "dark"}>
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerShown: false,
          }}
        />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
});
