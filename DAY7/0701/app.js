// document.querySelector("div")
// .addEventListener("click",function({target}){
// target : 링크를 클릭 할 때 창을 어떻게 열지 설정 한다.
//     console.log(target.tagName);
//     event ->e 자기 event안에서의 타입이 더블클릭이냐, 뭐냐의 차이임! 
//     target -element(<div>)
//     console.log(target.tagName);
//    console.log(target.innerText);
// });

// document.querySelector("div")
// .addEventListener("click",function({type}){
//
//     // console.log(target.tagName);
//     //event ->e
//     //target -element(<div>)
    
//    console.log(type);
// });
//target이랑 type은 예약어이기 때문에 그대로 사용해야 한다. 이름을 바꾸면 안됌. 



/**
 * 타입을 확인해보고 싶으면 type이라는 이름을 주고 출력해야한다.
 * (event type)
 * target,type은 지정된 예약어라서 다른 이름으로 받아올 수 없다.
 * 
 */


 document.querySelector("div")
 .addEventListener("click",function({type,target}){
     // console.log(target.tagName);
     //event ->e
     //target -element(<div>)
     
    console.log(type,target.tagName);
 });



 document.querySelector("div")
 .addEventListener("click",function({type,target}){
    console.log(type,target.tagName);
     // console.log(target.tagName);
     //event ->e
     //target -element(<div>)
     
    console.log("eval=",eval(1+2));
    console.log("eval=", eval(`alert('하이');`));
    console.log(`<${target.tagName}> div테스트 </${target.tagName}>`);
 });

