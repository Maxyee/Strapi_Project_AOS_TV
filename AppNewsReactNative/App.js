import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      {/* Heading box */}
      <View>
        <Text>Corona News</Text>
      </View>

      {/* news box */}
      <View style = {newsBox.newsbox}>

          {/* news box image */}
          <View style = {newsBoxImage.newsboximage}>
            <Text>images</Text>
          </View>

          {/* news box header */}
          <View style={newsBoxHeader.newsboxheader}>
            <Text>News Head</Text>
          </View>          
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    //flexDirection: 'row',
    backgroundColor: 'skyblue',
    alignItems: 'stretch',
    // justifyContent: 'center',
  },
});


const newsBox = StyleSheet.create({
  newsbox: {
    flex:2,
    flexDirection:'row',
  }
});



const newsBoxImage = StyleSheet.create({
  newsboximage: {
    flex:2,
    //width:50,
    height: 150,
    backgroundColor:'yellow',
  }
});


const newsBoxHeader = StyleSheet.create({
  newsboxheader: {
    flex:2,
    //width:50,
    height: 150,
    backgroundColor:'red',
  }
});
