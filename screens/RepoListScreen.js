import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RepoDetails } from "../constants/screens";

const RepoListScreen = props => {
  const [repository, setRepository] = useState("facebook/reactnative");

  const searchRepo = () => {
    props.navigation.navigate(RepoDetails, { repository });
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="user/repository"
        onChangeText={text => setRepository(text)}
        onIconPress={searchRepo}
        value={repository}
      />
    </View>
  );
};

RepoListScreen.navigationOptions = {
  title: "Browse any repository"
};

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

export default RepoListScreen;
