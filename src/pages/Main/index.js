import React, { componentDidMount, useState, useEffect} from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Amplify, {API} from 'aws-amplify';
import awsconfig from '../../aws-exports';
import Colors from '../../styles/colors';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Icon from 'react-native-vector-icons/MaterialIcons';

Amplify.configure(awsconfig);

const Main = ({navigation}) => {
    const [categorys, setCategorys] = React.useState([]);
    const [cateName, cateNameSet] = React.useState('');
    const [entryList, setEntryList] = useState([]);

    useEffect( () => {
        console.log('Hey, ho');
        API.get('CategoryAPI', '/entry/amout').then( res => {
            setEntryList(res);
        });
    },[]);
    
    

    return (
        <View style={styles.container}>
            <BalancePanel/>
            <TouchableOpacity
            onPress={ () => { navigation.navigate('NewEntry', {entrys: entrySummary}) }}
            style={styles.addEntry}>
                <Icon name="add" size={35} color={Colors.white}/>
            </TouchableOpacity>
            <EntrySummary/>
            <EntryList navigation={navigation} entryList={entryList}/>
        </View>
    );

    
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
    },

    addEntry:{
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.white,
        fontSize: 20,
        backgroundColor: Colors.green,
        borderRadius: 50,
        width: 50,
        height: 50,
        shadowColor: Colors.black,
        elevation: 10,
        marginTop: -25,
        marginRight: 12,
    }
    
});

export default Main;