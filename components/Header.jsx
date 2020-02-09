/** @jsx jsx */
import { jsx, css, Styled, useColorMode } from 'theme-ui';

import Link from './Link';

import Logo from './Logo';

const header = css`
  -webkit-backdrop-filter: saturate(100%) blur(40px);
  backdrop-filter: saturate(100%) blur(12px);
`;

const Header = ({ children }) => {
  const [mode] = useColorMode();
  return (
    <header
      sx={{
        display: 'grid',
        gridGap: 3,
        mx: 'auto',
        px: 2,
        py: 2,
        gridAutoFlow: 'row',
        gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
        variant: 'styles.header',
        borderBottom:
          mode === 'dark' ? '1px solid #313131' : '1px solid hsl(0, 0%, 90%)',
        backgroundColor:
          mode === 'dark'
            ? 'hsla(0, 0%, 0%, 0.001)'
            : 'hsla(0, 0%, 95%, 0.001)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
      css={header}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gridColumnStart: [1, 2],
          gridColumnEnd: [3, 3],
          order: [0, 1],
        }}
      >
        <Link href="/">
          <Styled.a>
            <Logo />
            <span
              sx={{
                position: 'absolute',
                width: 1,
                height: 1,
                overflow: 'hidden',
                top: -9999,
              }}
            >
              Home
            </span>
          </Styled.a>
        </Link>
      </div>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Link href="/about">
          <Styled.a
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}
          >
            About
          </Styled.a>
        </Link>
        <Link href="/writing">
          <Styled.a
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}
          >
            Writing
          </Styled.a>
        </Link>
      </div>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          order: 2,
        }}
      >
        <Link href="/projects">
          <Styled.a
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}
          >
            Projects
          </Styled.a>
        </Link>
        <Link href="/work">
          <Styled.a
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}
          >
            Work
          </Styled.a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
