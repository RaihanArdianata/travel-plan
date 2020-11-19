import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input, Image, AirbnbRating  } from "react-native-elements";

export default function DetailPlace({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const {params} = route

  return (
    <View style={[styles.root, { position: "relative" , justifyContent: "center", alignItems: "center"}]}>
      <Image
        source={{ uri: params.banner }}
        containerStyle={{ width: "100%", height: "100%"}}
      />
      <View style={{position: "absolute", backgroundColor: 'transparent',width: "90%", height: "90%", flexDirection: "column", justifyContent: "space-between"}}>
        <Button
          // icon={<Icon name="arrow" size={20} color="white" />}
          buttonStyle={{
            borderRadius: 50,
            width: 50,
            height: 50,
            backgroundColor: "transparent",
          }}
          style={{position: "absolute", top: 10}}
        />
        <View lightColor="transparent" style={{alignItems:"flex-start"}}>
          <Text style={[styles.title,{fontSize: 26, fontFamily: 'billy-signature', fontWeight: "normal"}]} lightColor="#ffffff">{params.name}</Text>
          <Text style={[styles.subtitle,{fontSize: 16, fontWeight: "normal"}]} lightColor="#ffffff">{params.description}</Text>
          <AirbnbRating isDisabled={true} showRating={false} count={5} defaultRating={params.rating} size={8}  />
          <Text style={[styles.subtitle,{fontSize: 16, fontWeight: "normal", opacity: 1}]} lightColor="#ffffff">{params.rating.toFixed(1)}</Text>
          <View style={{backgroundColor: "transparent", marginTop: 20, display:  "flex", width: "100%", justifyContent: "space-between", flexDirection: "row"}}>

            <Button
              buttonStyle={{
                borderRadius: 10,
                backgroundColor: "#233637",
              }}
              containerStyle={{flex: 1}}
              titleStyle={{ fontWeight: "bold"}}
              title="Read more"
            />
            <View style={{backgroundColor: "transparent", marginHorizontal: 10}}/>
            <Button
              buttonStyle={{
                borderRadius: 10,
                backgroundColor: "#ffffff",
                flex: 1
              }}
              containerStyle={{flex: 1}}
              titleStyle={{color: "#233637", fontWeight: "bold"}}
              title="Plan trip"
            />
          </View>
        </View>
      </View>
    </View>
  );
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
