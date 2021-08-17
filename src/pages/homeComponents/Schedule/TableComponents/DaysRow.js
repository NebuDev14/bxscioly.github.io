import React from "react";
import Days from "./Days";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-left: 235px;
`;

const DaysRow = () => {
  return (
    <Wrap>
      <Days weekday="Monday" />
      <Days weekday="Tuesday" />
      <Days weekday="Wednesday" />
      <Days weekday="Thursday" />
      <Days weekday="Friday" />
    </Wrap>
  );
};

export default DaysRow;
