import React from "react"
import {cleanup, render} from "@testing-library/react-native"

import List from "./List"
import {ThemeProvider} from "@Utils/styled-components"
import {theme} from "@Utils/theme"

afterEach(cleanup)

describe("List", () => {
  it("should show 'List'", () => {
    const text = "List"

    const {getByText} = render(
      <ThemeProvider theme={theme}>
        <List />
      </ThemeProvider>,
    )
    const foundHelloWorldText = getByText(text)

    expect(foundHelloWorldText.props.children).toEqual(text)
  })
})
