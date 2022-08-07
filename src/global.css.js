import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #000103;
    box-sizing: border-box;
  }

  a {
  text-decoration: none;
  color: inherit;
}

p {
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
`;
