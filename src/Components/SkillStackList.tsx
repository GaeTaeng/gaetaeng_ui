
import React from 'react';

import mui_icon from '../Resource/mui_icon.png';
import react_icon from '../Resource/react_icon.png';
import recoil_icon from '../Resource/recoil_icon.png';
import ts_icon from '../Resource/ts_icon.png';


import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import './SkillStackList.css'
const LI_ICON = [
    {icon : react_icon, text : "REACT"},
    {icon : ts_icon, text : "TypeScript"},
    {icon : mui_icon, text : "MUI"},
    {icon : recoil_icon, text : "Recoil"},
]

function SkillStackList() {
  return (
    <div className="SkillStackList">

        
    <Stack direction="row" spacing={5} sx={{margin:"30px 30px 0 30px"}}
            divider={<Divider orientation="vertical" flexItem />}>
            {
                LI_ICON.map((item, idx) => {
                    return <img key={`icon_${idx}`} src={item.icon} style={{height : "60px", float:"left"}}/>;
                })
            }
      </Stack>
      <hr />
    </div>
  );
}

export default SkillStackList;
