import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, ScrollView} from 'react-native';

const Datails = ({route, navigation}) => {
  const {title, urlToImage, description, content, author, publishedAt} =
    route.params;
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', margin: 16}}>
        {title}
      </Text>
      <Text style={{fontSize: 15, margin: 16}}>{description}</Text>
      <Text style={{fontSize: 15, margin: 16}}>{content}</Text>
      <Text style={{fontSize: 10, fontWeight: 'bold'}}>{author}</Text>
      <View style={{height: 1, backgroundColor: '#ddd'}}></View>
      <Image
        source={{uri: urlToImage}}
        style={{width: '100%', height: '70%', borderRadius: 10}}
      />
    </View>
  );
};

export default Datails;

const styles = StyleSheet.create({
  view: {},
});
