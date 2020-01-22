import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar, Button } from "react-native-paper";
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
      <View>
        <Button
          style={styles.searchButton}
          mode="contained"
          onPress={() => setRepository(repository)}
        >
          Search Repository
        </Button>
      </View>
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
  searchButton: {
    marginTop: 10
  }
});

export default RepoListScreen;
