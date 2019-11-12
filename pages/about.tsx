import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Greg Gamel">
    <h1>About Greg</h1>
    <p>
      Greg Gamel is a designer and developer, currently working for EyeGuide.
    </p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
