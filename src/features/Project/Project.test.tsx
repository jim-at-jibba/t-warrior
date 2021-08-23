import React from "react"
import {cleanup, render} from "@testing-library/react-native"

import Map from "./Map"
import {ThemeProvider} from "@Utils/styled-components"
import {theme} from "@Utils/theme"

afterEach(cleanup)

describe("Map", () => {
  it("should show 'Map'", () => {
    const text = "Map"

    const {getByText} = render(
      <ThemeProvider theme={theme}>
        <Map />
      </ThemeProvider>,
    )
    const foundHelloWorldText = getByText(text)

    expect(foundHelloWorldText.props.children).toEqual(text)
  })
})
