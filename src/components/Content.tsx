import React, {FunctionComponent} from "react"
import {useSafeAreaInsets} from "react-native-safe-area-context"
import styled, {css} from "../utils/styled-components"

const ContentWrapper = styled.View<{inset: number}>`
  ${({theme}) => css`
    height: 100%;
    margin-horizontal: ${theme.spacing.sm};
    margin-top: ${({inset}: {inset: number}) => inset}px;
  `}
`

const Content: FunctionComponent = ({children}) => {
  const insets = useSafeAreaInsets()

  return <ContentWrapper inset={insets.top}>{children}</ContentWrapper>
}

export default Content
