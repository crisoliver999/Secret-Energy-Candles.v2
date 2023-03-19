import { Box, Typography } from "@mui/material";
import homeBackground from "assets/imgs/IMG_8755.jpg";
import logo from "assets/imgs/secretenergycandleslogo.png";
import FlexCenter from "components/FlexCenter";
import Container from "components/Container";
import img1 from "assets/imgs/IMG_8771.jpg";
import img2 from "assets/imgs/IMG_8777.jpg";
import img3 from "assets/imgs/IMG_8727.jpg";
import { useTheme } from "@mui/material/styles";
import CommonButton from "components/CommonButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [aboutUsOpen, setAboutUsOpen] = useState(false);

  const toggleAboutUs = (state) => {
    setAboutUsOpen(state);
    console.log(state);
  };

  return (
    <Box>
      <FlexCenter
        height="90vh"
        sx={{
          background: `url(${homeBackground}), rgb(150,150,150)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          backgroundBlendMode: "multiply",
        }}
      >
        <img
          src={logo}
          alt=""
          style={{
            margin: "auto",
            width: "60%",
            maxWidth: "498px",
            maxHeight: "392px",
          }}
        />
      </FlexCenter>

      <Container
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="9vh 0 3rem 0"
      >
        <img
          src={img1}
          alt=""
          style={{ width: "50%", maxWidth: "300px", height: "auto" }}
        />
        <Box width="70%" ml="-2rem" display="flex" flexDirection="column">
          <Typography
            variant="h2"
            ml="50px"
            mr="auto"
            p="1rem 1.5rem"
            sx={{
              lineHeight: "1.2",
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              zIndex: 9999,
              letterSpacing: "2px",
            }}
          >
            QUEM SOMOS
          </Typography>
          <Typography
            backgroundColor={theme.palette.primary.light}
            p="2rem 2.7rem"
            fontSize="0.85rem"
            mt="-1.7rem"
            lineHeight="2"
            sx={{ zIndex: 9 }}
          >
            {aboutUsOpen
              ? "A Secret Energy Candle, tem em si toda uma essência de destaque. O segredo destas velas é a energia que cada uma destas transmite, conforme o gosto de cada um dos nossos clientes. Pretendo-mos oferecer aos nossos clientes a harmonia e conjugue de uma fragrância a gosto, uma peça decorativa, mas também uma energia positiva através de uma pedra ou cristal. A Secret Energy Candle nasce de um amor pessoal, pela fragrância que preenche uma casa conjugada à decoração e à positividade para as pessoas que as rodeiam. A nossa casa, que no fundo é o nosso refugio, deve ser o nosso lugar de conforto e de paz. Estas velas carecem de uma pedra ou cristal que mesmo depois de todo o processo de queima da mesma, manterá sempre a sua maior essência, pois este cristal é para si! Desta forma, pretendemos com esta vela, tornar o mundo dos nossos clientes um mundo melhor, cheio de positivismo, boas energias, pacífico e harmonioso. Temos também no nosso site um espaço para o nosso blog, onde temos informações relativamente ás pedras, o seu significado, o local onde surte mais efeito, e muito mais."
              : "A Secret Energy Candle, tem em si toda uma essência de destaque. O segredo destas velas é a energia que cada uma destas transmite, conforme o gosto de cada um dos nossos clientes."}
          </Typography>
          <Box m="-1rem 25px 0 auto" sx={{ zIndex: 9999 }}>
            <CommonButton onClick={() => toggleAboutUs(!aboutUsOpen)}>
              {aboutUsOpen ? "ler menos" : "ler mais"}
            </CommonButton>
          </Box>
        </Box>
      </Container>
      <Box backgroundColor={theme.palette.primary.light} p="9rem 0" m="-5rem 0">
        <Container
          display="flex"
          flexDirection="row-reverse"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={img2}
            alt=""
            style={{ width: "50%", maxWidth: "300px", height: "auto" }}
          />
          <Box width="67%">
            <Typography
              textAlign="center"
              p="1rem 0 1.5rem 0"
              sx={{
                lineHeight: "1.2",
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                fontSize: "1.025rem",
              }}
            >
              Venha conhecer os nossos produtos!
            </Typography>
            <Box m="-1rem auto 0 25px" sx={{ zIndex: 9999 }}>
              <CommonButton onClick={() => navigate("/loja")}>
                loja
              </CommonButton>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="9vh 0 3rem 0"
      >
        <img
          src={img3}
          alt=""
          style={{ width: "50%", maxWidth: "300px", height: "auto" }}
        />
        <Box width="70%" ml="-2rem" display="flex" flexDirection="column">
          <Typography
            variant="h2"
            ml="50px"
            mr="auto"
            p="1rem 1.5rem"
            sx={{
              lineHeight: "1.2",
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              zIndex: 9999,
              letterSpacing: "2px",
            }}
          >
            AS NOSSAS VELAS
          </Typography>
          <Typography
            backgroundColor={theme.palette.primary.light}
            p="2rem 2.7rem"
            fontSize="0.85rem"
            mt="-1.7rem"
            lineHeight="2"
            sx={{ zIndex: 9 }}
          >
            Criámos um espaço no nosso site onde iremos falar com mais detalhe
            das nossas velas, materiais, pedras e muito mais!
          </Typography>
          <Box m="-1rem 25px 0 auto" sx={{ zIndex: 9999 }}>
            <CommonButton onClick={() => navigate("/blog")}>
              ler blog
            </CommonButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
