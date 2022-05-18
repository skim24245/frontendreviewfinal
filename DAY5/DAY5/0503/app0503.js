/**
 * 명명법
 * -관습적으로 이렇게 사용하기로 약속을 했기때문에 
 * -회사마다 다를 수 있음. 프로젝트마다 다를 수 있음.
 * 
 * 카멜(camel) : 소문자 - 대문자- 소문자         ex)let coffeeType, makeCoffee(){}
 *              함수, 변수, 메소드는 카멜 형태로 써라!
 * 파스칼(pascal) : 대문자 - 대문자- 소문자      ex)class UserInfo{], function Person(){} 
 *              생성자, 클래스는 파스칼 형태로 써라!
 * lower(전체소문자) : 전체를 소문자로          ex) let, const 예약어, 키워드 
 * upper(전체대문자) :  전체를 대문자로         ex)const PI = 3.14; const PI=Math.PI;
 * 
 */



/**
 * 데이터 타입의 분류 
 * 1) 기본 타입의 형태 (primitive type) :int, string, boolean, undefined, null, symbol ->기본 타입이 아니면 다 객체타입/
 * 2) 참조타입 (reference type): object, primitive type이 아닌 것 
 * object type 
  기본타입을 제외한 모든 타입은 참조(객체) 타입이다.

pass by value 값을 가지고 있음 
assign by value
-> immutable : 아이스크림을 넘김 

pass by reference 주소를 가지고 있기 때문에 주소 안에 값이 바뀌면 a도 영향을 받고 b도 영향을 받는다.
assign by reference
-> mutable : 한 사람이 변경하면 다른 사람도 변경한 것을 확인할 수 있다.
 */


//기본 타입의 pass by value
// let a =10;
// //  값 선언 
// let b=a;
// //  값 복사 
// b=20; 
// // a는 값이 바뀌지 않는다.
// console.log(a,b);

//참조타입 pass by refernece
let list=[1,2,3,4,5];
let list2=list; 


// 같은 값을 출력한다고 하더라도 둘한테 영향이 있다. 
console.log("list=",list, "list2=",list2);
list[2]=100;
console.log("list=",list, "list2=",list2);
list


/**알아두면 좋음!!!
 * undefined라는 키워드면서 값이 나오는 경우 
 * -존재하는데, 값이 없을경우 
 * -값을 아직 할당받지 못한 변수의 값
 * -없는 객체의 프로퍼티를 읽으려고 시도했을 때의 값 
 * -없는 배열의 요소를 읽으려고 시도했을 때의 값 
 * -아무것도 반환하지 않는 함수가 반환하는 값 
 * -함수를 호출했을 때 전달받지 못한 인수의 값 
 */

// console.log("하이"); //브라우저 콘솔에서 실행하는데 return 값이 없으면 이렇게 undefined 나옴 


/**
 *리터럴 객체의 프로퍼티 값 확인 하기
 */
// const coffee={
//      type: "Americano",
//      price: 4000,
//  };

// console.log(coffee.price);
// console.log(coffee.sirup); //없는 속성값 undefined 
// coffee.sirup="설탕많이"; //프로퍼티 추가 
// console.log(coffee); //
// console.log(coffee.sirup);


// delete coffee.price;// delete 사용해서 프로퍼티 삭제
// console.log(coffee);


// //해당 객체에 프로퍼티가 있는 걸 확인하는 연산자 
// console.log("price" in coffee);
// console.log("type" in coffee);

// // coffee 객체에는 없는 속성이나 js 최상위 객체인 objet에 있는 속성도 사용할 수 있기 때문에 true가 나온다. 
// //js 모든 객체는 object를 상속 받는다.

// console.log("toString" in coffee); to string은 나한테 없는데 true 가나왔다. 자바스크립트의 최상위 객체는 object이여서 내 객체에 없어도 object에 있으면 (in) 자동으로 사용할 수 있다. 


//템플릿 리터럴 => 싱글 쿼테이션이랑``랑 구분잘하기!!!! ``이렇게 누워있는 것을 쓰는 이유는 
//```(역따옴표)로 묶은 문자열을 말한다.
// let strTemplate = '오늘도 벌써 3시간 밖에 안남았네';
// console.log(strTemplate);
// //줄바꿈 표시 해보기
// let strTemplate2 = '오늘도 벌써 3시간 \n 밖에 안남았네';
// console.log(strTemplate2);


//보간 표현식 => 동적으로 사용할 수 있다.
/**
 * 템플릿 리터럴 안에 플레이스 홀더를 넣을 수 있다.
 * 플레이스 홀더는 ${...}로 표시가 된다.
 * 플레이스 홀더 : 실제 값을 나중에 넣기 위해 확보한 장소
 * $()를 활용하여 문자열 안에 변수나 표현식의 결괏값을 삽입할 수 있다. 
*/

// let a=2,b=3;//한 줄에 두개를 선언할 수도 있다.
// console.log(a+"+"+b+"="+(a+b)); 
// // 이렇게 쓰면 불편하니까 
// console.log (`${a}+${b}=${a+b}`); 
// //  이렇게 place order를 넣어서 동적으로 처리함.
// let now = new Date(); 
// // 자바스크립트에 내장 되어있는 api임. 우리가 선언 안해도 사용할 수 있다. 객체를 사용(선언)하려면 new를 써서 쓰면 된다. 
// console.log(`오늘은 ${now.getMonth()+1}월 ${now.getDate()}일 입니다.`); 




//문자열 리터럴
// let str =String.raw'오늘은 집에 가면 \n 잠을 잘 자겠죠?';
// let str1=String.raw'test tests
// console.log(str);


//const를 사용하는 방법*/
// // //상수 값을 할당한다. 상수 값을 할당하는데 실질적으로 const를 써도 사용이 가능하다.
//  const people={
//     userName: "손흥민",
//     age: 30,
// };



// people.userName="IU";
// //const로 선언했는데 값이 바뀌는 이유는 
// //다시 할당만 안되고, 안에 내용을 수정하는건 된다.
// console.log(people);
// people = {
//     userName2: " 블랙핑크",
//     age2: 22
// }
// console.log(people);



// // const예제 하나 더 확인
// const list = [1,2,3,4,5]; //const를 적어도 안에 있는 내용을 수정하는 것은 가능하다! 
// console.log(list);
// list[2]=100;
// console.log(list);

