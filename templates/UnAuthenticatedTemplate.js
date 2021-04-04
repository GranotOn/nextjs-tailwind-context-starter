import Head from "next/head";
import config from "@utils/siteConfig";
import Nav from "@components/UnAuthenticated/Nav";

export default function UnAuthenticatedTemplate({ title, children }) {
  return (
    <div className="relative">
      <Head>
        <title>{title || config.title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <Nav />
      {children}
    </div>
  );
}
