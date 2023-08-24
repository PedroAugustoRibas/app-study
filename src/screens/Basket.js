import React from "react";
import { Image, StyleSheet, Text, Dimensions } from "react-native";
import topo from "../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Basket() {
  return (
    <>
      <Image source={topo} style={Style.topo}></Image>
      <Text>asdasd</Text>
    </>
  );
}

const Style = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
});
