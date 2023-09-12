import { ThemeProvider } from "styled-components";

const theme = {
  screen: {
    max: "800px",
    small: "450px",
    medium: "600px",
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
