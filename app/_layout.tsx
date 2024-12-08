import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { useColorScheme } from "react-native";
import { setTheme } from "@/redux/actions/themeAction";
import { dark, light } from "@/theme/colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  // Load the Roboto Mono font family.
  const [loaded] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  // Set the selected theme based on the color scheme (system theme).
  useEffect(() => {
    const selectedTheme = colorScheme === "dark" ? dark : light;
    store.dispatch(setTheme(selectedTheme));
  }, [colorScheme]);

  // Hide the splash screen once all assets are loaded.
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Return null if the Roboto Mono font family is not loaded.
  if (!loaded) {
    return null;
  }

  return (
    // setup all the routes
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerShown: false,
            animation: "ios",
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </PersistGate>
  );
};

export default RootLayout;
