import React, { useCallback, useEffect, useMemo } from 'react';
import styled, { css } from 'styled-components';

// const MovingPathContainer = styled.div`
//   /* width: 100%;
//   height: 100%;
//   box-sizing: border-box; */
//   .main-path {
//     /* 빈 공간의 색 */
//     fill: ${(props) => props.main_path_fill_value};
//     /* 현재 굴진량 표시 색 */
//     stroke: ${(props) => props.main_path_stroke_color_value};
//     /* 총 길이 */
//     stroke-width: ${(props) => props.main_path_stroke_width_value};
//     /* stroke-dasharray 는 path의 총 길이로 지정한다 */
//     stroke-dasharray: ${(props) => props.path_stroke_dasharray_value};
//     /* stroke-dashoffset 속성 값 만큼 변화한다 */
//     stroke-dashoffset: ${(props) =>
//       props.path_stroke_dasharray_value -
//         props.percent * props.path_stroke_dashoffset_multiply_value ?? 0};
//   }
//   .border-path {
//     opacity: 1;
//     fill: ${(props) => props.border_path_stroke_fill_value};
//     stroke: ${(props) => props.border_path_stroke_color_value};
//     stroke-width: ${(props) => props.border_path_stroke_width_value};
//     stroke-dasharray: ${(props) => props.path_stroke_dasharray_value};
//   }
//   .cover-path-line {
//     opacity: 1;
//     stroke: #fff;
//     /* stroke-width: ${(props) => props.path_stroke_dasharray_value}; */
//     stroke-width: 1;
//     stroke-dasharray: ${(props) => props.path_stroke_dasharray_value};
//     fill: #fff;
//   }
// `;

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

const MovingPath = ({ pathOption, percent }) => {
  useEffect(() => {
    // svg path의 총 길이를 알아내기
    console.log(
      `${id} path 총 길이 >`,
      document.getElementById(`${id}-main-path`).getTotalLength(),
    );
  });

  // console.log(pathOption);
  const {
    // id 식별값
    id,
    // 굴진 방향
    direction,
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
  } = pathOption;
  // 설계 : 같은 SVG PATH 3개를 사용한다.,
  // 1개는 mask, 즉 껍데기를 덮어 씌우기 위해 사용하고,
  // 나머지 2개는 라인을 그리기 위해 사용한다.
  // main-path 메인 라인
  // border-path 메인 라인의 테두리 부분
  //   console.log(pathOption);
  //   console.log("props percent >", percent);
  const calCurrentDashoffset = () => {
    const dasharrayV = path_stroke_dasharray_value;
    const percentV = percent;
    const multiplyV = path_stroke_dashoffset_multiply_value;
    // console.log(dasharrayV);
    // console.log(percentV);
    // console.log(multiplyV);
    // console.log(dasharrayV - percentV * multiplyV);
    if (direction === 'reverse') {
      console.log('reverse');
      console.log(
        'dashoffset >',
        percentV * 2 * (dasharrayV / 100 - multiplyV),
      );
      return dasharrayV - percentV * (dasharrayV / 100 - multiplyV);
    }
    // right
    console.log(
      'dashoffset >',
      dasharrayV - percentV * (dasharrayV / 100 - multiplyV),
    );
    return dasharrayV - percentV * (dasharrayV / 100 - multiplyV);
  };

  const css = `
  #${id}-main-path {
    fill: ${main_path_fill_value};
    stroke: ${main_path_stroke_color_value};
    stroke-width: ${main_path_stroke_width_value};
    stroke-dasharray: ${path_stroke_dasharray_value};
    stroke-dashoffset: ${calCurrentDashoffset()};
  }
  #${id}-border-path {
    opacity: 1;
    fill: ${border_path_stroke_fill_value};
    stroke: ${border_path_stroke_color_value};
    stroke-width: ${border_path_stroke_width_value};
    stroke-dasharray: ${path_stroke_dasharray_value};
  }
  #${id}-cover-path-line {
    opacity: 1;
    stroke: #fff;
    /* stroke-width: ${path_stroke_dasharray_value}; */
    stroke-width: 1;
    stroke-dasharray: ${path_stroke_dasharray_value};
    fill: #fff;
  }
`;
  //   console.log(css);
  return (
    <>
      <style>{css}</style>
      <defs>
        {/* mask 속성은 url(_) 형식으로 지정할때 id가 아니면 지정이 되지 않는다. */}
        <mask id={`${id}-path-cover-mask`}>
          {/* 내부 percentage 에 따라 변화하는 path를 덮어주는 외부 영역 지정 path */}
          <path id={`${id}-cover-path-line`} d={path_d_value} />
        </mask>
      </defs>
      {/* transform 초기 위치 지정, scale 배율지정 */}
      {/* 바깥 테두리를 위한 path  파란색*/}
      {/* <g
        id={`${id}-border-path-group`}
        transform={`translate(${translate_value}) scale(${scale_value})`}
      >
        <path id={`${id}-border-path`} d={path_d_value} />
      </g> */}
      <g
        id={`${id}-main-path-group`}
        transform={`translate(${translate_value}) scale(${scale_value})`}
        mask={`url(#${id}-path-cover-mask)`}
      >
        {/* 퍼센트에 따라 움직이는 path 노란색 */}
        <path id={`${id}-main-path`} d={path_d_value} />
      </g>
    </>
  );
};

export default React.memo(MovingPath);
