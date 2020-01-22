import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const RepoDetailsScreen = props => {
  const repository = props.navigation.getParam("repository");

  return (
    <View style={styles.container}>
      <Text>{repository}</Text>
    </View>
  );
};

RepoDetailsScreen.navigationOptions = props => ({
  title: props.navigation.getParam("repository")
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  },
  input: {
    backgroundColor: "transparent",
    paddingHorizontal: 0
  }
});

export default RepoDetailsScreen;
