/**
 * arrow function을 확인해 본다.
 * arrow funciton으로 사용할 API가 setTimeout이라 
 * web browser 띄우고 javascript을 실행한다.
 *  
 */


// setTimeout(function(){
//     console.log("하이~");
// },0);


// //arrow function
// setTimeout(()=>{
//     console.log("하이~~2");
// },2000);


//this context of arrow funciton 
// const myObj = {
//     runTimeout(){
//         setTimeout(function(){
//             console.log(this === window)
//         },1000);       
//     }
// }

// myObj.runTimeout();



// bind 함수 
// const myObj = {
//     runTimeout(){
//         setTimeout(function(){
//             // 현재의 영역에서 this window를 가리키고 있기 때문에 window.printData()
//             //라는 function은 존재하지 않기 때문
//             this.printData();
//         }.bind(this),2000);       
//     },
//     printData(){
//         console.log("prin data 출력~!!");
//     }
// }
// myObj.runTimeout();


//bind()함수 말고 arrow function을 적용해보자.
//bind()를 생략한 상태에서도 this가 context를 유지하고
//있다고 생각하면 된다.
//그래서 print data 출력~!!이 나온 것이다.
//arrow funciton을 context를 유지해주기 때문이다.
//arrow funciton은 값 자체가 변경될 일 없이 들어오는 대로 옆으로 타고 가서 결과를 매고 출력을 하는 것 

const myObj = {
    runTimeout(){
        setTimeout(()=>{
            // 현재의 영역에서 this window를 가리키고 있기 때문에 window.printData()
            //라는 function은 존재하지 않기 때문
            console.log(this===window);
            this.printData();
        },2000);       
    },
    printData(){
        console.log("prin data 출력~!!arrow function");
    }
}
myObj.runTimeout();


