import * as React from "react";
import Link from "next/link";

import { User } from "../interfaces";

const ListItem = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
