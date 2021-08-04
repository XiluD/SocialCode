import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "./Card";

const MyPosts = ({ navigation }) => {
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
        <TouchableOpacity style={styles.showMoreButton} onPress={() => { navigation.navigate("CreateNewPost") }}>
          <Text style={styles.showMoreButtonText}>+ Create</Text>
        </TouchableOpacity>
        <View style={[globalStyles.userInfoContainer, { marginTop: 25, marginBottom: 30 }]}>
          <Image
            source={require("../assets/profileImage.jpg")}
            style={globalStyles.userInfoImage}
          />
          <View style={globalStyles.userInfoTextContainer}>
            <Text>Patricia Conde</Text>
            <Text>@patri_conde</Text>
          </View>
        </View>
        <SafeAreaView style={{ marginLeft: 15 }}>
          {data.map(item => (
            <View key={item.key}>
              <Card cardData={item} showHeader={false} navigation={navigation} />
            </View>
          ))}
        </SafeAreaView>
      </View>
    </ScrollView>

  );
};
const styles = StyleSheet.create({
  showMoreButton: {
    position: "absolute",
    right: 10,
    alignSelf: "flex-end",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 30,
    width: 80,
    backgroundColor: "#1B76FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  showMoreButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
export default MyPosts;
