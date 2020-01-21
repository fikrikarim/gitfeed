import { DefaultTheme } from "react-native-paper";

// Pallete 5 on Refactoring UI
const colors = {
  primary: {
    one: "hsl(209, 61%, 16%)",
    two: "hsl(211, 39%, 23%)",
    three: "hsl(209, 34%, 30%)",
    four: "hsl(209, 28%, 39%)",
    five: "hsl(210, 22%, 49%)",
    six: "hsl(209, 23%, 60%)",
    seven: "hsl(211, 27%, 70%)",
    eight: "hsl(210, 31%, 80%)",
    nine: "hsl(212, 33%, 89%)",
    ten: "hsl(210, 36%, 96%)"
  },
  cyan: {
    one: "hsl(204, 96%, 27%)",
    two: "hsl(203, 87%, 34%)",
    three: "hsl(202, 83%, 41%)",
    four: "hsl(201, 79%, 46%)",
    five: "hsl(199, 84%, 55%)",
    six: "hsl(197, 92%, 61%)",
    seven: "hsl(196, 94%, 67%)",
    eight: "hsl(195, 97%, 75%)",
    nine: "hsl(195, 100%, 85%)",
    ten: "hsl(195, 100%, 95%)"
  }
};

export const primary = colors.primary.one;
export const accent = colors.cyan.four;

export const borderSeconday = "rgba(158, 150, 150, 0.2)";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primary,
    accent: accent
  }
};
