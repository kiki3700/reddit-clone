import { View, Text, Image, StyleSheet, FlatList } from "react-native";

import posts from '../../../../assets/data/posts.json'

// import {formatDistanceToNowStrict} from "date-fns"

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import PostListItem from "../../../components/PostListItem";
import React from "react";



export default function HomeScreen(){

    // const post = posts[0];

    return (
    <View>
    <FlatList 
    data={posts}
    renderItem={({item}) => <PostListItem post={item}/>}/>
    {/* <PostListItem post={posts[0]}/> */}
    {/* <PostListItem post={posts[1]}/> */}
</View>)

}



const styles = StyleSheet.create({

      iconBox: {

    borderWidth: 0.5,

    borderColor: '#D4D4D4',

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 20

  },

joinButtonText:{backgroundColor: "blue", color:"white", paddingVertical:2, paddingHorizontal:7, borderRadius:10}

})