import React, { useState } from 'react';
import './Komantle.css';


import { TextField } from '@mui/material';
import { useRecoilState } from 'recoil';
import { KomantleState } from '../../States/KomantleState';
import { Props_komantle_item, Props_li_komantle } from './KomantleType';

import * as $ from "jquery";

type Props = {
    width?: string | number;
    height?: string | number;
  };
  
function Komantle ({width, height}: Props) {
    
    const [li_komantle, setLiKomantle] = useRecoilState<Props_komantle_item[]>(KomantleState);
    const [time, setTime] = useState<String>('');
    const [word, setWord] = useState<String>('');


    const handleChangeKomantleTime = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTime(event.target.value)
    }
    const handleChangeKomantleWord = (event : React.ChangeEvent<HTMLInputElement>) => {
        const word = event.target.value;
        setWord(event.target.value)
  }
const handleOnKeyUp = (event : React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
        getAnswer();
    }   

}

const getAnswer = () => {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://semantle-ko.newsjel.ly/guess/530/%EA%B9%8C%EB%A7%88%EA%B7%80');
    request.send();
    request.onload = function() {
        console.log(JSON.parse(request.response));
    }



    // $.ajax({

    //     url: "http://www.daum.net/",
       
    //    }).done(function(data) {
       
    //     document.write(data);
       
    //    });


    // $.ajax({

    //     url: "https://semantle-ko.newsjel.ly/guess/530/%EA%B9%8C%EB%A7%88%EA%B7%80",
       
    //    }).done(function(data) {
       
    //     document.write(data);
       
    //    });

    // const encode = encodeURI(word.trim())
    // $.ajax({
    //     // url: `https://semantle-ko.newsjel.ly/guess/${time}/${encode}`,
    //     url: "https://semantle-ko.newsjel.ly/guess/530/%EA%B9%8C%EB%A7%88%EA%B7%80",
    //     method: "GET",
    //     type: "GET",
    //     beforeSend: function (xhr) {
    //         // xhr.setRequestHeader("Content-type","application/json");
    //         // xhr.setRequestHeader("Accept","*/*");
    //         // xhr.setRequestHeader("Accept-Encoding","gzip, deflate, br");
    //         xhr.setRequestHeader("Referer","https://semantle-ko.newsjel.ly/");
    //     },
    //     success: (response) => {
            
    //     },
    //     error: () => {
    //         console.log("Ajax error!");
    //     }
    // });
}


    return(
    <div className="Komantle">
        <div dangerouslySetInnerHTML={{ __html: "https://semantle-ko.newsjel.ly/guess/530/%EA%B9%8C%EB%A7%88%EA%B7%80" }} />
        <div><span>몇회차?</span>
            <TextField className='Komantle-Input-Title'
                sx={{width : "30%"}}
                value={time}
                id="outlined-helperText"
                label="회차" 
                onChange={handleChangeKomantleTime}
                /></div>

        <div><span>단어</span>
            <TextField className='Komantle-Input-Title'
                sx={{width : "30%"}}
                value={word}
                id="outlined-helperText"
                label="단어" 
                onChange={handleChangeKomantleWord}
                onKeyUp={handleOnKeyUp} /></div>
        <div>
            <ul> 
                <li>
                    <span>번호</span>
                    <span>단어</span>
                    <span>순위</span>
                    <span>유사도</span>
                </li>
            </ul> 
            <ul> 
                {li_komantle.map(item => {
                    return <li>
                        <span>{item.id}</span>
                        <span>{item.word}</span>
                        <span>{item.rank}</span>
                        <span>{item.sim.toFixed(4)}</span>
                    </li>
                })}
            </ul> 
        </div>
        
        
    </div>
)}

export default Komantle;