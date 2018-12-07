import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import Shared from "../components/Shared";

class LandingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Shared />
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

export default LandingPage;
