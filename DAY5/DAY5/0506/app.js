/**
 * 함수를 선언하고 사용하기 
 */

// //함수선언, 리턴타입이 없는 함수 
// function add(a,b){
//     console.log(a+b);
// }

// //함수호출
//  add(1,2);

//  //리턴타입이 있는 함수
//  function multiple(a,b){
//      return(a*b);
//  }

//  //first class object 
//  console.log(multiple(3,4));


//함수에서도 hoisting이 된다.
//선언을 아래에서 해 놓아도
//위에서 호출할 수 있음.

// coffeeMachine("라떼",4000);

// function coffeeMachine(type,price){
// console.log(`${price}인 ${type} 커피가 나왔습니다.`);
// }

// 함수를 만들면 얻을 수 있는 장점
//1) 재사용이 가능하다
//2) 만든 프로그램을 이해하기 쉽다.
//3) 프로그램 수정이 간단해 진다.


//함수 표현방법
//함수 선언문으로 정의하기
function square(x){
    return x * x;
}

//함수 리터럴로 정의하기
const square2 = function(x){
    return x * x;
}

//function 생성자로 정의하는 방법 
const square3 = function("x", "return x * x");

//화살표 함수(arrow function)표현식으로 정의하는 방법(es6)
const square4 = x => x * x;


//즉시 실행함수 -> 실행해야 하는 시점에 써야 함.
(function(){})();

//즉시 실행함수는 인자값(아규먼트)을 전달할 수 있다.
(function(a,b){})(1,2);

//즉시 실행함수도 이름을 붙일 수 있지만, 함수 내부에서만 유효하다.
(function square5(x){
    return x * x;
})(3);


//함수 정의식을 함수값으로 만들 수도 있다.
*function(){
    return 1+1;

}();
