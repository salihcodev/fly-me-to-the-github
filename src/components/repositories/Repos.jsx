import React from "react";
import styled from "styled-components";
import { AppStateContext } from "../../context/Context";
import {
  ExampleChart,
  Pie3D,
  Column3D,
  Bar3D,
  Doughnut2D,
} from "../charts/Centralize";

const Repos = () => {
  return (
    <UserRepos className="border-gray-500 border border-solid rounded-lg p-6">
      <section className="firstChart">
        <h2 className="font-bold">Repos will be displayed here!!</h2>
      </section>
    </UserRepos>
  );
};

export default Repos;

const UserRepos = styled.section`
  border-color: #dedede;
`;
