import { Box, Pagination, Typography } from "@mui/material";
import Container from "components/Container";
import BlogPost from "components/BlogPost";

import { useTheme } from "@mui/material/styles";
import logo from "assets/imgs/secretenergycandleslogo.png";
import img10 from "assets/imgs/IMG_8768-Edit.jpg";
import imgCandles from "assets/imgs/IMG_8727.jpg";

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

const BlogCandles = () => {
  const theme = useTheme();

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
          backgroundImage: `url(${imgCandles})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb='2rem'
      >
        <Typography
          variant="h2"
          p="1rem 1.5rem"
          sx={{
            lineHeight: "1.2",
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            zIndex: 9999,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          AS NOSSAS VELAS
        </Typography>
      </Box>

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

export default BlogCandles;
