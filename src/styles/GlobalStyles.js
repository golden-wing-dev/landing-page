import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        /* Light theme variables */
        --primary-color: #0984e3;
        --secondary-color: #00b894;
        --text-color: #2d3436;
        --light-text: #636e72;
        --light-background: #f5f6fa;
        --white: #ffffff;
        --background: #ffffff;
        --card-background: #ffffff;
        --border-color: #ddd;
        --hover-color: #0984e3;
      }

      [data-theme='dark'] {
        --text-color: #f5f6fa;
        --light-text: #b2bec3;
        --light-background: #2d3436;
        --white: #2d3436;
        --background: #1e272e;
        --card-background: #2d3436;
        --border-color: #4a4a4a;
        --hover-color: #74b9ff;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--text-color);
        background-color: var(--background);
        line-height: 1.5;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
        color: inherit;
      }

      input, textarea {
        color: var(--text-color);
        background-color: var(--card-background);
        border: 1px solid var(--border-color);
      }

      img {
        max-width: 100%;
        height: auto;
      }

      /* Smooth transition for theme changes */
      body, button, input, textarea, div, section, header {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      }

      /* Selection color */
      ::selection {
        background-color: var(--primary-color);
        color: white;
      }
    `}
  />
);

export default GlobalStyles; 