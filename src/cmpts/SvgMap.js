// import React, { useEffect } from "react";
import React, { useCallback, useMemo, useEffect } from 'react';
import styled, { css } from 'styled-components';
import MovingPath from './MovingPath';
import MovingPathAnimation from './MovingPathAnimation';

const SvgContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transition: 1s;
  .map-svg {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`;

const SvgMap = ({ percent1, percent2 }) => {
  // ======================================

  // @READ ME

  // path의 외각선, stroke 를 따라 이동하는 svg path 입니다.

  // svg path의 총 길이를 알아내야 퍼센테이지에 따른 이동 연산을 정상적으로 할 수 있습니다.
  // 아래의 useEffect를 이용해서 새 svg path의 총 길이를 알아내시면 됩니다.
  // 이 총길이는 path_stroke_dasharray_value 의 값으로 대입하시면 됩니다.
  // 만약 document.getElementById(`${id}-main-path`).getTotalLength(), 를 그대로 대입하시게 되면
  // 렌더링 이후에 값을 불러올 수 있으므로 동기를 맞춰주셔야 합니다.
  // useEffect(() => {
  // svg path의 총 길이를 알아내기
  // console.log(
  //   `${id} path 총 길이 >`,
  //   document.getElementById(`${id}-main-path`).getTotalLength(),
  // );
  // });

  const pathObjExample = {
    id: 'loc1',
    // 각 컴포넌트에 svg 요소들을 구분할 수 있는 공통 id 값을 지정합니다.
    path_d_value: `M182.4, ... .4,595.3z`,
    // svg path의 d="" 속성값을 대입합니다.
    direction: 'left || right',
    // path의 진행방향 "left" || "right", 미 입력시 left 가 default 값입니다.
    translate_value: 'x,y',
    // svg 태그의 left, top 값을 이동합니다.
    scale_value: 'width, height',
    // svg의 배율을 결정합니다. ex ) 2, 2 가로 세로 2배
    path_stroke_dasharray_value: 'pathLenght',
    // document.getElementById(`${id}-main-path`).getTotalLength() 을 이용해 총 길이값을 추출합니다.
    path_stroke_dashoffset_multiply_value: '1',
    // svg path의 dashoffset 값은 현재의 퍼센트 만큼 path를 움직이는 효과를 냅니다.
    // 그런데 svg path의 곡률이나, svg에 어떤 예상하지 못한 문제점이 있을때
    // dashoffset 값에 path_stroke_dashoffset_multiply_value 가변적인 값을 곱해 가감/가중 치를 부여해 해결합니다.
    main_path_stroke_width_value: '1',
    //
    main_path_stroke_color_value: '#fff',
    //
    main_path_fill_value: 'none',
    //

    //
  };
  // ======================================

  const movingPathOptions = [
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
      path_d_value: `M2.59,108.2c2.85,4.89,141.15,69.24,155.41,73.52,14.26,4.28,62.02,19.25,71.29,22.1s119.05,60.59,190.34,71.29c71.29,10.69,163.25-17.11,189.2-27.8,25.95-10.69,172.23-102.65,172.23-102.65L1003.15,2.53`,
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
      path_d_value: `M2.59,108.2c2.85,4.89,141.15,69.24,155.41,73.52,14.26,4.28,62.02,19.25,71.29,22.1s119.05,60.59,190.34,71.29c71.29,10.69,163.25-17.11,189.2-27.8,25.95-10.69,172.23-102.65,172.23-102.65L1003.15,2.53`,
    },
  ];

  // ==========================================================

  useEffect(() => {
    // svg path의 총 길이를 알아내기
    // console.log(
    //   `${id} path 총 길이 >`,
    //   document.getElementById(`${id}-main-path`).getTotalLength(),
    // );
  });

  return (
    <SvgContainer>
      {/* 최상위 SVG 태그, viewBox 지정 */}
      <svg className="map-svg" viewBox="0 0 100% 100%">
        <MovingPath pathOption={movingPathOptions[0]} percent={percent2} />
        <MovingPathAnimation
          pathOption={movingPathOptions[1]}
          percent={percent2}
        />
      </svg>
    </SvgContainer>
  );
};

export default React.memo(SvgMap);
