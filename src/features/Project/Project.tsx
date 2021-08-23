import Content from "@Components/Content"
import React from "react"
import {Button, Title} from "react-native-paper"

const ProjectScreen = () => {
  return (
    <Content>
      <Title>Project</Title>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}>
        Press me
      </Button>
    </Content>
  )
}
export default ProjectScreen
