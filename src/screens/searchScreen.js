import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const searchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  );
};

export default searchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
