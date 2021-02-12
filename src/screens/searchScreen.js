import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const searchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((item) => {
      return item.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text> {errorMessage} </Text> : null}
      <Text>We have found {results.length} results </Text>
      <ResultsList results={filterResultsByPrice("₺")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("₺₺")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("₺₺₺")} title="Big Spender" />
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
