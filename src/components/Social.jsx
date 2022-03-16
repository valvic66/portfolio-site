import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Hidden from '@mui/material/Hidden';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const useStyles = makeStyles({
  section: {},
});

const socialItems = [
  { icon: GitHubIcon, url: 'https://github.com/valvic66' },
  { icon: LinkedInIcon, url: 'https://www.linkedin.com/in/valentin-micu-973902148/' },
  { icon: EmailIcon, url: 'mailto:valvic6@gmail.com' },
];

const Social = ({ direction = 'row' }) => {
  const styles = useStyles();

  return (
    <div className={styles.section}>
      <Grid
        container
        direction={direction}
        spacing={2}
        justifyContent="center"
        alignItems="end"
      >
        {socialItems?.map((item) => {
          const Icon = item?.icon;

          return (
            <Link href={item.url} rel="noopener" target="_blank">
              <IconButton size="medium">
                <Grid item>
                  <Icon fontSize="large" />
                </Grid>
              </IconButton>
            </Link>
          );
        })}
      </Grid>
    </div>
  );
};

export default Social;
