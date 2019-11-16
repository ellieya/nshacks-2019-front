import React from 'react';
import { Alert } from 'react-native'
import * as Permissions from 'expo-permissions'
import { Audio } from 'expo-av'
export async function message(isRecording) {
  const { status, permissions } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
  if (status === 'granted') {
    const recording = new Audio.Recording();

    //recording
    if (!isRecording) {
      try {
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        Alert.alert("ran");
        await recording.startAsync();
        // You are now recording!
      } catch (error) {
        //An error occurred!
        Alert.alert("NO");
      }
      Alert.alert("Now Recording");
    } else {
      Alert.alert("Stop recording");
      await recording.stopAndUnloadAsync();
    }
  } else {
    Alert.alert("Cannot record");
  }
}
