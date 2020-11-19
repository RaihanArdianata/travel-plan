import * as React from "react";
import {StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input, Image, AirbnbRating  } from "react-native-elements";

import { Text, View } from "../components/Themed";

//sample data
import popularItem from '../_sample-data/PopularLocation.json'
import activityItem from '../_sample-data/BrowseByActivity.json'

export default function TabOneScreen({navigation}:{navigation: any}) {
  return (
    <View style={styles.root}>
      <ScrollView style={{width: '100%'}}>
        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.subtitle}>Find your next trip</Text>
          <Text style={styles.title}>Explore destinations</Text>
          {/* search */}
          <View
            style={{
              marginVertical: 20,
              display: "flex",
              flexDirection: "row",
              maxWidth: "85%"
            }}
          >
            <Input
              placeholder="Search..."
              leftIcon={<Icon name="search" size={16} color="black" />}
              inputStyle={{flex: 1}}
            />
            <Button
              icon={<Icon name="sliders" size={20} color="white" />}
              buttonStyle={{
                borderRadius: 50,
                width: 50,
                height: 50,
                backgroundColor: "#4FD1A7",
              }}
            />
          </View>
        </View>
        {/* popular location */}
        <View style={[{}, styles.container]}>
          <Text style={[styles.title,{fontSize: 16, paddingHorizontal: 20}]}>
            Popular locations
          </Text>
          <ScrollView horizontal={true} style={{flexDirection: "row", paddingHorizontal: 20}} showsHorizontalScrollIndicator={false}>
            {
              popularItem.map((datum : any, index : number)=>{
                return(
                  <TouchableOpacity  onPress={()=> navigation.navigate({ name: "PlaceDetailScreen", params: datum })} key={index} style={[styles.container, {position: "relative", width: 200, height: 130, borderRadius: 8, paddingRight: 10}]}>
                    <Image
                      source={{ uri: datum.image }}
                      containerStyle= {{ width: '100%', height: '100%', borderRadius: 8}}
                    />
                    <View style={{backgroundColor: '#000000', opacity: 0.25, position: "absolute", width: "100%", height: "100%", borderRadius: 8}} />
                    <View style={{position: "absolute", backgroundColor: 'transparent', bottom: 5, left: 5, flex: 1, flexDirection: "column", alignItems: "flex-start"}}>
                      <Text style={[styles.title,{fontSize: 15, fontFamily: 'billy-signature', fontWeight: "normal"}]} lightColor="#ffffff">{datum.name}</Text>
                      <AirbnbRating isDisabled={true} showRating={false} count={5} defaultRating={datum.rating} size={8}  />
                    </View>
                  </TouchableOpacity >
                )
              })
            }
          </ScrollView>
        </View>
        {/* browse by activity */}
        <View style={[{}, styles.container]}>
          <Text style={[styles.title,{fontSize: 16, paddingHorizontal: 20}]}>
            Broswe by activity
          </Text>
          <ScrollView horizontal={true} style={{flexDirection: "row", paddingLeft: 20}} showsHorizontalScrollIndicator={false}>
            {
              activityItem.map((datum, index)=>{
                return(
                  <View key={index} style={[styles.container, {position: "relative", flex: 1, alignContent: "center", justifyContent: "center",width: 200, height: 250, borderRadius: 8, paddingRight: 10}]}>
                    <Image
                      source={{ uri: datum.image }}
                      containerStyle= {{ width: '100%', height: '100%', borderRadius: 8}}
                    />
                    <View style={{backgroundColor: '#000000', opacity: 0.25, position: "absolute", width: "100%", height: "100%", borderRadius: 8}} />
                    <View style={{position: "absolute", backgroundColor: 'transparent', bottom: 50, width: '100%'}}>
                      <Text style={[styles.title,{fontSize: 15, fontFamily: 'billy-signature', fontWeight: "normal", textAlign: "center"}]} lightColor="#ffffff">{datum.name}</Text>
                    <Text style={[styles.title,{fontSize: 15, fontFamily: 'billy-signature', fontWeight: "normal", textAlign: "center"}]} lightColor="#ffffff">{datum.count}</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 50,
  },
  container: {
    alignItems: "flex-start",
    marginVertical: 10
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
  rating:{
    backgroundColor: 'transparent'
  }
});
