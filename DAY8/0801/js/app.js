
// function createCounterClosure() {
//     let count = 0;
//     return {
//         increase: function () {
//             count++;
//         },
//         getCount: function () {
//             return count;
//         }
//     }
// }

// const count1 = createCounterClosure();
// count1.increase();
// count1.increase();
// console.log("counter1의 값: " + count1.getCount());

//기본적으로는 함수를 실행하고 나면 값이 안남아있는데
//clousre라는 건 함수르 호출한 이후에도 메모리에 남아 값에 접근할 수 있는데
//객체 지향 3대 특징(은닉성 -> 값 숨길 때 ex private, public등 )

/**
 * closure(클로저)
 * 함수가 정의된 때의 렉시걸 환경을 기억하는 함수를 말한다.(etc)
 * 함수가 호출된 이후에도 메모리에 값이 존재해 외부에서 접근할 수 있는 용도
 * 
 * //일반적으로 접근할 수 없는 것에 접근하는 효과
 * //변수를 은닉하여 지속성을 보장할 수 있다.
 * //자바스크립트의 모든 함수는 클로저로 정의할 수 있다.
 * 
 * 
 * //일반적인 함수가 동작하는 방식
 * //함수가 실행한 이후에 함수에 있는 값들은
 * //메모리에서 사라진다.



// function generalFunc(){
//     let count = 0;
//     count++;
//     return count;
// }


//함수가 실행한 이후에 함수에 있는 값들은 메모리에서 사라진다. 
// console.log(generalFunc()); // 1  - 0
// console.log(generalFunc()); // 2 - x, 1 - 0


// const count2 = createCounterClosure(); 

// count2.increase();
// console.log("counter2의 값: "+count1.getCount());


/**promise는 언제쓴다? 비동기 처리를 할 때 사용
-es2015(es6)에서 비동기 처리를 하기위해 Promise 객체를 소개함
*primise는 객체로서 !!!!언젠가 완료될 일!!!!을 나타낸다.
완료되면 하나의 값을 결과로 반환하는데
정상적인 결과(성공)를 반환할 수 있고  resolve 
실패한 결과를 반환할 수도 있다. reject

/**
 * promise 객체는 다음과 같은 세가지 상태를 가진다.
 * 1) 대기중(pendding) : 아직 결과가 없는 상태, 약속을 했지만 아직 약속에 대한 결과가 나오지 않은 상태
 * 2) 이행됨(fullfilled) : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태. 이 때 결과로서 하나의 값이 전달됨.
 * 3) 거부됨(reject_): 비동기 처리가 실패한 상태. 약속이 거부되고 그 결과로 거절된 이유를 전달. 
 */


/**
 * promise 객체는 두가지의 메소드를 가진다.
 * 1) then => 실행됐다는 듯 . 
 * -약속이 완료됐을 때 호출될 함수를 정리
 * -이때 첫번째 인자로 전달되는 함수는 약속이 성공적으로 이행됐을 때 호출
 * -두번째인자로 전달된 함수는 거부됐을 때 호출
 * -두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달된다.
 * 
 * 2) catch -> 에러가 발생하면 catch에서 잡음. 
 * -약속이 거부됐을 때 호출될 함수를 등록한다.
 * 
 * .then은 계속 실행이 되는 비동기 방식~
 * 
 */
//  function promiseForHomework(mustDo) { 
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("doing homework!");
//             if(mustDo){ //mustdo라는 객체를 받아왔으니까 
//                 resolve({
//                     result: "homework-result"
//                 });
//             } else {
//                 reject(new Error("Too lazy"));
//             }
//         }, 1000);
//     });
// }
// const promiseA = promiseForHomework(true); //true야 result로 가는데 
// console.log("promiseA 출력완료!")

// const promiseB =promiseForHomework(); //true가 아니여서 error가 뜬다. 
// console.log("promiseB 출력완료!!");

//promiseA
// promiseA.then(v => console.log(v));

//promiseB
// promiseB
// .then(v => console.log(v))
// .catch(e => console.error(e)); //try catch랑 비슷함


const getHen = () => new Promise((resolve,reject) => {
    setTimeout (()=>resolve("암탉"),1000);
});
const getegg = (hen) => new Promise((resolve,reject) => {
    setTimeout (()=>reject (new Error(`${hen} => 달걀`)),1000); //거짓으로 됐을 때 빵으로 가는 것. reject를 쓰는것
});
const cook = (egg) => new Promise((resolve,reject) => {
    setTimeout (()=>resolve(`${egg} => 계란후라이`),1000);
});

// getHen()
// .then(hen => getegg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal)); 


//콜백함수가 지멋대로 계속돌리는거고, 얘는 결괏값이 있으면 반환하고 없음 다른 값으로 반환하는 것임 

// getHen() //위에서 쓰나 밑에서 쓰나 똑같음
// .then(getegg)
// .then(cook)
// .then(console.log);

getHen() //위에서 쓰나 밑에서 쓰나 똑같음
.then(getegg)
.catch(error => { //에러가 나면 빵으로 나오는 것 
    return "빵"
} )
.then(cook)
.then(console.log);





