// import React, { useEffect } from "react";
import React, { useCallback, useMemo } from 'react';
import styled, { css } from 'styled-components';
import MovingPath from './MovingPath';
import MovingPathAnimation from './MovingPathAnimation';

const SvgContainer = styled.div`
  /* position: absolute; */
  box-sizing: border-box;
  /* border: 5px solid red; */
  width: 100%;
  height: 100%;
  transition: 1s;
  /* opacity: 0.5; */
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
      id: 'loc1',
      direction: 'forward',
      translate_value: '-2540, -970',
      scale_value: '2.75, 2.75',
      path_stroke_dasharray_value: 1455,
      path_stroke_dashoffset_multiply_value: 0,
      main_path_stroke_width_value: 15,
      main_path_stroke_color_value: 'orange',
      main_path_fill_value: 'black',
      border_path_stroke_width_value: 5,
      border_path_stroke_color_value: 'blue',
      border_path_stroke_fill_value: 'transparent',
      path_d_value: ``,
    },
    {
      id: 'loc2',
      direction: 'forward',
      translate_value: '135, 40',
      scale_value: '1, 1',
      path_stroke_dasharray_value: 1107,
      path_stroke_dashoffset_multiply_value: 0,
      main_path_stroke_width_value: 9,
      main_path_stroke_color_value: 'red',
      main_path_fill_value: 'none',
      border_path_stroke_width_value: 1,
      border_path_stroke_color_value: 'blue',
      border_path_stroke_fill_value: '#transparent',
      path_d_value: `M2.59,108.2c2.85,4.89,141.15,69.24,155.41,73.52,14.26,4.28,62.02,19.25,71.29,22.1s119.05,60.59,190.34,71.29c71.29,10.69,163.25-17.11,189.2-27.8,25.95-10.69,172.23-102.65,172.23-102.65L1003.15,2.53`,
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
      <svg className="map-svg" viewBox="0 0 1384 360">
        {/* {movingPathRenderer(movingPathOptions)} */}
        {/* <MovingPath pathOption={movingPathOptions[0]} percent={percent1} /> */}
        <MovingPath pathOption={movingPathOptions[0]} percent={percent1} />
        <MovingPath pathOption={movingPathOptions[1]} percent={percent2} />
        <MovingPathAnimation
          pathOption={movingPathOptions[1]}
          percent={percent2}
        />
      </svg>
    </SvgContainer>
  );
};

export default React.memo(SvgMap);
