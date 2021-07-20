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
        ::-webkit-scrollbar {
          width: 14px;
        }
        ::-webkit-scrollbar-track {
          background: ${useColorModeValue('#F7FAFC', '#1A202C')};
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(66, 133, 244, 1) 25%,
            rgba(61, 220, 132, 1) 75%
          );
          border-radius: 4px;
          border: 2px solid ${useColorModeValue('#F7FAFC', '#1A202C')};
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
          transition: background 200ms;
        }
      `}
    />
    {children}
  </>
);

export default GlobalStyle;
