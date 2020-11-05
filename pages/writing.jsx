/** @jsx jsx */
import Link from 'next/link';

import { jsx, useColorMode, Box } from 'theme-ui';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/Page';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { frontMatter as aData } from './writing/writea.mdx';
import { frontMatter as bData } from './writing/writeb.mdx';

const WritingPage = () => {
  const [mode] = useColorMode();
  const writePages = [aData, bData];
  return (
    <>
      <Page title="Writing | Greg Gamel">
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
            <h1>Docs Index</h1>
            <ul>
              {writePages.map(page => (
                <li key={page.__resourcePath}>
                  <Link href={formatPath(page.__resourcePath)}>
                    <a>{page.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <hr />
          </Box>
        </Box>
      </Page>
      <Footer></Footer>
    </>
  );
};

function formatPath(p) {
  return p.replace(/\.mdx$/, '');
}

export default WritingPage;
