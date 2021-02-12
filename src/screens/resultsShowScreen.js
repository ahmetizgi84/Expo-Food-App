import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const resultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}> {result.name} </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};

export default resultsShowScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginVertical: 5,
    alignSelf: "center",
  },
  image: {
    height: 200,
    width: "100%",
    marginBottom: 5,
  },
});
