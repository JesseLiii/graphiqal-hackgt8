// import React, { useState } from 'react';
// import { Resizable } from 're-resizable';
// import Draggable from 'react-draggable';
// import colours from '../../assets/colours';
// const Connection = () => {
//   const [state, setState] = useState({ width: 320, height: 50 });
//   return (
//     <Draggable className='input'>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           alignContent: 'center',
//         }}
//       >
//         <Resizable
//           maxHeight={5}
//           style={{
//             marginLeft: 500,
//             marginTop: 200,
//             //   border: '1px solid black',
//             borderRadius: 30,
//             backgroundColor: colours.p2,
//           }}
//           size={{ width: state.width, height: state.height }}
//           onResizeStop={(e, direction, ref, d) => {
//             setState({
//               width: state.width + d.width,
//               height: state.height + d.height,
//             });
//           }}
//         ></Resizable>
//         <h2 className='input' style={{ textAlign: 'center' }}>
//           Connection info
//         </h2>
//       </div>
//     </Draggable>
//   );
// };
// export default Connection;

import React, { useRef, useState } from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';

const Connection = ({ line, key }) => {
  return <Xarrow key={key} {...line} />;
};

export default Connection;
