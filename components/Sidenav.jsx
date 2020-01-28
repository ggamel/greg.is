/** @jsx jsx */
import { jsx } from "theme-ui";
import { Sidenav } from "@theme-ui/sidenav";
import Links from "./links.mdx";
export default props => (
  <Sidenav {...props}>
    <Links />
  </Sidenav>
);
