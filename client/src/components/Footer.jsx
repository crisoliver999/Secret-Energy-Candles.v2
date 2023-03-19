import { Box, Button, Typography, Modal, IconButton } from "@mui/material";
import Container from "components/Container";
import FlexCenter from "components/FlexCenter";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
// IMAGES
import instagram from "../assets/imgs/Instagram.png";
import facebook from "../assets/imgs/Facebook.png";
import mbway from "../assets/imgs/MBWay.png";
import multibanco from "../assets/imgs/multibanco.png";

const Footer = () => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box backgroundColor={theme.palette.primary.light} p="2.5rem 0">
      <Container height="85px">
        <FlexCenter width="33%" justifyContent="flex-start">
          <Button onClick={toggleModal}>termos e condições</Button>
        </FlexCenter>
        <FlexCenter width="33%" justifyContent="center" gap="0.5rem">
          <img
            src={instagram}
            alt=""
            style={{ width: "35px", height: "35px" }}
          />
          <img
            src={facebook}
            alt=""
            style={{ width: "17.5px", height: "35px" }}
          />
        </FlexCenter>
        <FlexCenter
          justifyContent="flex-end"
          flexDirection="column"
          width="33%"
          gap="0.5rem"
        >
          <Typography
            color={theme.palette.primary.main}
            textAlign="right"
            ml="auto"
          >
            MÉTODOS DE PAGAMENTO
          </Typography>
          <Box ml="auto">
            <img
              src={mbway}
              alt=""
              style={{
                height: "20%",
                maxHeight: "45px",
                width: "39%",
                maxWidth: "100px",
              }}
            />
            <img
              src={multibanco}
              alt=""
              style={{
                height: "20%",
                maxHeight: "45px",
                width: "61%",
                maxWidth: "144px",
              }}
            />
          </Box>
        </FlexCenter>
      </Container>
      <Modal open={isOpen} onClose={toggleModal}>
        <Box
          width="80%"
          height="70%"
          margin="auto"
          backgroundColor="#ffffff"
          sx={{
            display: "flex",
            flexDirection: "column",

            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "2rem",
          }}
        >
          <Box ml="auto">
            <IconButton onClick={toggleModal}>
              <CloseIcon sx={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Box>
          <Box width="100%">
            <Typography
              variant="h2"
              color={theme.palette.primary.main}
              textTransform="uppercase"
              textAlign="center"
              letterSpacing="2px"
              p="1rem 1.5rem"
            >
              termos e condições
            </Typography>
          </Box>
          <Box
            borderTop={`2px solid ${theme.palette.primary.light}`}
            borderBottom={`2px solid ${theme.palette.primary.light}`}
            p="1rem 0"
            sx={{ overflowY: "auto" }}
          >
            <Typography variant="tandcText">ASPETOS GERAIS</Typography>
            <Typography variant="tandcText">
              <br />A utilização do nosso site atribui,automaticamente, a
              condição de Utilizador e implica a aceitação, sem restrições, de
              todas as disposições incluídas nos Termos e Condições, por cada
              vez que acede ao nosso Site.
            </Typography>
            <Typography variant="tandcText">
              <br />
              Caso o utilizador não aceite algumas das condições estabelecidas,
              não deve aceder, nem utilizar o nosso site.
            </Typography>
            <Typography variant="tandcText">
              <br />
              Note-se que, ao consultar , ou utilizar o nosso site está a
              comprometer-se em como aceita as condições aqui referidas.
            </Typography>
            <Typography variant="tandcText">
              <br />
              Poderá sempre utilizar o site sem se registar, no entanto, poderão
              haver funcionalidades indisponíveis, por não ter registo.
            </Typography>
            <br />
            <br />
            <Typography variant="tandcText">FUNCIONALIDADES DO SITE</Typography>
            <Typography variant="tandcText">
              <br />
              No caso do utilizador pretender registar-se:
            </Typography>
            <Typography variant="tandcText">
              <br />O utilizador deverá preencher o formulário existente no
              site, que para além, de selecionar elementos opcionais, bem como:
              assunto, e ou mensagem a enviar á Secret Energy Canlde, deverá
              indicar, obrigatoriamente, os dados seguintes:
            </Typography>
            <Typography variant="tandcText">
              <br />- Primeiro e Último nome;
            </Typography>
            <Typography variant="tandcText">
              <br />- Endereço de correio eletrónico (email).
            </Typography>
            <Typography variant="tandcText">
              <br />
              Toda a informação que o utilizador nos fornece deverá ser leal.
            </Typography>
            <Typography variant="tandcText">
              <br />
              No caso, do utilizador alterar algumas das informações que
              forneceu ao nosso site, deverá proceder a uma atualização (caso
              assim o deseje). O utilizador responsabiliza-se por qualquer tipo
              de declarações falsas, incorretas ou incompletas que nos forneça e
              pelos prejuízos que estas possam provocar à empresa ou a
              terceiros, devido à informação que nos faculta ou facultou.
            </Typography>
            <br />
            <br />
            <Typography variant="tandcText">
              FUNCIONALIDADES DA CONTA
            </Typography>
            <Typography variant="tandcText">
              <br />O Utilizador Registado terá, portanto, acesso a uma área
              pessoal, com os dados que terá facultado, no momento do registo.
            </Typography>
            <Typography variant="tandcText">
              <br />
              Através do registo, poderá assim, aceder aos seus dados e proceder
              à alteração ou eliminação definitiva. Pode também consultar, as
              suas encomendas, devoluções e comunicações com a Secret Energy
              Canlde.
            </Typography>
            <br />
            <br />
            <Typography variant="tandcText">
              CATÁLOGO DOS PRODUTOS QUE VENDEMOS (LOJA ONLINE)
            </Typography>
            <Typography variant="tandcText">
              <br />
              No nosso site, encontram-se disponíveis todos os produtos
              comercializados e realizados manualmente pela Carla Sofia Marques
              Pereira. A informação referida dos produtos no nosso site
              destina-se apenas a fornecer um curto resumo informativo, para que
              o utilizador se sinta mais informado quanto ao produto que
              pretende adquirir.
            </Typography>
            <Typography variant="tandcText">
              <br />A equipa da Secret Energy Canlde, assume todas as
              providências para assegurar e garantir que as informações e os
              dados contidos no Site são precisos e atualizados, na altura da
              sua introdução no mesmo. No entanto, não é garantida a atualização
              ou correção destas informações. A Secret Energy Candles qualquer
              garantia, expressa ou implícita, quanto à exatidão ou integridade
              de qualquer informação (incluindo informação sobre bens e
              serviços) incluída no Site.
            </Typography>
            <Typography variant="tandcText">
              <br />O utilizador tem o direito de apagar, alterar ou remover
              qualquer informação no Site, a qualquer momento, sem aviso prévio.
            </Typography>
            <Typography variant="tandcText">
              <br />
              Os Utilizadores aceitam e reconhecem de modo expresso que:
            </Typography>
            <Typography variant="tandcText">
              <br />- As fotografias apresentadas no Site têm caráter meramente
              ilustrativo, embora que reais, devendo os Utilizadores consultar a
              informação detalhada sobre os produtos e as respetivas
              características/especificações que fornecemos;
            </Typography>
            <Typography variant="tandcText">
              <br />- O preço exposto é o preço estipulado pela empresa, uma vez
              que, é tudo feito artesanalmente e é uma empresa que não trabalha
              com parcerias de quaisquer outras empresas, podendo, contudo,
              existir erros ortográficos aos quais não podemos garantir a
              entrega, caso seja essa a situação;
            </Typography>
            <Typography variant="tandcText">
              <br />- Asseguramos que faremos todos os esforços suficientes,
              para incluir informação exata e atualizada sobre todos os produtos
              no Site. Apesar de , não o podermos garantir;
            </Typography>
            <br />
            <br />
            <Typography variant="tandcText">PROPRIEDADE INTELECTUAL</Typography>
            <Typography variant="tandcText">
              <br />
              Os conteúdos do site, bem como: textos, gráficos, fotografias têm
              direitos reservados à empresa, sendo proibida a sua utilização,
              com fins comerciais ou outros.
            </Typography>
            <br />
            <br />
            <Typography variant="tandcText">
              LIMITAÇÃO DE RESPONSABILIDADE
            </Typography>
            <Typography variant="tandcText">
              <br />O Utilizador deve saber, que será responsável pelo conteúdo
              da informação enviada para o Site.
            </Typography>
            <Typography variant="tandcText">
              <br />É do conhecimento do Utilizador que a utilização do site
              poderá não ser 100% segura, existindo a possibilidade das
              informações enviadas ou recebidas serem intercetadas por partes
              não autorizadas, não sendo a empresa responsável por falhas na
              segurança das comunicações e não assumindo qualquer
              responsabilidade pelo uso indevido da sua informação por
              terceiros.
            </Typography>
            <Typography variant="tandcText">
              <br />O Utilizador reconhece também, que o acesso e utilização do
              Site poderá sofrer interrupções e que a informação do Site pode
              conter bugs, erros, falhas técnicas, problemas ou outras
              limitações. O Site pode conter ligações para outras páginas web ou
              até mesmo, ser acedido através de outras páginas eletrónicas. A
              empresa não pode ser responsabilizada pelas mesmas, nomeadamente
              pelo controlo dos conteúdos, disponibilidade, operacionalidade ou
              desempenho.
            </Typography>
            <Typography variant="tandcText">
              <br />
              Nos termos máximos permitidos por lei, a empresa exclui qualquer
              responsabilidade, direta ou indireta, pela utilização do Site.
            </Typography>
            <br />
            <br />
            <Typography variant="tandcText">DISPOSIÇÕES FINAIS</Typography>
            <Typography variant="tandcText">
              <br />
              No caso de violação dos presentes Termos e Condições, reservamos o
              direito de exercer toda e qualquer ação legalmente prevista. Além
              disso, reservamos o direito de, arbitrariamente, dar como
              terminado o acesso ou utilização do Site, com ou sem notificação
              do Utilizador.
            </Typography>
            <Typography variant="tandcText">
              <br />
              Os Termos e Condições de utilização do Site são regulados de
              acordo com as leis em vigor.
            </Typography>
            <Typography variant="tandcText">
              <br />
              Se qualquer provisão aqui descrita for considerada ilegal, nula,
              ou por qualquer razão inexequível, essa provisão será eliminada ou
              reduzida nos termos da lei, não afetando a validade e
              exequibilidade das restantes provisões.
            </Typography>
            <Typography variant="tandcText">
              <br />
              Reservamos o direito de alterar os presentes Termos e Condições
              sem aviso prévio. O Utilizador está vinculado à versão dos Termos
              e Condições no momento da sua utilização, pelo que recomendamos a
              sua consulta periódica.
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Footer;
