import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Alert } from "react-native";
import React from 'react';
import Loading from './Loading'
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "84b91dbdf9a665b2dae8077d12ccb2e8"

export default class extends React.Component {
    state = {
        isLoading: true
    };
    getWeather = async (latitude, longitude) => {
        const {
            data: {
                main: {
                    temp
                },
                weather
            }
        } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )
        this.setState({ isLoading: false, temp, condition: weather[0].main });

    }
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {
                coords: {
                    latitude,
                    longitude
                }
            } = await Location.getCurrentPositionAsync();
            // axios를 get으로 받아오면 data란 곳에 쌓여서 받아옴
            this.getWeather(latitude, longitude);

            console.log(latitude, longitude)
        } catch (error) {
            Alert.alert("쏘리~");
        }
    };
    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { isLoading, temp, condition } = this.state;
        return isLoading
            ? <Loading />
            : <Weather temp={Math.round(temp)} condition={condition} />;
        // view 안에 모든 것을 집어 넣자 ! span이 아닌 text
    }

}
