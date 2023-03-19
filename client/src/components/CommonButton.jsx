import styled from "@emotion/styled";
import { Button } from "@mui/material";

const CommonButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  fontWeight: 600,
  letterSpacing: "2px",
  padding: "0.5rem 1.5rem",
  fontSize: "0.75rem",
  borderRadius: "0",
  "&:hover": {
    color: "#000",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default CommonButton;
