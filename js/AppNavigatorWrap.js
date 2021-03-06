import React, {Component} from 'react';
import {StatusBar, Dimensions, Platform, Text} from 'react-native';
import {connect} from 'react-redux';
import {Drawer, Container, Button} from 'native-base';

import SideBar from './components/sideBar/sideBar2';

import AppNavigator from './AppRouteConfigs';
import {DrawerNavigator} from 'react-navigation';

export const DrawerNavigation = DrawerNavigator({
    wrapApp: {
        screen: AppNavigator,
    }
}, {
    contentComponent: SideBar
});

const deviceHeight = Dimensions.get('window').height;

const wrapContainerStyle = {
    height: deviceHeight * 0.96,
    paddingTop: deviceHeight * 0.04,
    position: "relative",
    backgroundColor: "black",
};


class AppNavigatorWrap extends Component {

    render() {
        return (
            <Container style={(Platform.OS == "android" && Platform.Version < 20) ? wrapContainerStyle : {}}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                    style={{height: 50}}
                />
                <DrawerNavigation/>
            </Container>
        );
    }
}

export default AppNavigatorWrap;
