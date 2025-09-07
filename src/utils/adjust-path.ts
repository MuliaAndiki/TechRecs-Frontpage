// import { useEffect } from "react";

//   useEffect(() => {
//     function getPath(from: HTMLElement, to: HTMLElement) {
//       const fromBox = from.getBoundingClientRect();
//       const toBox = to.getBoundingClientRect();

//       const x1 = fromBox.left + fromBox.width / 2;
//       const y1 = fromBox.top + fromBox.height / 2;
//       const x2 = toBox.left + toBox.width / 2;
//       const y2 = toBox.top + toBox.height / 2;

//       const cx = (x1 + x2) / 2;
//       const cy = Math.min(y1, y2) - 100;

//       return `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;
//     }

//     if (div1Ref.current && div2Ref.current) {
//       setPath1(getPath(div1Ref.current, div2Ref.current));
//     }
//     if (div1Ref.current && div3Ref.current) {
//       setPath2(getPath(div1Ref.current, div3Ref.current));
//     }
//   }, []);
