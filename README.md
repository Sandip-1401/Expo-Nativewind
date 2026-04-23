# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


## EXPO + NATIVEWIND v5 (FINAL WORKING SETUP)

1. 🧱Create Project

npx create-expo-app myApp
cd myApp

2. 📦Install NativeWind v5 + deps

npx expo install nativewind@preview react-native-css react-native-reanimated react-native-safe-area-context

3. 🎨Install Tailwind + PostCSS

npx expo install --dev tailwindcss @tailwindcss/postcss postcss

4. 📄postcss.config.mjs

export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

5. 🎨global.css

@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";

@import "nativewind/theme";

6. ⚙️metro.config.js

const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativewind(config);

7. ⚙️babel.config.js (FINAL CORRECT)

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin", // 👈 ONLY THIS
    ],
  };
};

8. 📦package.json fix

"overrides": {
  "lightningcss": "1.30.1"
}

9. 🧠TypeScript (optional but recommended)
👉 file: nativewind-env.d.ts

/// <reference types="react-native-css/types" />

10. 📥 Import CSS (IMPORTANT)
👉 file: app/_layout.tsx

import "../global.css";


11. 🧪Test Screen
👉 app/(tabs)/index.tsx

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white text-xl font-bold">
        NativeWind v5 Working 🚀
      </Text>
    </View>
  );
}


12. 🔄Run (ALWAYS CLEAN)

npx expo start -c


- 🚨 GOLDEN RULES (IMPORTANT)
- ❌ nativewind/babel → NOT in v5
- ✅ CSS import → _layout.tsx
- ✅ Metro config → required
- ✅ PostCSS → required
- ✅ Always -c (cache clear)


- 💥 If something breaks
- rm -rf node_modules .expo
- npm install
- npx expo start -c