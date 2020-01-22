import React from "react";
import { ScrollView, StyleSheet, Text, Button } from "react-native";
import { RepoDetails } from "../constants/screens";

const RepoListScreen = props => {
  return (
    <ScrollView style={styles.container}>
      <Text>RepoListScreen</Text>

      <Button
        onPress={() => props.navigation.navigate(RepoDetails)}
        title="Repo Details"
      ></Button>
    </ScrollView>
  );
};

RepoListScreen.navigationOptions = {
  title: "Browse any repository"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default RepoListScreen;
