import { Box, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import CommonButton from "components/CommonButton";
import { useState } from "react";

const BlogPost = ({ post, isLeftSide }) => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // p="9vh 0 3rem 0"
        flexDirection={isLeftSide ? "row" : "row-reverse"}
      >
        <img
          src={post.img}
          alt=""
          style={{ width: "50%", maxWidth: "300px", height: "auto" }}
        />
        <Box
          width="75%"
          ml={isLeftSide ? "-2rem" : "0"}
          mr={isLeftSide ? "0" : "-2rem"}
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="h2"
            ml={isLeftSide ? "50px" : "auto"}
            mr={isLeftSide ? "auto" : "50px"}
            p="1rem 1.5rem"
            sx={{
              lineHeight: "1.2",
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              zIndex: 99,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {post.title}
          </Typography>
          <Typography
            backgroundColor={theme.palette.primary.light}
            p="2rem 2.7rem"
            fontSize="0.85rem"
            mt="-1.7rem"
            lineHeight="2"
            sx={{ zIndex: 9 }}
          >
            {post.shortText}
          </Typography>
          <Box
            m={isLeftSide ? "-1rem 25px 0 auto" : "-1rem auto 0 25px"}
            sx={{ zIndex: 9 }}
          >
            <CommonButton onClick={() => toggleModal()}>ler mais</CommonButton>
          </Box>
        </Box>
      </Box>
      <Modal open={isOpen} onClose={() => toggleModal()}>
        <Box
          backgroundColor="#ffffff"
          width="80%"
          height="70%"
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1rem",
          }}
        >
          <Box ml="auto">
            <IconButton onClick={toggleModal}>
              <CloseIcon sx={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Box>
          <Box borderBottom={`2px solid ${theme.palette.primary.light}`}>
            <Typography
              variant="h2"
              textAlign="center"
              p="1rem 1.5rem"
              sx={{
                lineHeight: "1.2",
                color: theme.palette.primary.main,
                zIndex: 99,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {post.title}
            </Typography>
          </Box>
          <Typography m="1rem" sx={{ overflowY: "auto" }}>
            <img
              src={post.img}
              alt=""
              style={{
                maxWidth: "35%",
                float: "left",
                marginRight: "1rem",
                marginBottom: "1rem",
              }}
            />
            {post.text}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default BlogPost;
