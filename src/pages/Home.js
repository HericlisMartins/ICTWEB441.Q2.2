import React from "react";

import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

import ContactPage from "../components/Contact";
import GitHubContributions from "../components/GitHubContributions";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <nav>
            <Link href="#about" color="inherit" underline="none" sx={{ mr: 2 }}>
              About
            </Link>
            <Link
              href="#portfolio"
              color="inherit"
              underline="none"
              sx={{ mr: 2 }}
            >
              Portfolio
            </Link>
            <Link href="#contact" color="inherit" underline="none">
              Contact
            </Link>
          </nav>
        </Toolbar>
      </AppBar>

      <Container>
        <section id="about">
          <Typography variant="h2" component="h2" sx={{ mt: 4 }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            posuere sem at nibh feugiat blandit. Etiam tincidunt vestibulum
            nulla sed vehicula. Ut in tellus elementum, ultricies purus eget,
            ultricies nisi. Maecenas ultricies sapien lorem, eget ultricies enim
            condimentum sit amet. Nulla luctus erat sed eleifend pharetra. In
            faucibus metus urna, at pulvinar turpis aliquet sed. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Morbi varius tincidunt consectetur. Nunc interdum posuere
            dui, eget luctus arcu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla posuere sem at nibh feugiat blandit. Etiam
            tincidunt vestibulum nulla sed vehicula. Ut in tellus elementum,
            ultricies purus eget, ultricies nisi. Maecenas ultricies sapien
            lorem, eget ultricies enim condimentum sit amet. Nulla luctus erat
            sed eleifend pharetra. In faucibus metus urna, at pulvinar turpis
            aliquet sed. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Morbi varius tincidunt
            consectetur. Nunc interdum posuere dui, eget luctus arcu.
          </Typography>
        </section>

        <section id="portfolio">
          <Typography variant="h2" component="h2" sx={{ mt: 4 }}>
            Portfolio
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://www.interviewbit.com/blog/wp-content/uploads/2022/06/How-does-Web-App-Architecture-Work-1024x450.png"
                  alt="Project 1"
                />
                <CardContent>
                  <Typography variant="h3" component="h3" gutterBottom>
                    Project 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla posuere sem at nibh feugiat blandit. Etiam tincidunt
                    vestibulum nulla sed vehicula. Ut in tellus elementum,
                    ultricies purus eget, ultricies nisi. Maecenas ultricies
                    sapien lorem, eget ultricies enim condimentum sit amet.
                    Nulla luctus erat sed eleifend pharetra. In faucibus metus
                    urna, at pulvinar turpis aliquet sed. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Morbi varius tincidunt consectetur. Nunc interdum
                    posuere dui, eget luctus arcu.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://reinvently.com/wp-content/uploads/2019/08/scheme.jpg"
                  alt="Project 2"
                />
                <CardContent>
                  <Typography variant="h3" component="h3" gutterBottom>
                    Project 2
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla posuere sem at nibh feugiat blandit. Etiam tincidunt
                    vestibulum nulla sed vehicula. Ut in tellus elementum,
                    ultricies purus eget, ultricies nisi. Maecenas ultricies
                    sapien lorem, eget ultricies enim condimentum sit amet.
                    Nulla luctus erat sed eleifend pharetra. In faucibus metus
                    urna, at pulvinar turpis aliquet sed. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Morbi varius tincidunt consectetur. Nunc interdum
                    posuere dui, eget luctus arcu.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </section>
        <section id="contact">
          <ContactPage></ContactPage>
        </section>
        <section id="github-contributions">
          <Typography variant="h2" component="h2" sx={{ mt: 4 }}>
            GitHub Contributions
          </Typography>
          <GitHubContributions />
        </section>
      </Container>

      <footer>
        <Typography variant="body2" component="p" sx={{ color: "#fff", py: 2 }}>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default App;
