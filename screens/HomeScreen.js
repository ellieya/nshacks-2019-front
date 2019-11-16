import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';
import {RecordingButton} from './RecordingHandler';
import { Header } from 'react-native-elements';
import { Tile } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Card } from 'react-native-elements';


import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  

  return (

    <View style={styles.container}>
      <Header style={styles.headerStyle}
          placement="center"
          centerComponent={{ text: 'SECOND CHANCE', style: { color: '#fff' } }}
            />
      
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.welcomeContainer}>
          <Tile
          imageSrc={require('../assets/images/helpinghand.jpg')}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption="Some Caption Text"
        />
        </View>

      
      <View style={styles.lowerHalf}>
        <View style={styles.helpContainer}>
        <Card style={styles.cardBgColor}
          title='Welcome to Second Chance'
            >
          <Text style={{marginBottom: 30}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 

          </Text>
          
        </Card>
    
        </View>

       
        <View style={styles.buttonStyle}>
          <RecordingButton/>

          </View>
        </View>
   
      </ScrollView>




      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          Tab Bar.
        </Text>

      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lowerHalf: {
    backgroundColor: "#f7f7f7",
    marginTop: 10,
    height: 150
  },
  headerStyle: {
    height: 40,
  },
  cardBgColor: {
    backgroundColor: 'blue',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: '#fff',
  },
  appNameContainer: {
    alignItems: 'center',
    marginHorizontal: 60,
  },
  appNameText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonStyle: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#1e90ff',
    color: '#fff',
    height: 100,
    lineHeight: 90
  },
  buttonText: {
    color: '#fff',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 0,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
