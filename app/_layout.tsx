import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {
  useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-black': require('../assets/fonts/Outfit-Black.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-light': require('../assets/fonts/Outfit-Light.ttf'),
    'outfit-thin': require('../assets/fonts/Outfit-Thin.ttf'),
    'outfit-extra-light': require('../assets/fonts/Outfit-ExtraLight.ttf'),
    'outfit-extra-bold': require('../assets/fonts/Outfit-ExtraBold.ttf'),
    'outfit-semi-bold': require('../assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-regular': require('../assets/fonts/Outfit-Regular.ttf'),
  })
  return (
    <Stack>
      <Stack.Screen name="(tabs)"
      options = {{
          headerShown: false

      }}
      />
    </Stack>
  );
}
