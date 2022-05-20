import polytechLec from './polytechLec.js';
import util from './utility.js'; //가져온다는 뜻 

//왼쪽에 mylogg.js를 가져와서 써볼 것임. 

//밑에 얘를 내보낸다는 뜻 
const root = document.querySelector("#root"); 
root.innerHTML = '<p>Hello World </p>';
util.log("내가 만든 임포트 익스포트 데이터");


const pt = new polytechLec();
util.log(`current hour are ${pt.getCurrentHour()}`);
util.log(`lectures of Poly are ${pt.getLectures()}`);
util.log(`time is ${pt.getTime()}`);



// util.log(getTime());
// util.log(getCurrentHour());
// util.log(`getTime is ${getTime()}`);
// util.log(`current hour ${getCurrentHour()}`); //출력할 때 이런 표현식을 많이 씀. 


// const logger =new MyLogger2();//클래스는 const로 객체 생성  
// log(`lectures of Poly are ${logger.getLectures()}`); //사용

