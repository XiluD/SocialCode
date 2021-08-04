import { StatusBar } from "expo-status-bar";
import React from "react";
import {Image, StyleSheet, Text, View, ScrollView, SafeAreaView} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "./Card";

const Profile = ({ navigation }) => {
  const data = [
    {
      userImage: require("../assets/profileImage.jpg"),
      userName: "Patricia Conde",
      userAccount: "@patri_conde",
      userImagePost: require("../assets/insidePostContentImage.jpg"),
      userPostTile: "AdobeXd",
      userPostSubtitle: "Begginers Tutorial",
      userPostBody:
        "In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.",
      key: Math.random().toString(36).substr(2, 15),
    },

    {
      userImage: require("../assets/profileImage4.jpg"),
      userName: "Patricia Conde",
      userAccount: "@patri_conde",
      userImagePost: require("../assets/insidePostContentImage.jpg"),
      userPostTile: "AdobeXd",
      userPostSubtitle: "Begginers Tutorial",
      userPostBody:
        "In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.",
      key: Math.random().toString(36).substr(2, 15),
    },

    {
      userImage: require("../assets/profileImage3.jpg"),
      userName: "Patricia Conde",
      userAccount: "@patri_conde",
      userImagePost: require("../assets/insidePostContentImage.jpg"),
      userPostTile: "AdobeXd",
      userPostSubtitle: "Begginers Tutorial",
      userPostBody:
        "In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.",
      key: Math.random().toString(36).substr(2, 15),
    },
    {
      userImage: require("../assets/profileImage3.jpg"),
      userName: "Patricia Conde",
      userAccount: "@patri_conde",
      userImagePost: require("../assets/insidePostContentImage.jpg"),
      userPostTile: "AdobeXd",
      userPostSubtitle: "Begginers Tutorial",
      userPostBody:
        "In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.",
      key: Math.random().toString(36).substr(2, 15),
    },
  ];

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <StatusBar style="auto" />
        <Image
          source={require("../assets/profileImage.jpg")}
          style={styles.HeaderImage}
        />
        <Text style={styles.textTitle}>Patricia Conde</Text>
        <Text>@patri_conde</Text>
        <Text style={styles.textBody}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor sed do eiusmod tempor.
        </Text>
        <View style={styles.rowContainer}>
          <View style={styles.separatorContainer}>
            <Text style={styles.boldText}>140</Text>
            <Text>POSTS</Text>
          </View>
          <View style={styles.separatorContainer}>
            <Text style={styles.boldText}>1,980</Text>
            <Text>FOLLOWING</Text>
          </View>
          <View style={globalStyles.container}>
            <Text style={styles.boldText}>24K</Text>
            <Text>FOLLOWERS</Text>
          </View>
        </View>
        <SafeAreaView style={{marginLeft: 15}}>
          {data.map(item => (
            <View key={item.key}>
              <Card cardData={item} showHeader={false} navigation={navigation}/>
            </View>
          ))}
        </SafeAreaView>
      </View>
    </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  HeaderImage: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 100,
    marginTop: 20,
  },
  textTitle: {
    fontSize: 20,
  },
  textBody: {
    marginTop: 10,
    width: 300,
    textAlign: "justify",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    marginRight: 15,
    marginLeft: 15,
    marginTop: 30,
    marginBottom: 30,
  },
  separatorContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRightColor: "#000",
    borderRightWidth: 2,
  },
  boldText: {
    fontWeight: "bold",
  },
});
export default Profile;
