import { jsx, useColorMode, Box, Container, Grid } from 'theme-ui';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/Page';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [mode, setMode] = useColorMode();
  return (
    <>
      <Page title="About | Greg Gamel">
        <SkipNavContent tabIndex="0" />
        <Header />
        <Box
          sx={{
            background: mode === 'dark' ? '#101010' : '#f5f5f5',
            pb: '1px',
            minHeight: '100vh',
          }}
        >
          <Grid>
            <h1>About Greg</h1>
            <p>
              Greg is a designer and developer. Creating hardware and software
              projects, [write more later]{' '}
            </p>
          </Grid>
        </Box>
      </Page>
      <Footer />
    </>
  );
};

export default AboutPage;
