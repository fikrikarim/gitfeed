import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const AuthLoadingScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("MainTabNavigator");
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    padding: 10
  }
});

export default AuthLoadingScreen;
