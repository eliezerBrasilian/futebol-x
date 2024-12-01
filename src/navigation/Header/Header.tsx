import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useCabecalhoContext } from "../../context/CabecalhoContext";
import { Rotas } from "../Rotas";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems: { routeName: string; titleName: string }[] = [
  {
    routeName: "/",
    titleName: "Início",
  },
  {
    routeName: Rotas.TODAY,
    titleName: "Jogos de Hoje",
  },
  {
    routeName: Rotas.TOMORROW,
    titleName: "Jogos de Amanhã",
  },
];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const { updateCurrentNav, currentNav } = useCabecalhoContext();

  const location = useLocation();

  const nav = useNavigate();

  React.useEffect(() => {
    updateCurrentNav(location.pathname);
  }, [location, currentNav]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Futebol X
      </Typography>
      <Divider />
      <List>
        {navItems.map((it) => (
          <ListItem key={it.routeName} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                onClick={() => nav(it.routeName)}
                primary={it.titleName}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
            <Typography variant="h6" sx={{ my: 2, marginLeft: 5 }}>
              Futebol X
            </Typography>
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Futebol X
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((it) => (
              <Button
                onClick={() => nav(it.routeName)}
                key={it.routeName}
                sx={{ color: "#fff" }}
              >
                {it.titleName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

// export function Header() {
//   const { updateCurrentNav, currentNav } = useCabecalhoContext();

//   const location = useLocation();

//   useEffect(() => {
//     updateCurrentNav(location.pathname);
//   }, [location, currentNav]);

//   return (
//     <nav className="app-header">
//       <NavLink to={"/"}>
//         <div className="left">
//           <img src={logo} alt="logotipo" />
//           <CustomNav titulo={"Futebol X"} isActive={currentNav == Rotas.HOME} />
//         </div>
//       </NavLink>

//       <div className="right">
//         <NavLink to={Rotas.TODAY}>
//           <CustomNav
//             titulo={"Jogos de Hoje"}
//             isActive={currentNav == Rotas.TODAY}
//           />
//         </NavLink>

//         <NavLink to={Rotas.TOMORROW}>
//           <CustomNav
//             titulo={"Jogos de amanhã+"}
//             isActive={currentNav == Rotas.TOMORROW}
//           />
//         </NavLink>
//       </div>
//     </nav>
//   );
// }
