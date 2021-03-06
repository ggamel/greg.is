/** @jsx jsx */
import { jsx, useColorMode, Styled, Flex, Box } from 'theme-ui';

import Link from './Link';

const Footer = ({}) => {
  const [mode, setMode] = useColorMode();
  return (
    <div
      sx={{
        borderTop: mode === 'dark' ? '1px solid #313131' : '1px solid #e6e6e6',
        background: mode === 'dark' ? '#010101' : '#fafafa', // logic left for changes later
      }}
    >
      <div
        sx={{
          margin: '0 auto',
          padding: 'none',
          maxWidth: '1000px',
        }}
      >
        <footer
          sx={{
            fontSize: 1,
            variant: 'styles.footer',

            color: mode === 'dark' ? '#fff' : '#000', // logic left for changes later
          }}
        >
          <div
            sx={{
              display: 'grid',
              gridTemplateRows: 'repeat(4, 32px)',
              gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
              gridAutoFlow: 'column',
              px: 4,
              py: 4,
            }}
          >
            <Link href="/" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>Home</Styled.a>
            </Link>
            <Link href="/about" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>About</Styled.a>
            </Link>
            <Link href="/writing" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>Writing</Styled.a>
            </Link>
            <Link href="/styles" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>Styles</Styled.a>
            </Link>
            <Link href="/work" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>Work</Styled.a>
            </Link>
            <Link href="/community" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>Projects</Styled.a>
            </Link>
            <Link href="/support" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a href="https://apod.now.sh/">APOD</Styled.a>
            </Link>
            <Link href="/contact" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>Grad</Styled.a>
            </Link>
            <Link href="/support" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>Daily.is</Styled.a>
            </Link>
            <Link href="/products" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>Experiments</Styled.a>
            </Link>
            <Link href="/contact" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>Contact</Styled.a>
            </Link>
            <Link href="/links" sx={{ variant: 'styles.navlink', p: 2 }}>
              <Styled.a>Links</Styled.a>
            </Link>
          </div>
        </footer>
      </div>
      <Flex
        sx={{
          justifyContent: 'space-between',
          p: 3,
        }}
      >
        <Flex
          sx={{
            order: 1,
          }}
        >
          <a
            sx={{
              textAlign: 'center',
              textDecoration: 'none',
              pr: 3,
            }}
            onClick={e => {
              const next = mode === 'dark' ? 'light' : 'dark';
              setMode(next);
            }}
          >
            {mode === 'dark' ? '🔆' : '🌙'}
          </a>
          <a href="https://github.com/ggamel" sx={{ color: 'inherit' }}>
            GitHub
          </a>
          <div sx={{ mx: 1 }} />
          <a href="https://twitter.com/ggamel" sx={{ color: 'inherit' }}>
            Twitter
          </a>
          <div sx={{ mx: 1 }} />
          <a href="mailto:g@greg.is" sx={{ color: 'inherit' }}>
            Email
          </a>
        </Flex>
        <Box
          sx={{
            order: 0,
          }}
        >
          © 2020 Greg Gamel
        </Box>
      </Flex>
    </div>
  );
};
export default Footer;
