import React from 'react'
import { Global, css} from '@emotion/react';
import './Fonts.css'


export const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
	--red: #9d0a0eff;
	--orange: #c18c5dff;
	--white: #edeff9ff;
	--light-grey: #9da0aaff;
	--dark-grey: #5e6066ff;
	--black: #0b0b0bff;
	--green: #02f2beff;
	--turquoise: #03a0b5ff;
	--blue: #05668dff;
	--fredoka: "Fredoka One", "Open Sans", sans-serif;
        font-display: optional;
      }
      body {
        font-family: var(--opensans);
        margin: 0;
        padding: 0;
        bottom: 0;
        overflow-x: hidden;
        width: 100%;
      }
      html {
        background-color: var(--appblack);
        color: var(--appwhite);
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        bottom: 0;
        min-height: 100%;
      }
      button {
        cursor: pointer;
      }
      img {
        margin: 0;
        padding: 0;
      }
      input[type='file' i]::-webkit-file-upload-button {
        cursor: pointer;
      }
    `}
  />
);
