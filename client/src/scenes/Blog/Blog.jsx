import { Box, Pagination } from "@mui/material";
import Container from "components/Container";
import BlogButtons from "../../components/Blog/BlogButtons";
import logo from "assets/imgs/secretenergycandleslogo.png";
import img10 from "assets/imgs/IMG_8768-Edit.jpg";

const Blog = () => {
  return (
    <Container flexDirection="column" gap={3}>
      <Box
        mt="5vh"
        sx={{ width: "60%", maxWidth: "320px", maxHwight: "251px" }}
      >
        <img src={logo} alt="" style={{ width: "100%" }} />
      </Box>
      <Box
        width="100%"
        height="500px"
        sx={{
          backgroundImage: `url(${img10})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></Box>

      <BlogButtons />
      <Box mb='1rem'>
        <Pagination count={10} color={"primary"} />
      </Box>
    </Container>
  );
};

export default Blog;
