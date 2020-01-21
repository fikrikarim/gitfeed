import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const AuthLoadingScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      const rand_boolean = Math.random() >= 0.5;

      if (rand_boolean) {
        props.navigation.navigate("Main");
      } else {
        props.navigation.navigate("SignIn");
      }
    }, 1000);
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
