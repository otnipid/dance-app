import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { LoginScreen } from "./LoginScreen";
import { VideoListScreen } from "./VideoListScreen";
import { VideoPlayerScreen } from "./VideoPlayerScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#65adf1",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <StackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="VideoList"
        component={VideoListScreen}
        options={{ title: "Dance Videos" }}
      />
      <StackNavigator.Screen
        name="VideoPlayer"
        component={VideoPlayerScreen}
        options={{ title: "Video Player" }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);