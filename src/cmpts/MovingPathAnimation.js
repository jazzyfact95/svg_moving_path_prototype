import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const MovingPathAnimation = ({ pathOption, percent }) => {
  useEffect(() => {
    // svg path의 총 길이를 알아내기
    // console.log(
    //   `${id} path 총 길이 >`,
    //   document.getElementById(`${id}-main-path`).getTotalLength(),
    // );
  });

  let {
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

  id = 'hi';

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
  #${id}-cover-path-line-ani {
    opacity: 1;
    stroke: #fff;
    stroke-width: ${path_stroke_dasharray_value};
    stroke-width: 1;
    stroke-dasharray: ${calCurrentDashoffset()};
    stroke-dashoffset: ${calCurrentDashoffset()};
    fill: #fff;
  }

  #${id}-main-path-none-ani{
    fill: ${main_path_fill_value};
    stroke: ${main_path_stroke_color_value};
    stroke-width: ${main_path_stroke_width_value};
    stroke-dasharray: ${path_stroke_dasharray_value};
    stroke-dashoffset: -${path_stroke_dasharray_value - calCurrentDashoffset()};
    stroke: black;
    opacity : 1;
  }
  #${id}-main-path-ani{
    fill: ${main_path_fill_value};
    stroke: ${main_path_stroke_color_value};
    stroke-width: ${main_path_stroke_width_value};
    stroke-dasharray: ${path_stroke_dasharray_value / 125};
    stroke-dashoffset: ${calCurrentDashoffset()};
    stroke: #940c0c;
    animation : pathmove 15s linear infinite;
    opacity : 0.75;
    transition: background-color 1s, transform 1s;
  }
  @keyframes pathmove{
    0%{
      stroke-dashoffset : ${path_stroke_dasharray_value};
    }
    100%{
      stroke-dashoffset : ${calCurrentDashoffset()};
    }
  }
`;
  //   console.log(css);
  return (
    <>
      <style>{css}</style>
      <defs>
        {/* mask 속성은 url(_) 형식으로 지정할때 id가 아니면 지정이 되지 않는다. */}
        <mask id={`${id}-path-cover-mask-ani`}>
          {/* 내부 percentage 에 따라 변화하는 path를 덮어주는 외부 영역 지정 path */}
          <path id={`${id}-cover-path-line-ani`} d={path_d_value} />
        </mask>
      </defs>
      <g
        id={`${id}-main-path-group-ani`}
        transform={`translate(${translate_value}) scale(${scale_value})`}
        mask={`url(#${id}-path-cover-mask-ani)`}
      >
        {/* 퍼센트에 따라 움직이는 path 노란색 */}
        <path id={`${id}-main-path-ani`} d={path_d_value} />
        <path id={`${id}-main-path-none-ani`} d={path_d_value} />
      </g>
    </>
  );
};

export default React.memo(MovingPathAnimation);
