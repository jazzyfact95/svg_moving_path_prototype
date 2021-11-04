// import React, { useEffect } from "react";
import React, { useCallback, useMemo } from "react";
import styled, { css } from "styled-components";
import MovingPath from "./MovingPath";

const SvgContainer = styled.div`
  /* position: absolute; */
  box-sizing: border-box;
  border: 5px solid red;
  width: 100%;
  height: 100%;
  transition: 1s;
  .map-svg {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: limegreen 3px solid;
  }
`;

const SvgMap = ({ percent }) => {
  const movingPathOptions = [
    {
      id: "loc1",
      translate_value: "-1000, 100",
      scale_value: "3.125, 3.125",
      path_stroke_dasharray_value: "1455",
      path_stroke_dashoffset_multiply_value: "7.35",
      main_path_stroke_width_value: "15",
      main_path_stroke_color_value: "yellow",
      main_path_fill_value: "red",
      border_path_stroke_width_value: "2",
      border_path_stroke_color_value: "blue",
      border_path_stroke_fill_value: "blue",
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
    // {
    //   id: "loc1",
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

  const movingPathRenderer = useCallback((pathOptions) => {
    return pathOptions.map((pathOption) => {
      return <MovingPath pathOption={pathOption} />;
    });
  }, []);

  return (
    <SvgContainer percent={percent}>
      {/* 큰 SVG 태그, viewBox 지정 */}
      <svg className="map-svg" viewBox="1000 1000 1000 1000">
        {movingPathRenderer(movingPathOptions)}
      </svg>
    </SvgContainer>
  );
};

export default React.memo(SvgMap);
