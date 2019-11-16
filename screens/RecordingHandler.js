import React from 'react';
import {Alert} from 'react-native'
import * as Permissions from 'expo-permissions';
 //const message = () =>  Alert.alert("Lol");
    
 export async function message(){
    const { status, permissions } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status === 'granted') {
      Alert.alert("LOL");
    } else {
      throw new Error('Location permission not granted');
    }
 }