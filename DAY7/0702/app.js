import {log, getTime,getCurrentHour,MyLogger2} from './myLogger.js';


//왼쪽에 mylogg.js를 가져와서 써볼 것임. 

const root = document.querySelector("#root"); 
root.innerHTML = '<p>Hello World </p>';
log("내가 만든 임포트 익스포트 데이터");


log(getTime());
log(getCurrentHour());
log(`getTime is ${getTime()}`);
log(`current hour ${getCurrentHour()}`); //출력할 때 이런 표현식을 많이 씀. 


const logger =new MyLogger2();//클래스는 const로 객체 생성  
log(`lectures of Poly are ${logger.getLectures()}`); //사용
