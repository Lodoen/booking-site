import { ThemeProvider } from "styled-components";

const theme = {
  screen: {
    small: "300px",
    medium: "450px",
    large: "600px",
    max: "800px",
  },
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
