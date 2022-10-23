import React, { useRef, useState } from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import colours from '../../assets/colours';
import ContentEditable from 'react-contenteditable';
import TextField from '@mui/material/TextField';
const Connection = ({ editConnection, line, key }) => {
  const handleChange = (event) => {
    editConnection(event.target.value);
  };
  const arrowObj = (connection) => {
    const text = connection.title;
    return {
      start: connection.nodes[0],
      end: connection.nodes[1],
      labels: {
        middle: (
          //   <div
          //     style={{ backgroundColor: colours.p1 }}
          //     contentEditable
          //     suppressContentEditableWarning={true}
          //   >
          //     {connection.title}
          //   </div>
          <TextField
            inputProps={{
              style: {
                padding: 5,
                textAlign: 'center',
              },
            }}
            id='outlined-name'
            value={connection.title}
            placeholder='Connection Title'
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& > fieldset': {
                  border: 'none',
                },
              },
              bgcolor: colours.p1,
              padding: 0,
            }}
          />
        ),
        //   EditableText(connection.title, { backgroundColor: colours.p1 }),
      },
      headSize: 0,
      strokeWidth: 5,
      //   dashness: { animation: 1 },
      color: colours.p2,
    };
  };
  return <Xarrow key={key} {...arrowObj(line)} />;
};

export default Connection;
