/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TextInput,
  SectionList,
  } from 'react-native';
import { search, cancel_icon, check } from './src/images/';
const rowBGColors = ['#F1FAFE', '#F9FCEE', '#FFF8F5', '#FEF7E'];
let randomHex = () => {
  let color = rowBGColors[Math.floor(Math.random() * 3)];
  return color;
}
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
          <View style={styles.headerView}>
            <Text style={styles.cancelText}>Cancel</Text>
            <Text style={styles.addRemoveText}>Add/remove contacts</Text>
            <Text style={styles.saveText}>Save</Text>
          </View>
          <View style={styles.searchView}>
            <Image source={search} style={styles.searchIcon} />
            <TextInput placeholder='Search in contacts....' style={styles.searchTextBox} />
          </View>
          <View style={styles.profileView}>
            <View style={{alignItems:'center'}}>
            <View>
              <Image source={{uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}} style={styles.profilePic} />
              <Image source={cancel_icon} style={styles.cancelPic} />
            </View>
              <Text style={styles.profileName}>Paulina</Text>
            </View>
            <View style={{ alignItems: 'center', marginLeft: 20 }}>
            <View>
              <Image source={{ uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }} style={styles.profilePic} />
              <Image source={cancel_icon} style={styles.cancelPic} />
            </View>
            <Text style={styles.profileName}>Will</Text>
            </View>
           </View>
          <View style={{marginTop:10, flex:1}}>
          <SectionList
            sections={[
                { title: 'A', data: [{ firstName: 'ALTERED', lastName: 'TERED' }, { firstName: 'ABBY', lastName: 'TABBY' }, { firstName: 'ACTION', lastName: 'TU.S.A.' }, { firstName: 'AMUCK', lastName: 'UAMUCK' }, { firstName: 'ANNY', lastName: 'Kom' }] },
                { title: 'B', data: [{ firstName: 'BEST', lastName: 'MEN' }, { firstName: 'BEYOND', lastName: 'JUSTICE' }, { firstName: 'BLACK', lastName: 'GUNN' }, { firstName: 'BLOOD', lastName: 'RANCH' }, { firstName: 'BEASTIES', lastName: 'LRANCH' }] },
                { title: 'C', data: [{ firstName: 'CARTEL', lastName: 'Nem' }, { firstName: 'CASTLE', lastName: 'EVIL' }, { firstName: 'CHANCE', lastName: 'HEVIL' }, { firstName: 'COP', lastName: 'GAME' }, { firstName: 'CROSS', lastName: 'FIRE' }] },
                { title: 'D', data: [{ firstName: 'DLTERED', lastName: 'FNem' }, { firstName: 'DBBY', lastName: 'GNem' }, { firstName: 'DCTION', lastName: 'U.S.A.' }, { firstName: 'DMUCK', lastName: 'HDMUCK' }, { firstName: 'DNGUISH', lastName: 'RDMUCK' }] },
                { title: 'E', data: [{ firstName: 'EEST', lastName: 'Mem' }, { firstName: 'EEYOND', lastName: 'JUSTICE' }, { firstName: 'ELACK', lastName: 'GUNN' }, { firstName: 'ELOOD', lastName: 'RANCH' }, { firstName: 'EEASTIES', lastName: 'FANCH' }] },
                { title: 'F', data: [{ firstName: 'FARTEL', lastName: 'DMem' }, { firstName: 'FASTLE', lastName: 'EVIL' }, { firstName: 'FHANCE', lastName: 'SFHANCE' }, { firstName: 'FCOP', lastName: 'GAME' }, { firstName: 'FCROSS', lastName: 'FIRE' }] },
            ]}
              renderItem={({ item, index }) => 
                <View style={styles.itemView} backgroundColor={randomHex()}>
                  <View style={{flex:1,flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start'}}><Text style={styles.item}>{item.firstName}</Text><Text style={styles.item2}>{item.lastName}</Text></View> 
            <View style={styles.rightSideView}>
              <Image source={index % 2 == 0 ? check : null} style={{ height: 24, width: 24 }}  />
            </View>
            </View>
            }
            renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          /> 
          </View> 
          </View>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    top: 0,
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    top: 0,
    backgroundColor: 'white',
    flex: 1,
  },
  headerView: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cancelText: {
    color: '#AEC2CF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  addRemoveText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
  },
  saveText: {
    color: '#0068FB',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  searchView:{
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#EDF3F6',
    height: 40,
  }, 
  searchIcon: {
    marginLeft: 10,
    height: 20,
    width: 20,
  },
  searchTextBox: {
    flex: 1,
    marginLeft: 15,
    color: 'black',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  profileView:{
    marginTop: 30,
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profilePic: {
  width: 80, 
  height: 80, 
  borderRadius: 80 / 2,
},
  cancelPic:{
    position: 'absolute',
    top: 0,
    left:60,
    height: 25,
    width: 25,
    backgroundColor:'white'
  },
  profile1:{
      position: 'absolute',
      top: 0,
      left: 80,
      height: 25,
      width: 25,
      backgroundColor: 'white',
    },
  profileName:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop:10,
  },
  sectionHeader: {
    marginTop:15,
    marginLeft:35,
    fontSize: 20,
    fontWeight: '400',
    color: "black",
  },
  itemView:{
    flex:1,
    borderRadius:10,
    marginLeft:20,
    marginRight: 20,
    marginTop:10,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  item: {
    padding: 10,
    fontWeight:'normal',
    fontSize: 16,
    height: 44,
  },
  item2: {
    fontWeight:'bold',
    padding: 10,
    fontWeight: '600',
    fontSize: 16,
    height: 44,
  },
  rightSideView:{
    height:24,
    width:24,
    borderRadius : 24/2,
    backgroundColor:'white',
    marginRight:20,
  }  
  
  
});

export default App;
