import * as React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Greg Gamel">
      <h1 className="xl">Greg Gamel</h1>
      <p>
        <Link href="/styles">
          <a>styles</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
