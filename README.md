주의 : 색상값 전달할 때 #123444 혹은 red 같은 형식으로 넣어야합니다.

옵션 객체 설명

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

    // [ani path values]
    ani_path_use: true,
    // 애니메이션 path의 표출 유무를 설정합니다. (true/false)
    ani_path_stroke_dasharray_split_value: 100,
    // 애니메이션 path 의 stroke_dasharray 속성을 나눌 값을 정해줍니다.
    // 값을 크게 나눌수록 잘게 쪼개집니다.
    ani_path_stroke_width_value: 1,
    // 애니메이션 path의 두께를 지정합니다.
    // main path의 두께와 동일하게 설정하시면 됩니다.
    ani_path_stroke_color_value: '#fff',
    // 애니메이션 path의 색상을 지정합니다.
    ani_path_fill_value: 'none',
    // 애니메이션 path의 채워지지 않은 선의 색상값을 지정합니다.
    // "none" 이면 색상을 없앱니다. transparent 속성은 적용 불가능합니다.
    ani_path_opacity: 1,
    // 애니메이션 path의 투명도를 지정합니다.

    // [animation values]
    animation_timing_function: 'linear',
    // keyframe 의 재생 방식을 설정합니다.
    // linear / ease-in ....
    animation_iteration_count: 'infinite',
    // keyframe 의 반복 횟수를 지정합니다.
    // infinite의 경우 무한입니다.
    animation_speed: 1.25,
    // keyframe의 속도를 지정합니다.
    // 값이 높을 수록 빨라집니다. 1 이하의 값을 지정하면 느려집니다.

    // [reverse path values]
    reverse_path_use: true,
    // 잔여 굴진영역의 path 의 표출 유무를 설정합니다. (true/false)
    reverse_path_stroke_width_value: 1,
    // 잔여 굴진영역의 stroke 두께를 지정합니다.
    // main path, ani path 보다 + 1 해주시면 ani path가 영역을 침범하지 않습니다.
    reverse_path_stroke_color_value: '#fff',
    // 잔여 굴진영역의 stroke 색상을 지정합니다.
    reverse_path_fill_value: '#fff',
    // 잔여 굴진영역의 채워지지 않은 선의 색상값을 지정합니다.
    reverse_path_opacity: 1,
    // 잔여 굴진영역의 투명도를 지정합니다.

};
