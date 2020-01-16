import Header from "../components/Header";

export defaults ({ headerActive }) => {
  return (
  <div>
    <Head>
      <title>{title || "Greg Gamel"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={description || "Greg Gamel is a designer and developer"}
      />
    </Head>
    );
};