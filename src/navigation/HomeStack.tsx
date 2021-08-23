import MapScreen from "@Features/Project/Project"
import ListScreen from "@Features/List/List"

import React from "react"

import {HomeParamList} from "./HomeParamList"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

interface HomeStackProps {}

const Stack = createNativeStackNavigator<HomeParamList>()

export const HomeStack: React.FunctionComponent<HomeStackProps> = () => (
  <Stack.Navigator>
    <Stack.Screen name="Project" component={MapScreen} />
    <Stack.Screen name="List" component={ListScreen} />
  </Stack.Navigator>
)
