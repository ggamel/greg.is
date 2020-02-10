/** @jsx jsx */
import {
  Container,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Box,
  Flex,
  Button,
} from 'theme-ui';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/Page';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => (
  <>
    <Page title="About | Greg Gamel">
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
        <h1>About Greg</h1>

        <Box as="form" onSubmit={e => e.preventDefault()}>
          <Label htmlFor="name">Your Name</Label>
          <Input name="name" mb={3} />
          <Label htmlFor="email">Your Email</Label>
          <Input type="email" name="email" mb={3} />

          <Label htmlFor="message">Your Message</Label>
          <Textarea name="message" rows="6" mb={3} />

          <Button>Send</Button>
        </Box>
      </Box>
    </Page>
    <Footer />
  </>
);

export default ContactPage;
