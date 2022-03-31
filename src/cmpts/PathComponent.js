import React, { useEffect, useState } from 'react';

const Path = ({ pathOption, percent }) => {
  const {
    // cover path vaule
    id,
    // id 식별값
    path_d_value,
    // path 태그의 속성 d 값
    direction,
    // 진행 방향 left || right
    translate_value,
    // 좌표 값 이동 (left,top)
    scale_value,
    // 배율 값 (width, height)
    path_stroke_dasharray_value,
    // 패스의 총 길이
    path_stroke_dashoffset_multiply_value,
    // 패스의 비율 가중치

    // cover path vaule
    cover_path_fill_value,

    // svg path values
    main_path_stroke_width_value,
    // 메인 패스의 두께
    main_path_stroke_color_value,
    // 메인 패스의 채워진 선의 색상값
    main_path_fill_value,
    // 메인 패스의 채워지지 않은 선의 색상값
    main_path_opacity,

    // ani path values
    ani_path_stroke_dasharray_split_value,
    ani_path_stroke_width_value,
    ani_path_stroke_color_value,
    ani_path_fill_value,
    ani_path_opacity,

    // animation values
    animation_speed,
    animation_timing_function,
    animation_iteration_count,

    // reverse path values
    reverse_path_stroke_width_value,
    reverse_path_stroke_color_value,
    reverse_path_fill_value,
    reverse_path_opacity,
  } = pathOption;

  const [currentStyle, setCurrentStyle] = useState('');

  const calCurrentDashoffset = () => {
    const dasharrayV = path_stroke_dasharray_value;
    const percentV = percent;
    const multiplyV = path_stroke_dashoffset_multiply_value;

    if (direction === 'right') {
      // right
      // right는 전체 dash array 전체길이에 현재 굴진량 만큼의 dash off set 길이를
      // 더해서 설정한다.
      // console.log(
      //   'right, cal current dashoffset >',
      //   percentV * (dasharrayV / 100) * multiplyV,
      // );
      return (
        path_stroke_dasharray_value + percentV * (dasharrayV / 100) * multiplyV
      );
    }
    // left (default)
    // left는 전체 dash array 길이에서 현재 굴진량 만큼의 dash off set 길이를
    // 빼서 설정한다.
    // console.log(
    //   'left, cal current dashoffset >',
    //   dasharrayV - percentV * (dasharrayV / 100) * multiplyV,
    // );
    return dasharrayV - percentV * (dasharrayV / 100) * multiplyV;
  };

  // 현재 굴진거리 이외의 덮어주는 path의 dashoffset값 계산
  const calReverseDashoffset = () => {
    if (direction === 'right') {
      // right
      return path_stroke_dasharray_value + calCurrentDashoffset();
    }
    // left (default)
    return -(path_stroke_dasharray_value - calCurrentDashoffset());
  };

  const css_cover_path = `
  #${id}-cover-path {
    stroke-dasharray: ${path_stroke_dasharray_value};
    fill: ${cover_path_fill_value};
  }`;

  const css_main_path = `
  #${id}-main-path {
    fill: ${main_path_fill_value};
    stroke: ${main_path_stroke_color_value};
    stroke-width: ${main_path_stroke_width_value};
    stroke-dasharray: ${path_stroke_dasharray_value};
    stroke-dashoffset: ${calCurrentDashoffset()};
    opacity: ${main_path_opacity}
  }`;

  const css_ani_path = `
  #${id}-ani-path{
    fill: ${ani_path_fill_value};
    stroke: ${ani_path_stroke_color_value};
    stroke-width: ${ani_path_stroke_width_value};
    stroke-dasharray: ${
      path_stroke_dasharray_value / ani_path_stroke_dasharray_split_value
    };
    stroke-dashoffset: ${calCurrentDashoffset()};
    stroke: ${ani_path_stroke_color_value};
    opacity : ${ani_path_opacity};
    animation-name : ${id}-animation;
    animation-duration : ${percent / animation_speed}s ;
    animation-timing-function: ${animation_timing_function};
    animation-iteration-count : ${animation_iteration_count};
  }`;

  const css_reverse_path = `
  #${id}-reverse-path {
    fill: ${reverse_path_fill_value};
    stroke: ${reverse_path_stroke_color_value};
    stroke-width: ${reverse_path_stroke_width_value};
    stroke-dasharray: ${path_stroke_dasharray_value};
    stroke-dashoffset: ${calReverseDashoffset()};
    opacity : ${reverse_path_opacity};
  }`;

  const css_keyframes = `
  @keyframes ${id}-animation{
    0%{
      stroke-dashoffset : ${path_stroke_dasharray_value};
    }
    100%{
      stroke-dashoffset : ${calCurrentDashoffset()};
    }
  }`;

  const css =
    css_cover_path +
    css_main_path +
    css_ani_path +
    css_reverse_path +
    css_keyframes;

  return (
    <>
      <style>{css}</style>
      <defs>
        {/* mask 속성은 url(_) 형식으로 지정할때 id가 아니면 지정이 되지 않는다. */}
        <mask id={`${id}-path-cover-mask`}>
          {/* 내부 percentage 에 따라 변화하는 path를 덮어주는 외부 영역 지정 path */}
          <path id={`${id}-cover-path`} d={path_d_value} />
        </mask>
      </defs>
      <g
        id={`${id}-main-path-group`}
        transform={`translate(${translate_value}) scale(${scale_value})`}
        mask={`url(#${id}-path-cover-mask)`}
      >
        {/* 퍼센트에 따라 움직이는 path 입니다. */}
        <path id={`${id}-main-path`} d={path_d_value} />
        {/* 애니메이션 path 입니다. 전체 path의 총길이를 따라갑니다. */}
        <path id={`${id}-ani-path`} d={path_d_value} />
        {/* 현재 퍼센트를 제외하고 잔여 퍼센트 영역을 덮는 reverse path 입니다. */}
        <path id={`${id}-reverse-path`} d={path_d_value} />
      </g>
    </>
  );
};

export default React.memo(Path);
