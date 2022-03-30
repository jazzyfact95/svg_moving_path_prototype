// // @border path description

// path 의 외각선을 겹쳐서 표현할 수 있어,
// 첫 프로토 타입에서는 적용했지만,
// 디자인 시안에 외각선이 그려져 있고, 요청하면 해주셔서
// 컴포넌트 설계에서 제외했습니다.

// // border path의 경우는 main path 와 동일한 선인데, 겹치게 위치하여
// // main path의 scale의 배수를 키워서 main path보다 아래에 두고 표출합니다.
// // 디자인 시안에 외각선이 그려져있는 경우나, 그 외 특별한 사항이 없다면 false
// // 처리하시면 됩니다.
// const borderPath = {
//   use_border_path: false,
//   // 외각선을 그려주는 path의 생성여부를 지정합니다.
//   // false가 기본 디폴드 값이며,
//   // true 로 지정했을 때만 외각선 옵션이 필요합니다.
//   border_path_stroke_width_value: 10,
//   // 외각선 너비를 지정합니다.
//   border_path_stroke_color_value: '#fff',
//   // 외각선 path의 색상을 지정합니다
//   border_path_stroke_fill_value: '#fff',
//   // 외각선 path의 채우기 색상을 지정합니다.
// };