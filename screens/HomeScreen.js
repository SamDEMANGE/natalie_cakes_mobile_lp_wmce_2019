import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import ListeRecettes from "../components/ListeRecettes";
import {bdd} from '../database';






let recettes= bdd.ref('/Recettes');


export default class HomeScreen extends React.Component {






    static navigationOptions = {
      //  header: null,
        title : 'Accueil'
    };

    state = {
        isLoadingComplete: false,
        recette: []
    };

    componentDidMount() {
        recettes.once('value', (snapshot) => {
            //   let data=snapshot.toJSON();

            //  this.setState({recettes:(data)});

            let data = snapshot.val();
            let recette = Object.values(data);
            this.setState({recette});

          //  console.log(this.state.recette);
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.header}>
                        <Image

                            source={require('../assets/images/logo_cakes.png')}
                            style={{width: 350, backgroundColor: '#fbf2c1'}}
                        />

                    </View>


                    <View style={styles.container}>

                        <TextInput
                            placeholder={"  Recherche..."}
                            style={{
                                borderBottomColor: '#000000',
                                borderWidth: 3, marginTop: 50, width: 250, marginLeft: 50
                            }}
                        />
                        <View style={{backgroundColor: "#e22565", width: 50, height: 250, marginTop: 50}}>
                            <Image

                                source={require('../assets/images/add.png')}
                                style={{width: 30, marginTop: 25, marginLeft: 10}}
                            />
                            <Image

                                source={require('../assets/images/tags.png')}
                                style={{width: 30, marginTop: 25, marginLeft: 10}}
                            />
                            <Image

                                source={require('../assets/images/favorite.png')}
                                style={{width: 30, marginTop: 25, marginLeft: 10}}
                            />
                            <Image

                                source={require('../assets/images/shopping.png')}
                                style={{width: 30, marginTop: 25, marginLeft: 10}}
                            />
                        </View>
                        <View style={{left: 80, bottom: 270, right: 20}}>


                            <View>
                                {
                                    this.state.recette.length > 0
                                        ? <ListeRecettes items={this.state.recette}/>
                                        : <Text>No items</Text>
                                }
                            </View>


                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    /*
      _maybeRenderDevelopmentModeWarning() {
        if (__DEV__) {
          const learnMoreButton = (
            <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
              Learn more
            </Text>
          );

          return (
            <Text style={styles.developmentModeText}>
              Development mode is enabled, your app will be slower but you can use useful development
              tools. {learnMoreButton}
            </Text>
          );
        } else {
          return (
            <Text style={styles.developmentModeText}>
              You are not in development mode, your app will run at full speed.
            </Text>
          );
        }
      }

      _handleLearnMorePress = () => {
        WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
      };

      _handleHelpPress = () => {
        WebBrowser.openBrowserAsync(
          'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
        );
      };
    }
    */

}
    const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        developmentModeText: {
            marginBottom: 20,
            color: 'rgba(0,0,0,0.4)',
            fontSize: 14,
            lineHeight: 19,
            textAlign: 'center',
        },
        contentContainer: {
            paddingTop: 30,
        },
        welcomeContainer: {
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 20,
        },
        welcomeImage: {
            width: 100,
            height: 80,
            resizeMode: 'contain',
            marginTop: 3,
            marginLeft: -10,
        },
        getStartedContainer: {
            alignItems: 'center',
            marginHorizontal: 50,
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
        getStartedText: {
            fontSize: 17,
            color: 'rgba(96,100,109, 1)',
            lineHeight: 24,
            textAlign: 'center',
        },
        tabBarInfoContainer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            ...Platform.select({
                ios: {
                    shadowColor: 'black',
                    shadowOffset: {height: -3},
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
            marginTop: 15,
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



