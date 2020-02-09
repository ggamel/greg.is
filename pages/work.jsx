import { Container } from 'theme-ui';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/Page';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WorkPage = () => (
  <>
    <Page title="Work | Greg Gamel">
      <SkipNavContent tabIndex="0" />
      <Header />
      <Container p={4} bg="muted">
        <h1>Work</h1>
        <p>coming soon</p>
      </Container>
    </Page>
    <Footer />
  </>
);

export default WorkPage;
