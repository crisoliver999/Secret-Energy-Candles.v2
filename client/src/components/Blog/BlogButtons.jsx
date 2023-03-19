import {Box, Typography} from "@mui/material";
import imgCandles from "assets/imgs/IMG_8727.jpg";
import imgShop from "assets/imgs/IMG_8755.jpg";
import imgStones from "assets/imgs/IMG_8737.jpg";
import { useNavigate } from "react-router-dom";
import ImageButton from "./ImageButton";
import ImageSrc from "./ImageSrc";
import Image from "./Image";
import ImageBackdrop from "./ImageBackdrop";
import ImageMarked from "./ImageMarked";

const images = [
  {
    url: imgCandles,
    title: "AS NOSSSAS VELAS",
    path: "/blog/velas",
  },
  {
    url: imgShop,
    title: "LOJA",
    path: "/loja",
  },
  {
    url: imgStones,
    title: "PEDRAS",
    path: "/blog/pedras",
  },
];

export default function BlogButtons() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between ",
        minWidth: 300,
        width: "100%",
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: "31.5%",
          }}
          onClick={() => navigate(image.path)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
