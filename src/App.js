import React from "react";
import styled from "styled-components";

import ContentSelector from "./router/ContentSelector";
import Navbar from "./components/Navbar";

const Test = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Test>
      <Navbar />
      <ContentSelector />
    </Test>
  );
};

export default App;
