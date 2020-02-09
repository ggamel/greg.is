import React from 'react';
import { Styled, Box } from 'theme-ui';
import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide';
import { SkipNavContent } from '@reach/skip-nav';
import Page from '../components/Page';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StyleGuidePage = () => (
  <>
    <Page title="Writing | Greg Gamel">
      <SkipNavContent tabIndex="0" />
      <Header />
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
        <Styled.h1>Style Guide</Styled.h1>
        <ColorPalette />
        <TypeScale />
        <TypeStyle
          fontFamily="heading"
          fontWeight="heading"
          lineHeight="heading"
        />
        <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
      </Box>
    </Page>
    <Footer />
  </>
);

export default StyleGuidePage;
