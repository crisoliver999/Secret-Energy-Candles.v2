import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "theme";
import { createTheme } from "@mui/material/styles";
import Home from "scenes/Home/Home";
import Blog from "scenes/Blog/Blog.jsx";
import Contacts from "scenes/Contacts/Contacts";
import Layout from "scenes/Layout/Layout";
import Shop from "scenes/Shop/Shop";
import BlogCandles from "scenes/BlogCandles/BlogCandles";
import BlogStones from "scenes/BlogStones/BlogStones";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/loja" element={<Shop />} />
              <Route path="/contacto" element={<Contacts />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/velas" element={<BlogCandles />} />
              <Route path="/blog/pedras" element={<BlogStones />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
