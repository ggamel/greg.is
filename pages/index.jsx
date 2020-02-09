/** @jsx jsx */
import { jsx, useColorMode, Box } from 'theme-ui';
import Link from 'next/link';

import { SkipNavContent } from '@reach/skip-nav';

import { Global } from '@emotion/core';
import Page from '../components/Page';
import Header from '../components/Header';
import Footer from '../components/Footer';

// import Nav from "../components/Nav";

const IndexPage = ({ headerActive }) => {
  const [mode, setMode] = useColorMode();
  return (
    <>
      <Page title="Home | Greg Gamel">
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
            }}
          >
            <h1
              sx={{
                fontWeight: 800,
              }}
              className="xl"
            >
              Greg Gamel
            </h1>
            <br />
            <p>Developer & designer of hardware & software.</p>
            <p>Team Player. Teaches. No-Fuss. 💚s Green Chile.</p>
            <br />
            <p>
              Founded &amp; currently building{' '}
              <a href="https://eye.guide">EyeGuide</a>.
            </p>
          </Box>
        </Box>
      </Page>

      <Footer />
    </>
  );
};

export default IndexPage;
