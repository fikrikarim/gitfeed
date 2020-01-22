import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-paper";
import { getCommits } from "../api";

const RepoDetailsScreen = props => {
  const repository = props.navigation.getParam("repository");
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    (async function() {
      const response = await getCommits({ repository });

      setCommits(response);
    })();
  }, []);

  const Commit = ({ item }) => {
    const { message } = item.commit;

    return <Text>{message}</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={commits}
        renderItem={({ item }) => <Commit item={item} />}
        keyExtractor={item => item.sha}
        // onRefresh={fetchData}
        // refreshing={loading}
        // ListFooterComponent={<Footer />}
        // onEndReached={fetchMore}
      />
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
    paddingTop: 10
  },
  input: {
    backgroundColor: "transparent",
    paddingHorizontal: 0
  }
});

export default RepoDetailsScreen;
