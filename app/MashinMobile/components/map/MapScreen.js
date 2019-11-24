import React, {Component} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions} from 'react-native';

class MapScreen extends React.Component {
    static navigationOptions = {
        header:null,
    };
    
    state = {
        region: null
    };

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: {latitude, longitude} }) => {
                this.setState({region: {
                    latitude,
                    longitude,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134,
                }
            });
            },
            () => {},
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        );
    }
    render() {
        const {region} = this.state;
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <MapView 
                style={styles.mapStyle}
                region={region}
                showsUserLocation
                loadingEnabled
                />
            </View>
        );
    } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  }
});
 
export default MapScreen;