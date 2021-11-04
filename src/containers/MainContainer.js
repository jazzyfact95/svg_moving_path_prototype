import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SvgMap from "../cmpts/SvgMap";

const MainSector = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  p {
    color: white;
  }
  #hi {
    stroke: yellow;
    stroke-width: 7;
    stroke-dasharray: 342;
    fill: transparent;
    opacity: 1;
  }
`;

const MapSector = styled.div`
  display: inline-block;
  width: 1180px;
  height: 330px;
  margin-top: 100px;
  margin-left: 5px;
  background-color: white;
  /* background-image: url("/map.png"); */
`;

const MainContainer = () => {
  const [Values, setValues] = useState({
    maxLength: 100,
    currentLength: 0,
  });

  const [percent, setPercent] = useState(0);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...Values,
      [name]: parseInt(value),
    });
  };

  useEffect(() => {
    const CL = parseInt(Values.currentLength);
    const ML = parseInt(Values.maxLength);
    const Result = Math.ceil((CL / ML) * 100);
    setPercent(Result);
  }, [Values]);

  const Loc1SvgOption = {
    id: "loc1",
    viewbox_value: "436 1210 1000 1000",
    translate_value: "0,500",
    scale_value: "2,2",
    path_stroke_dasharray_value: "",
    path_stroke_dashoffset_multiply_value: "",
    main_path_stroke_color_value: "",
    main_path_stroke_width_value: "",
    main_path_fill_value: "",
    border_path_stroke_color_value: "",
    border_path_stroke_width_value: "",
    border_path_stroke_fill_value: "",
    path_d_value: `M182.4,595.3l-3.3-2.3c2.8-4,10.1-15.2,11.2-18.7c1.3-4.1,5.3-16.7-1.6-35.4l0-0.1l-4-12.7
  c-8.8-27.9-15.5-49.4-15.8-50.9c0-0.1-0.1-0.3-0.2-0.6c-6.2-17-1.1-33.5,14.9-47.6l0.2-0.1c16.3-11.6,30.4-12,37.1-12.2
  c0.5,0,1,0,1.4,0l2.2-0.1c10.2-0.4,41.1-1.5,56.5-3.5l1.9-0.2c29.3-3.7,59.6-7.5,62.7-7.6l0.4,0c17-0.6,31.7,1.5,42.3,6
  c15.2,6.5,36.1,15.3,47.9,18.8c11.6,3.4,47.5,12.9,73.4,15.4c2.2,0.2,4.4,0.4,6.7,0.6c22.9,2.1,46.6,4.3,72.4,11.8
  c28.9,8.4,64.6,21.4,65,21.5c0.2,0.1,0.5,0.2,1,0.4c19.7,7.4,35.1,11.3,43.6,10.8c13.6-0.8,16.1-1.4,16.2-1.5l1.3,3.8
  c-1.1,0.4-6.2,1-17.2,1.7c-9.1,0.5-24.8-3.3-45.2-11.1c-0.4-0.2-0.8-0.3-0.9-0.4c-0.4-0.1-36-13.1-64.7-21.5
  c-25.4-7.4-48.9-9.6-71.6-11.7c-2.2-0.2-4.5-0.4-6.7-0.6c-26.2-2.5-62.4-12-74.2-15.5c-12-3.6-33-12.5-48.3-19
  c-10.2-4.3-24.2-6.3-40.6-5.7l-0.5,0c-3.3,0.1-46.2,5.5-62.3,7.6l-1.9,0.2c-15.5,2-46.6,3.1-56.8,3.5l-2.1,0.1c-0.4,0-0.9,0-1.4,0
  c-6.4,0.2-19.6,0.6-34.8,11.4c-10.2,9.1-20.8,23.9-13.7,43.2c0.2,0.6,0.3,0.9,0.4,1.2c0.4,1.7,9.6,31,15.7,50.4l4,12.6
  c7.4,19.9,3.1,33.5,1.7,38C192.7,580.2,183.5,593.8,182.4,595.3z`,
  };

  return (
    <MainSector>
      <MapSector>
        <SvgMap percent={percent} />
      </MapSector>
      <p>
        최대 굴진 거리 :
        <input
          onChange={onChange}
          name="maxLength"
          value={Values.maxLength >= 0 ? Values.maxLength : 0}
        />
        m
      </p>
      <p>
        현재 굴진 거리 :
        <input
          onChange={onChange}
          name="currentLength"
          value={Values.currentLength >= 0 ? Values.currentLength : 0}
        />
        m
      </p>
      <p>굴진 퍼센트 : {`${percent}`} %</p>
    </MainSector>
  );
};

export default MainContainer;
