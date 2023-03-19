import Container from "components/Container";
import {
  ListItemButton,
  Box,
  ListItem,
  ListItemText,
  IconButton,
  Badge,
} from "@mui/material";
import navbarLogo from "assets/imgs/navbarLogo.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";

const Navbar = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const navigate = useNavigate();
  const theme = useTheme();

  const menuItems = [{ name: "inicio", path: "/" }, {name:"loja", path:'/loja'}, {name:"contacto", path:'/contacto'}, {name:"blog", path:'/blog'}];

  return (
    <Container>
      <Box height="10vh" display="flex" alignItems="center" width="100%">
        <img src={navbarLogo} style={{ height: "7vh" }} alt="" />
        <ListItem>
          {menuItems.map((menuItem) => {
            return (
              <ListItemButton
                key={menuItem.name}
                sx={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: theme.palette.primary.main,
                  fontWeight: "200",
                }}
                onClick={() => navigate(menuItem.path)}
              >
                <ListItemText>{menuItem.name}</ListItemText>
              </ListItemButton>
            );
          })}
        </ListItem>
        <IconButton aria-label="cart">
          <Badge badgeContent={shoppingCart.length} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="username">
          <Badge color="secondary">
            <PersonIcon />
          </Badge>
        </IconButton>
      </Box>
    </Container>
  );
};

export default Navbar;
// Inicio, loja, contactos, blog
