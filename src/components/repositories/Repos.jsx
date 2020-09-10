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
    <section>
      <section className="firstChart">
        <ExampleChart />
      </section>
    </section>
  );
};



export default Repos;
