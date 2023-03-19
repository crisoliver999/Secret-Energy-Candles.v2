export const themeSettings = () => {
  return {
    palette: {
      // palette values for dark mode
      primary: {
        main: "#cd7fae",
        light: "#f7e8f0",
      },
      secondary: {
        main: "#fff9f6",
      },
    },
    typography: {
      fontFamily: ["Helvetica", "sans-serif"].join(","),
      fontSize: 16,
      h1: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: "1.125rem",
        fontWeight: 200,
      },
      h3: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 14,
      },
      tandcText: { fontSize: "0.85rem" },
    },
  };
};
