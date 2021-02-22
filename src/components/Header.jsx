import React from "react";

import { Heading } from "@chakra-ui/react";

function Header() {
  return (
    <div>
      <Heading letterSpacing={"0.3em"} m={5} fontSize={"5xl"}>
        Pesquisa{" "}
        <Heading letterSpacing={"0.2em"} color={"purple.3"} fontSize={"5xl"}>
          JAVA
        </Heading>
      </Heading>
    </div>
  );
}

export default Header;
