// //arrow function(화살표 함수)
// //settimeout은 몇초 있다가 실행 되는 것 
// setTimeout(function(){ //이 모양부터 먼저 만들어야 함.
// console.log("화살표 함수입니다.");
// },2000);

// //이렇게 작성을 하면 function을 만들어야 하기 때문에 좀 더 간단하게 작성해보자.
// setTimeout(()=>{
//     console.log("화살표");
// },1000);


//일반적인 함수
// const simpleFunc =function(){
// console.log('simple function');
//}
// simpleFunc();


// //화살표 함수는 anaymous 함수다
// 아규먼트가 없는 화살표 함수 
// const simpleFunc2 =() => console.log("simple2");
// simpleFunc2();


//아규먼트가 있는 화살표 함수
// const add =  (a,b) => a+b;
// console.log(add(1,2));
//const add1=function(a,b){
//return a+b;
//}


//default parameter(디폴트 파라미터) 들어오는 파라미터가 4개인데 3개만 넣으면 , 값이 안들어 오면 그 값으로 들어오게 해놓는 것. 
//es6 추가

//es6이 전코드
// function showMessage(message,from){
//     console.log(`${message} by ${from}`);
// }
// console.log(showMessage('안녕~~~','정우성'));

// function showMessage2(message,from){
//     if(from ===undefined){
//         from ='IU';
//     }
//     console.log('${message} by ${from}');
// }
// showMessage2('안녕!!','손예진');


//if 조건문
/*
if (조건식){
    조건식이 참일경우 실행되는 부분
}

조건식이 거짓일경우 실행되는 부분


if (조건식A){
    조건식A가 참일경우 실행되는 부분
}else if{
    조건식B가 거짓일경우 실행되는 부분 
}else{
     조건식 A, 조건식 B도 다 아닐경우 실행 
}
*/

/**
 * 반복문 FOR문
 * 기준값이 존재하고, 일정한 증감값이 있을경우 사용한다.
 * for(let j=length;j>0;j--)() 감소
 * for(let i=0;i<length;i++){ //증가
 * i=0부터 length보다 하나 작을때까지 반복}
 */


/**
 * 반복문 while ()
 * 
 * while (조건식) {
 * 조건식이 참일경우에만 이 문장을 반복한다.}
 */


/**
 * 반복문 do ~ while()
 * do{
 * 최소한 한번은 이 부분은 실행된다.
 * 그리고 조건식을 만족하게 되면 계속 반복실행
 * } while (조건식);
 */

/**
 * Rest Parameter
 * 표현 : ...args
    Rest 파라미터는 배열형태로 값을 전달한다.
 */
// function printArr(...args){
//     for (let i = 0; i < args.length; i++) {
//         console.log (args[i]);
//     }
// };
// printArr('javascript','java','spring');


//for ...of 값이 있으면 쭉 뽑아내라.
// function printArr(...args){
//     for (const arg of args) { //of 연산자 
//         console.log(arg);
//     }
// };
// printArr('javascript','java','spring');