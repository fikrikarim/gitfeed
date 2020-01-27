import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { auth as authKey } from "../constants/storage";

const AuthLoadingScreen = props => {
  useEffect(() => {
    (async function() {
      credential = await AsyncStorage.getItem(authKey);

      if (credential) {
        props.navigation.navigate("Main");
      } else {
        props.navigation.navigate("SignIn");
      }
    })();
  }, []);

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
    padding: 10
  }
});

export default AuthLoadingScreen;
