import {RouteProp} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
export type HomeParamList = {
  Project: undefined
  List: undefined
}

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: NativeStackNavigationProp<HomeParamList, T>
  route: RouteProp<HomeParamList, T>
}
