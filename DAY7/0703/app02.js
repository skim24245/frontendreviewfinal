// const element =document.querySelector("p");
// const myObj ={
//     register(){
//         element.addEventListener("click",function(evt){
//             this.printData();
//         });
//     },
//     printData(){
//         console.log("clicked~!!");
//     }
// }
// myObj.register();


//아까전에 사용했던 arrow function을 사용해보자.
//클릭 이벤트가 발생했을 때 context가 위치되면서 함수호출이 가능해진다.
//따라서 결과값이 "clicked~!!"가 출력이 된다.
const element =document.querySelector("p");
const myObj ={
    register(){
        element.addEventListener("click",(evt) => {
            this.printData(); //들어오면 못나가는 통로임. 객체안에 있으니까 밑에 printdata()를 가지고 나간다.실행 영역이 다르면 못함.
        });
    },
    printData(){
        console.log("clicked~!!");
    }
}
myObj.register();
