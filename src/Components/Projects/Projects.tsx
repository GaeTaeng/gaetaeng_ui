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
        <ul>
            <li>
            <div>(개인)1. 웹에디터</div>    
            <div>tag를 tree형식으로 배치</div>    
            <div>아래 링크 참조</div>    
            <a href='https://www.bucketplace.com/post/2020-09-18-%EC%9B%90%ED%99%9C%ED%95%9C-%EC%BD%98%ED%85%90%EC%B8%A0-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%97%90%EB%94%94%ED%84%B0-%EA%B0%9C%EB%B0%9C%EA%B8%B0/' type='_blank'>오늘의집 기술문서</a>
            </li>    
        </ul> 
        
    </div>
)}

export default Projects;