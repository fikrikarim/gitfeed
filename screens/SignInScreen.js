import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Button, TextInput } from "react-native-paper";

import { textPrimary, textError } from "../constants/theme";
import { login } from "../api";
import { Main } from "../constants/screens";

const SignInScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUsernameFilled, setisUsernameFilled] = useState(false);

  const signIn = async () => {
    setError("");
    setIsLoading(true);

    try {
      await login({ username, password });

      props.navigation.navigate(Main);
    } catch (error) {
      setError(error.message);

      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={3}>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.title}>Login via Github</Text>

          <TextInput
            testID={"githubUsername"}
            style={styles.input}
            label="Github username"
            value={username}
            onChangeText={text => setUsername(text)}
            disabled={isUsernameFilled}
            dense
          />

          {isUsernameFilled && (
            <TextInput
              testID={"githubPassword"}
              style={styles.input}
              label="Password"
              value={password}
              secureTextEntry
              onChangeText={text => setPassword(text)}
              disabled={isLoading}
              dense
            />
          )}

          {!isUsernameFilled && (
            <Button
              testID={"nextButton"}
              mode="contained"
              onPress={() => setisUsernameFilled(true)}
              style={styles.submitButton}
            >
              Next
            </Button>
          )}

          <Text style={styles.error}>{error}</Text>

          {isUsernameFilled && (
            <>
              <Button
                testID={"loginButton"}
                mode="contained"
                onPress={signIn}
                style={styles.submitButton}
                disabled={isLoading}
              >
                Login
              </Button>

              <Button
                mode="flat"
                compact
                onPress={() => setisUsernameFilled(false)}
                style={styles.submitButton}
              >
                Change username
              </Button>
            </>
          )}
        </Card.Content>
      </Card>
    </View>
  );
};

SignInScreen.navigationOptions = {
  title: "Sign In"
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
    //
  },
  error: {
    color: textError
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
