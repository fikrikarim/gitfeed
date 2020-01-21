import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Button, TextInput } from "react-native-paper";

import { textPrimary } from "../constants/theme";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={3}>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.title}>Login via Github</Text>

          <TextInput
            style={styles.input}
            label="Github username"
            value={username}
            onChangeText={text => setUsername(text)}
            dense
          />

          <TextInput
            style={styles.input}
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={text => setPassword(text)}
            dense
          />

          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={styles.submitButton}
          >
            Next
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

SignInScreen.navigationOptions = {
  title: "SignInScreen"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  title: {
    fontSize: 20,
    color: textPrimary,
    paddingBottom: 8
  },
  card: {
    // marginTop: 50
  },
  cardContent: {
    borderRadius: 8
  },
  submitButton: {
    marginTop: 24
  },
  input: {
    backgroundColor: "transparent",
    paddingHorizontal: 0
  }
});

export default SignInScreen;
