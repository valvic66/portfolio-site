import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Social from '../components/Social';
import Zoom from '@mui/material/Zoom';
import {StaticImage} from 'gatsby-plugin-image';

// import OrionImage from '../images/orion-nebula_1920.jpg';

const useStyles = makeStyles({
  section: {
    height: '100vh',
    // backgroundImage: `url(${OrionImage})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center'
  },
  container: {
    // border: "1px solid white",
    height: '100%',
    // z-idex applies only if position diff than default value
    zIndex: 2,
    position: 'relative'
  },
  content: {
    // border: "1px solid yellow",
    height: '100%'
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: 1
  },
  heroImage: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: 0
  }
});

const HeroSection = () => {
  const styles = useStyles();
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => setIsAnimating(true), []);

  return (
    <div className={styles.section}>
      <StaticImage className={styles.heroImage} src="../images/orion-nebula_1920.jpg" />
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Zoom in={isAnimating} timeout={600}>
            <Grid item md={8} xs={8}>
              <Typography component="h1" variant="h3">
                I'm a web developer with over 5 years experience
              </Typography>
              <Typography variant="h5">
                I'm very proficient in working with React framework
              </Typography>
              <Box my={2}>
                <Button href="mailto:valvic6@gmail.com" color="primary" variant="outlined">
                  Mail me &#128512;
                </Button>
              </Box>
            </Grid>
          </Zoom>
          <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <Grid item xs={4} md={4}>
                <Social direction="column" />
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroSection;
