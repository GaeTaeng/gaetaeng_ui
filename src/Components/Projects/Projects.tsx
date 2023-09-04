import React from 'react';
import './Projects.css';


import { useRecoilState } from 'recoil';
import { TodoState } from '../../States/TodoState';

type Props = {
    width?: string | number;
    height?: string | number;
  };
  
function Projects ({width, height}: Props) {
    

    return(
    <div className="Projects"> 
    </div>
)}

export default Projects;