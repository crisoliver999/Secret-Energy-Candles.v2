import { Box, Pagination } from "@mui/material";
import Container from "components/Container";
import BlogButtons from "../../components/BlogButtons";
import BlogPost from "components/BlogPost";

import logo from "assets/imgs/secretenergycandleslogo.png";
import img10 from "assets/imgs/IMG_8768-Edit.jpg";

const posts = [
  {
    img: img10,
    title: "test",
    shortText:
      "sdfsdfsdfsd saffdrg sesrgrstg dga sergsdsgdgreg se g gsdg sg ersg egsr gsdfsdfsdfsd saffdrg sesrgrstg",
  },
  {
    img: img10,
    title: "test",
    shortText:
      "sdfsdfsdfsd saffdrg sesrgrstg dga sergsdsgdgreg se g gsdg sg ersg egsr gsdfsdfsdfsd saffdrg sesrgrstg",
  },
  {
    img: img10,
    title: "test",
    shortText:
      "sdfsdfsdfsd saffdrg sesrgrstg dga sergsdsgdgreg se g gsdg sg ersg egsr gsdfsdfsdfsd saffdrg sesrgrstg",
  },
  {
    img: img10,
    title: "test",
    shortText:
      "sdfsdfsdfsd saffdrg sesrgrstg dga sergsdsgdgreg se g gsdg sg ersg egsr gsdfsdfsdfsd saffdrg sesrgrstg",
  },
];

const Blog = () => {
  return (
    <Container flexDirection="column" gap={3}>
      <Box
        mt="5vh"
        sx={{ width: "60%", maxWidth: "320px", maxHeight: "251px" }}
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

      {posts.map((post, i) => (
        <BlogPost
          key={i}
          post={post}
          isLeftSide={i % 2 === 0 ? true : false}
        ></BlogPost>
      ))}

      <Box mb="1rem">
        <Pagination count={10} color={"primary"} />
      </Box>
    </Container>
  );
};

export default Blog;
