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
    View,
    ScrollView,
    StatusBar,
    Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const MainPage = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.body}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={styles.containerView}>
                    <Button style={styles.button} title="Open Add Edit Contacts" onPress={() => Actions.addremovecontacts()}></Button>
                    <Button style={styles.button} title="Open Chat List Client Company View" onPress={() => Actions.chatlistcompanyview()}></Button>
                </View>
        </ScrollView>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginTop: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        //flex: 1,
        //marginTop: 0,
    },
    containerView:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 35,
        margin : 20,
        backgroundColor:'blue',
    },
});

export default MainPage;
