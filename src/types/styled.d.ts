import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: {[key: string]: string}
    colors: {[key: string]: string}
    fonts: {
      weights: {[key: string]: number}
      colors: {[key: string]: string}
      family: string
      colors: {[key: string]: string}
      sizes: {[key: string]: string}
    }
    roundness: string
  }
}
