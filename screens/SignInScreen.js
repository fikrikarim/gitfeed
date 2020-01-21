import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const SignInScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>SignInScreen</Text>
    </ScrollView>
  );
};

SignInScreen.navigationOptions = {
  title: "SignInScreen"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default SignInScreen;
