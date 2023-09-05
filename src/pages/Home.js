import React, { useState } from "react";

import { AppBar, Link, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import ContactForm from "../components/Contact";
import Gallery from "../components/Gallery";
import GitHubContributions from "../components/GitHubContributions";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  justifyContent: "center",
  display: "grid",
  color: theme.palette.text.secondary,
}));

function App() {
  const [images, setimages] = useState([]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dynamic Functionalities
          </Typography>
          <nav>
            <Link
              href="#carrousel"
              color="inherit"
              underline="none"
              sx={{ mr: 2 }}
            >
              CARROUSEL
            </Link>
            <Link href="#contact" color="inherit" underline="none">
              FORM VALIDATION
            </Link>
            <Link
              href="#github"
              color="inherit"
              underline="none"
              sx={{ ml: 2 }}
            >
              GITHUB CONTRIBUTIONS
            </Link>
          </nav>
        </Toolbar>
      </AppBar>

      <Stack spacing={0}>
        <Item id="carrousel" sx={{ height: "100vh" }}>
          <Typography variant="h3" component="h3" sx={{ m: 4 }}>
            Dynamic Carrousel
          </Typography>
          <Gallery />
        </Item>
        <Item id="contact" sx={{ height: "100vh" }}>
          <Typography variant="h2" component="h2" sx={{ mt: 4 }}>
            Dynamic Form Validation
          </Typography>
          <ContactForm />
        </Item>
        <Item id="github" sx={{ height: "100vh" }}>
          <Typography variant="h2" component="h2" sx={{ mt: 4 }}>
            Dynamic GitHub Contributions Chart
          </Typography>
          <GitHubContributions />
        </Item>
      </Stack>

      <footer>
        <Typography variant="body2" component="p" sx={{ color: "#fff", py: 2 }}>
          &copy; {new Date().getFullYear()} Dynamic Features. Hericlis Mindroom.
        </Typography>
      </footer>
    </div>
  );
}

export default App;
