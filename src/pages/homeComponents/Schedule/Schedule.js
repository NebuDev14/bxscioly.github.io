import React from "react";
import styled from "styled-components";
import Table from "./TableComponents/Table";

const Title = styled.div`
  height: 100px;
  width: 100%;
  font-size: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: black;
  user-select: none;
`;

const ScheduleDiv = styled.div`
  height: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background: white;
  border-radius: 30px;
`;

const ScheduleA = styled.div`
  height: 600px;
  width: 100%;
`;

const Schedule = () => {
  return (
    <ScheduleDiv>
      <Title>SCHEDULE</Title>
      <ScheduleA>
        <Table />
      </ScheduleA>
    </ScheduleDiv>
  );
};

export default Schedule;
