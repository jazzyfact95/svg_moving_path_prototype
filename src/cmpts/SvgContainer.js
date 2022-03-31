// import React, { useEffect } from "react";
import React, { useCallback, useMemo, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PathComponent from './PathComponent';

const SvgArea = styled.div`
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

const SvgContainer = ({ percent1, percent2 }) => {
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

  // 색상값 전달할 때 #123444 혹은 red 같은 형식으로 넣어야합니다.
  const pathObjExample = {
    // [svg common values]
    id: 'loc1-station101',
    // 각 컴포넌트에 svg 요소들을 구분할 수 있는 공통 id 값을 지정합니다.
    path_d_value: `M182.4, ... .4,595.3z`,
    // svg path의 d="" 속성값을 대입합니다.
    direction: 'left || right',
    // path의 진행방향 "left" || "right", 미 입력시 left 가 default 값입니다.
    translate_value: 'x,y',
    // svg 태그의 left, top 값을 이동합니다.
    scale_value: 'width, height',
    // svg의 배율을 결정합니다. ex ) 2, 2 가로 세로 2배
    path_stroke_dasharray_value: 1,
    // document.getElementById(`${id}-main-path`).getTotalLength() 을 이용해 총 길이값을 추출합니다.
    path_stroke_dashoffset_multiply_value: 1,
    // svg path의 dashoffset 값은 현재의 퍼센트 만큼 path를 움직이는 효과를 냅니다.
    // 그런데 svg path의 곡률이나, svg에 어떤 예상하지 못한 문제점이 있을때
    // dashoffset 값에 path_stroke_dashoffset_multiply_value 가변적인 값을 곱해 가감/가중 치를 부여해 해결합니다.

    // [cover values]
    cover_path_fill_value: '#fff',
    // 하위 path 들의 라인을 지정하는 mask 영역의 path 의 fill 속성입니다.
    // 전체 path에 대한 투명도를 관장합니다.
    // 이 속성은 하얀색에 가까워 질 수록 불투명해지고
    //  검정색에 가까워 질 수록 투명해집니다.

    // [main path values]
    main_path_stroke_width_value: 1,
    // 메인 path의 두께를 지정합니다.
    main_path_stroke_color_value: '#fff',
    // 메인 path의 색상을 지정합니다.
    main_path_fill_value: 'none',
    // 메인 path의 채워지지 않은 선의 색상값입니다. "none" 이면 색상을 없앱니다.
    // transparent 속성은 적용 불가능합니다.
    main_path_opacity: 1,
    // 메인 path의 투명도를 지정합니다.

    // [animation values]
    ani_path_stroke_dasharray_split_value: 100,
    // 애니메이션 path 의 stroke_dasharray 속성을 나눌 값을 정해줍니다.
    // 값을 크게 나눌수록 잘게 쪼개집니다.
    ani_path_stroke_width_value: 1,
    ani_path_stroke_color_value: '#971717',
    ani_path_fill_value: 'none',
    ani_path_opacity: 1,
    ani_path_animation_type: 'linear',
    ani_path_animation_speed: 1,

    // [reverse path values]
    reverse_path_stroke_width_value: 1,
    reverse_path_stroke_color_value: '#fff',
    reverse_path_fill_value: '#fff',
    reverse_path_opacity: 1,
  };
  // ======================================

  const movingPathOptions = [
    {
      // svg path common values
      id: 'loc1-station101',
      path_d_value: `M2.59,108.2c2.85,4.89,141.15,69.24,155.41,73.52,14.26,4.28,62.02,19.25,71.29,22.1s119.05,60.59,190.34,71.29c71.29,10.69,163.25-17.11,189.2-27.8,25.95-10.69,172.23-102.65,172.23-102.65L1003.15,2.53`,
      direction: 'left',
      translate_value: '135, 40',
      scale_value: '1, 1',
      path_stroke_dasharray_value: 1107,
      path_stroke_dashoffset_multiply_value: 1,
      // cover path vaule
      cover_path_fill_value: '#fff',
      // svg path values
      main_path_stroke_width_value: 8,
      main_path_stroke_color_value: 'red',
      main_path_fill_value: 'none',
      main_path_opacity: 1,
      // reverse path values
      reverse_path_stroke_width_value: 9,
      reverse_path_stroke_color_value: 'black',
      reverse_path_fill_value: 'none',
      reverse_path_opacity: 1,
      // ani path values
      ani_path_stroke_dasharray_split_value: 120,
      ani_path_stroke_width_value: 8,
      ani_path_stroke_color_value: '#971717',
      ani_path_fill_value: 'none',
      ani_path_opacity: 1,
      // animation values
      animation_timing_function: 'linear',
      animation_iteration_count: 'infinite',
      animation_speed: 1.25,
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
    <SvgArea>
      {/* 최상위 SVG 태그, viewBox 지정 */}
      <svg className="map-svg" viewBox="0 0 1384 360">
        <PathComponent pathOption={movingPathOptions[0]} percent={percent2} />
        {/* <PathAnimation pathOption={movingPathOptions[1]} percent={percent2} /> */}
      </svg>
    </SvgArea>
  );
};

export default React.memo(SvgContainer);
