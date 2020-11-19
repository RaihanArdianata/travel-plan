import React, { useState } from "react"
import {StyleSheet} from "react-native"

import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input, Image, AirbnbRating  } from "react-native-elements";
import { Text, View } from "../components/Themed";

export default function CreateTrip() {
  const [form, setForm] = useState([{},{},{},{}])
  return(
    <View style={[styles.root, {alignItems: "center"}]}>
      {
        form.map((datum, index)=>{
          return(
            <View key={index} style={[styles.container,{display: "flex", flexDirection: "row"}]}>
              <Text>Hello</Text>
            </View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "flex-start",
  },
  container: {
    alignItems: "flex-start",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "normal",
    opacity: 0.5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  rating: {
    backgroundColor: "transparent",
  },
});