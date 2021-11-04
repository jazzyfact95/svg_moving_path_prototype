// import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const SvgContainer = styled.div`
  /* position: absolute; */
  box-sizing: border-box;
  border: 5px solid red;
  width: 100%;
  height: 100%;
  transition: 1s;
  .moving-path-svg {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: limegreen 3px solid;
    .main-path {
      stroke: yellow;
      stroke-width: 15;
      /* stroke-dasharray 는 path의 총 길이로 지정한다 */
      stroke-dasharray: 1455;
      /* stroke-dashoffset 속성 값 만큼 변화한다 */
      stroke-dashoffset: ${(props) => 1455 - props.percent * 7.35 ?? 0};
      /* stroke-dashoffset: 172; */
      /* 빈 공간의 색깔 */
      fill: red;
    }
    .cover-path-line {
      stroke: #fff;
      stroke-width: 1;
      stroke-dasharray: 1455;
      fill: #fff;
      opacity: 1;
    }
    .border-path {
      stroke: blue;
      stroke-width: 2;
      stroke-dasharray: 1455;
      fill: blue;
      opacity: 1;
    }
  }
`;

// * 만약 굴곡으로 인하여 정상적인 퍼센테이지 적용이 되지 않을 경우
//  아래와 같이 조율하여 사용하면 된다.
// const getDashoffset = (percent) => {
//   let result = 0;
//   if (percent <= 10) {
//     result = 344 - percent * 7.14;
//   } else if (percent <= 20) {
//     result = 344 - percent * 5.64;
//   } else if (percent <= 30) {
//     result = 344 - percent * 4.7;
//   } else if (percent <= 40) {
//     result = 344 - percent * 4.4;
//   } else if (percent <= 50) {
//     result = 344 - percent * 4.5;
//   } else if (percent <= 60) {
//     result = 344 - percent * 4.4;
//   } else if (percent <= 70) {
//     result = 344 - percent * 3.7;
//   } else if (percent <= 80) {
//     result = 344 - percent * 3.6;
//   } else if (percent <= 90) {
//     result = 344 - percent * 3.44;
//   } else {
//     result = 344 - percent * 3.44;
//   }
//   return result;
// };

const MovingSvgLine = ({ percent, svgOption }) => {
  const {
    // id 식별값
    id,
    // viewbox 속성 값
    viewbox_value,
    // path 태그의 속성 d 값
    path_d_value,
    // 좌표 초기 값
    translate_value,
    // 배율 값
    scale_value,
    //
    // 패스의 총 길이
    path_stroke_dasharray_value,
    // 패스의 비율 가중치
    path_stroke_dashoffset_multiply_value,
    // 메인 패스의 두께
    main_path_stroke_width_value,
    // 메인 패스의 채워진 선의 색상값
    main_path_stroke_color_value,
    // 메인 패스의 채워지지 않은 선의 색상값
    main_path_fill_value,
    // 테두리 패스의 두께
    border_path_stroke_width_value,
    // 테두리 패스의 채워진 선의 색상값
    border_path_stroke_color_value,
    // 테두리 패스의 채워지지 않은 선의 색상값
    border_path_stroke_fill_value,
  } = svgOption;

  // console.log(svgOption);

  // useEffect(() => {
  //   // svg path의 총 길이를 알아내기
  //   console.log(
  //     "fill-svg 총 길이",
  //     document.getElementById("fill-svg").getTotalLength()
  //   );
  // }, [d_option, percent]);

  // ==========================================================

  const pathDefsRenderer = () => {
    return <></>;
  };

  return (
    <SvgContainer percent={percent}>
      {/* 큰 SVG 태그, viewBox 지정 */}
      {/* 설계 : 같은 SVG PATH 3개를 사용한다., 
      1개는 mask, 즉 껍데기를 덮어 씌우기 위해 사용하고,
      나머지 2개는 라인을 그리기 위해 사용한다. */}
      {/* main-path 메인 라인 */}
      {/* border-path 메인 라인의 테두리 부분 */}
      <svg className="moving-path-svg" viewBox={viewbox_value}>
        {/* 참조하겠다. */}
        <defs>
          {/* mask 속성은 url(_) 형식으로 지정할때 id가 아니면 지정이 되지 않는다. */}
          <mask id={`${id}-path-cover-mask`}>
            {/* 내부 percentage 에 따라 변화하는 path를 덮어주는 외부 영역 지정 path */}
            <path className="cover-path-line" d={path_d_value} />
          </mask>
        </defs>
        {/* transform 초기 위치 지정, scale 배율지정 */}
        {/* 바깥 테두리를 위한 path  파란색*/}
        <g
          className="border-path-group"
          transform={`translate(${translate_value}) scale(${scale_value})`}
        >
          <path className="border-path" d={path_d_value} />
        </g>
        <g
          className="main-path-group"
          transform={`translate(${translate_value}) scale(${scale_value})`}
          mask={`url(#${id}-path-cover-mask)`}
        >
          {/* 퍼센트에 따라 움직이는 path 노란색 */}
          <path className="main-path" d={path_d_value} />
        </g>
      </svg>
    </SvgContainer>
  );
};

export default MovingSvgLine;
