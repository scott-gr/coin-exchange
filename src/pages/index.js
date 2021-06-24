import * as React from "react"
import Converter from "../components/Converter"
import 'normalize.css';
import { GlobalStyles } from '../GlobalStyles';

// markup
const IndexPage = () => {
  return (
    <>
    <GlobalStyles />
    <main>
      < Converter />
    </main>
    </>
  )
}

export default IndexPage
