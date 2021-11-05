// import React, { useEffect } from "react";
import React, { useCallback, useMemo } from "react";
import styled, { css } from "styled-components";
import MovingPath from "./MovingPath";

const SvgContainer = styled.div`
  /* position: absolute; */
  box-sizing: border-box;
  /* border: 5px solid red; */
  width: 100%;
  height: 100%;
  transition: 1s;
  .map-svg {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    /* border: limegreen 3px solid; */
  }
`;

const SvgMap = ({ percent1, percent2 }) => {
  const movingPathOptions = [
    {
      id: "loc1",
      direction: "forward",
      translate_value: "-2540, -970",
      scale_value: "2.75, 2.75",
      path_stroke_dasharray_value: 1455,
      path_stroke_dashoffset_multiply_value: 0,
      main_path_stroke_width_value: 15,
      main_path_stroke_color_value: "orange",
      main_path_fill_value: "black",
      border_path_stroke_width_value: 5,
      border_path_stroke_color_value: "blue",
      border_path_stroke_fill_value: "transparent",
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
    },
    {
      id: "loc2",
      direction: "forward",
      translate_value: "-2520, -945",
      scale_value: "2.7, 2.7",
      path_stroke_dasharray_value: 3200,
      path_stroke_dashoffset_multiply_value: 0,
      main_path_stroke_width_value: 15,
      main_path_stroke_color_value: "black",
      main_path_fill_value: "yellow",
      border_path_stroke_width_value: 5,
      border_path_stroke_color_value: "black",
      border_path_stroke_fill_value: "#transparent",
      path_d_value: `M1098,632.7c-8.5,0-15.7-1.7-23.7-3.7l-1.7-0.4c-19.4-5.3-45.5-4.7-68.5-4.2c-27.5,0.6-63-17.9-63.3-18
      c-1.9-1-19.9-8.4-37.3-15.5c-17.3-7.1-35.3-14.4-43.8-18.1c-19-8.7-27.9-14.6-35.5-23.7l-0.1-0.1c-10.2-14.5-18.9-21.3-26.9-26.6
      l-0.1-0.1c-7.5-5.7-32.5-13.1-41.9-15.8c-1.4-0.4-2.5-0.7-3.3-1c-6.6-1.8-19.1-10.8-19.7-11.2l2.3-3.2c0.1,0.1,12.4,8.9,18.4,10.6
      c0.8,0.2,1.9,0.6,3.3,1c10.5,3.1,34.9,10.3,43.1,16.4c8.3,5.5,17.4,12.6,27.9,27.5c7.1,8.5,15.7,14.2,34,22.6
      c8.5,3.7,26.4,11,43.7,18.1c19.1,7.8,35.6,14.6,37.6,15.6c0.3,0.2,33.9,17.6,60.2,17.6c0.4,0,0.8,0,1.2,0
      c23.3-0.5,49.6-1.1,69.5,4.3l1.6,0.4c15.4,3.7,26.6,6.5,49.8-1.8c2.7-1,5.3-2.1,7.9-3.2c19.6-8,38.2-15.6,70.3-9.7
      c29.9,5.7,43.7,7.8,70.2,7.5c5.1,0,10.9,0.1,17.1,0.1c26.2,0.3,62.1,0.7,75.1-4.1c13.5-6,28.7-12.9,38.5-31.7
      c0.6-1.3,1.3-2.7,2-4.1c9-18.8,21.4-44.6,71.9-45.3c16.1,0.1,31.9,0.4,45.8,0.6c19.5,0.3,34.9,0.6,37.8,0.3c0.4,0,0.9-0.1,1.6-0.1
      c23.9-1.9,44.3-10.2,60.8-24.7l0.1-0.1c21.9-16.7,52.4-26.7,83.5-27.7c37.2-1.1,68.5,11.4,81.1,19c12,6.5,27.2,14,34.4,17.7
      c3,1.5,4.4,2.2,4.9,2.5l-1.9,3.5c-0.4-0.2-2.3-1.2-4.7-2.4c-7.3-3.6-22.5-11.1-34.6-17.8c-12.3-7.4-42.8-19.5-79-18.5
      c-30.3,0.9-59.9,10.7-81.1,26.8c-17.1,15-38.3,23.7-63,25.6c-0.6,0-1.1,0.1-1.5,0.1c-3.1,0.3-17.8,0.1-38.3-0.2
      c-13.9-0.2-29.7-0.5-45.7-0.6c-48,0.6-59.3,24.1-68.3,43c-0.7,1.4-1.4,2.8-2,4.2c-10.5,20.1-27.2,27.6-40.5,33.6l-0.1,0
      c-13.6,5.1-48.5,4.7-76.6,4.4c-6.1-0.1-11.9-0.1-17-0.1c-26.8,0.4-40.8-1.8-70.9-7.5c-30.9-5.7-48.1,1.3-68,9.5
      c-2.6,1.1-5.3,2.2-8,3.2C1114.7,631.3,1105.8,632.7,1098,632.7z`,
    },
    // {
    //   id: "loc1",
    //   direction : "left || right"
    //   translate_value: "x,y",
    //   scale_value: "width, height",
    //   path_stroke_dasharray_value: "pathLenght",
    //   path_stroke_dashoffset_multiply_value: "1",
    //   main_path_stroke_width_value: "1",
    //   main_path_stroke_color_value: "#fff",
    //   main_path_fill_value: "#fff",
    //   border_path_stroke_width_value: "1",
    //   border_path_stroke_color_value: "#fff",
    //   border_path_stroke_fill_value: "#fff",
    //   path_d_value: `M182.4, ... .4,595.3z`,
    // },
  ];

  // ==========================================================

  // const movingPathRenderer = useCallback(
  //   (pathOptions) => {
  //     return pathOptions.map((pathOption) => {
  //       return <MovingPath pathOption={pathOption} percent={percent} />;
  //     });
  //   },
  //   [percent]
  // );

  return (
    <SvgContainer>
      {/* 큰 SVG 태그, viewBox 지정 */}
      <svg className="map-svg" viewBox="0 0 100 900">
        {/* {movingPathRenderer(movingPathOptions)} */}
        {/* <MovingPath pathOption={movingPathOptions[0]} percent={percent1} /> */}
        <MovingPath pathOption={movingPathOptions[0]} percent={percent1} />
        <MovingPath pathOption={movingPathOptions[1]} percent={percent2} />
      </svg>
    </SvgContainer>
  );
};

export default React.memo(SvgMap);
