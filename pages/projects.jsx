/** @jsx jsx */
import { jsx, Box, useColorMode } from 'theme-ui';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/Page';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const [mode, setMode] = useColorMode();
  return (
    <>
      <Page title="Work | Greg Gamel">
        <SkipNavContent tabIndex="0" />
        <Header />
        <Box
          sx={{
            background: mode === 'dark' ? '#101010' : '#f5f5f5',
            pb: '1px',
            minHeight: '100vh',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns:
                'minmax(1.2rem, 1fr) minmax(auto, 66ch) minmax(1.2rem, 1fr);',
              '*': {
                gridColumn: 2,
              },
              pt: 5,
            }}
          >
            <h1>Projects</h1>
            <p>coming soon</p>
          </Box>
        </Box>
      </Page>
      <Footer />
    </>
  );
};

export default ProjectsPage;
