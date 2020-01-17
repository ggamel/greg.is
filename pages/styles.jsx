/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui";
import Link from "next/link";

import { SkipNavContent } from "@reach/skip-nav";

import Page from "../components/Page";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const StylesPage = ({ headerActive }) => (
  <>
    <Page title="Styles | Greg Gamel">
      <SkipNavContent tabIndex="0" />
      <Header active={headerActive} />
      <article>
        <main>
          <h1 className="xl">Styles Used on this Site</h1>
          <p className="p1">
            These are the styles and components used on this website. Work in
            progress.
          </p>
          <hr />
          <h1 className="xl">Heading XL</h1>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <p>Paragraph 0</p>
          <p className="p1">Paragraph 1</p>
          <p className="p2">Paragraph 2</p>
          <p className="p3">Paragraph 3</p>

          <hr />

          <dl>
            <dt>def item Title</dt>
            <dd>def item Description</dd>
          </dl>

          <hr />

          <ul>
            <li>unordered Item 1</li>
            <li>unordered Item 2</li>
            <li>unordered Item 3</li>
            <li>unordered Item 4</li>
            <li>unordered Item 5</li>
            <li>unordered Item 6</li>
          </ul>

          <hr />

          <ol>
            <li>ordered Item 1</li>
            <li>ordered Item 2</li>
            <li>ordered Item 3</li>
            <li>ordered Item 4</li>
            <li>ordered Item 5</li>
            <li>ordered Item 6</li>
          </ol>

          <hr />

          <video />
          <hr />
          <img src="https://placekitten.com/1024/1024" />
        </main>
      </article>
    </Page>
    <Footer />
  </>
);

export default StylesPage;
