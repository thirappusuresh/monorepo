import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import LandingPage from "./src/pages/LandingPage";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LandingPage />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25,
    padding: 10
  }
});

export default App;
