import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const RepoDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>RepoDetailsScreen</Text>
    </ScrollView>
  );
};

RepoDetailsScreen.navigationOptions = {
  title: "Particular Repository"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default RepoDetailsScreen;
