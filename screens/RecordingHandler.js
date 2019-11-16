import React from 'react';
import { Button, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import {Audio} from 'expo-av';

import { ExpoConfigView } from '@expo/samples';
export  class RecordingButton extends React.Component {
    state = {
      duration: 1000 * 60 * 3,
      recording: false
    }
  
    constructor (props) {
      super(props)
      this._recordInstance = new Audio.Recording()
      this._recordInstance.setOnRecordingStatusUpdate(() => {
        this.onRecordingStatusUpdate()
      })
    }
  
    componentDidMount() {
      this.askForPermission()
    }
  
    onPress () {
      if (this.state.recording) {
        this.stop()
      } else {
        this.start()
      }
    }
  
    async askForPermission () {
      const permission = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
      this.setState({hasPermission: permission.status === 'granted'})
    }
  
    timeRemaining () {
      let {endTime, lastTick} = this.state
      const minutesRemaining = Math.floor((endTime - lastTick) / 1000 / 60)
      const secondsRemaining = Math.round((endTime- lastTick)  / 1000 - minutesRemaining * 60)
      return {minutes: minutesRemaining, seconds: secondsRemaining}
    }
  
    recordingComplete () {
      console.log('recording complete')
    }
  
    stop () {
      this.setState({recording: false}, async () => {
        await this._recordInstance.stopAndUnloadAsync()
      })
    }
  
    async start () {
      clearInterval(this._timer)
      const currentTime = new Date().getTime()
      const endTime = currentTime + this.state.duration
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        staysActiveInBackground: false,
        playThroughEarpieceAndroid:false
      })
      await this._recordInstance.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY)
      this.setState({
        recording: true,
        endTime,
        lastTick: currentTime
      }, async () => {
        this.setState({recording: true})
        try {
          await this._recordInstance.startAsync()
        } catch (error) {
          console.error(error)
        }
  
        this._timer = setInterval(
          () => {
            const lastTick = new Date().getTime()
            if (lastTick > endTime) {
              this.recordingComplete()
            } else {
              this.setState({lastTick})
            }
          },
          1000
        )
      })
  
    }
  
    onRecordingStatusUpdate (status) {
      console.log('recording status', status)
    }
  
    render() {
      return (
        
        <Button
          onPress={() => this.onPress()}
          title={this.state.recording ? "STOP RECORDING" : "RECORD"}
          />

      );
    }
  }
  
 