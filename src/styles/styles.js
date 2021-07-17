import { Global, css } from '@emotion/react';
import { useColorModeValue } from '@chakra-ui/react';

const GlobalStyle = ({ children }) => (
  <>
    <Global
      styles={css`
        ::selection {
          background-color: #3ddc84;
          color: #f7fafc;
        }
        ::-moz-selection {
          background-color: #3ddc84;
          color: #f7fafc;
        }
        html {
          scoll-behavior: smooth;
          cursor: default;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: ${useColorModeValue('#F7FAFC', '#1A202C')};
          color: ${useColorModeValue('#1A202C', '#F7FAFC')};
        }
      `}
    />
    {children}
  </>
);

export default GlobalStyle;
