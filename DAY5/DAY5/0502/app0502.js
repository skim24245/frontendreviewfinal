
// // console.log(testvar); //undefined가 됨. var hoisting test(var 호이스팅) //어디에 선언했던지 간에 최상위로 끌어올려서 실행한다.


// // //var로 선언되어 있지 않아도
// // //변수명=값 이렇게 할당이됟면
// // //var testvar=2; 로 할당된 것 처럼 동작한다.


// // testvar = 2;
// // var testvar;
// // console.log(testvar); //2


// // // 오류 발생 (아래에서 testvar3;로 선언이 되어있지 않아 위에서 호출할 경우 오류가 발생한다.)
// // console.log(testvar3);
// // testvar3=10;


//undefined가 뜸(맨 밑에다가 var testvar4를 선언을 해주었지만 testvar4=10값이 두번째에 위치하고 있기 때문에undefined가 되는 것)
// console.log(testvar4);
// testvar4=10;
// var testvar4;

// //local variable은 {} 안에서만 사용이 가능하다.
{
    let age=20; 
    console.log("inner : " +age);
}
console.log("outer : " +age);



// {
//     age2= 30;
//     var age2;
// }
// console.log(age2);



// {
//     age2 = 30;
// }
// console.log(age2);