import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

import { checkIsLoggedIn } from "../actions/auth";
import { Main, SignIn } from "../constants/screens";

const AuthLoadingScreen = props => {
  const { isLoggedIn, checkIsLoggedIn } = props;

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  useEffect(() => {
    if (isLoggedIn === true) {
      props.navigation.navigate(Main);
    }
    if (isLoggedIn === false) {
      props.navigation.navigate(SignIn);
    }
  }, [isLoggedIn]);

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

const mapStateToProps = state => {
  const { isLoggedIn } = state.auth;

  return {
    isLoggedIn
  };
};

const mapDispatchToProps = {
  checkIsLoggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
