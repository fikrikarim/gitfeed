import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

import store from "./store";
import { theme } from "./constants/theme";
import AppNavigator from "./navigation/AppNavigator";
import NavigationService from "./navigation/NavigationService";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
