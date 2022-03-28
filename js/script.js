// 선택자
// 아이디 선택자 : document.getElementById("아이디명");
// 클래스 선택자 : document.getElementsByClassName("클래스명")[인덱스번호];
// 태그 선택자 : document.getElementsByTagName("태그(요소)명")[인덱스번호];

// 특정 명칭을 기반으로 선택(단, 한개만을 선택) : document.querySelector(".클래스명 || #아이디명 || 태그명");
// 특정 명칭을 기반으로 선택(복수 선택) : document.querySelectorAll(".클래스명 || #아이디명 || 태그명");

document.getElementById("js_dom").style.color="#ff0000";
// document.getElementById("js_dom");
// 문서로부터 아이디명이 "js_dom"인 요소를 가져오겠다는 의미
var $dom_element = document.getElementById("js_dom");
console.log($dom_element);
$dom_element.style.background="#aaffff";
// html 문서상에서 id의 동일한 값이 없어야하는 이유
// style.css에서는 스타일 적용간 문제가 없음
// 자바스크립트에서는 동일한 아이디명을 인정하지 않음, 첫번째에 해당하는 아이디만 적용할 수 있음

$dom_element.style.fontSize="50px";
$dom_element.style.borderBottom="1px solid #0000ff";
/* ---------------------------------------------------- */
// 직접 선택자(원거리 선택자)
var $class=document.getElementsByClassName("trip");
console.log($class);
// $class.style.borderLeft="1px solid red";
// L24는 오류; 클래스 객체를 선택했을 때, 인덱스 번호로 접근이 필요; $class.length==1라도 인덱스 번호[0] 입력 필요

// trip이라는 클래스명을 가진 각각의 요소에 변수명을 달리 선언한 뒤, 스타일 입력시 변수명을 불러온다
var $busan=document.getElementsByClassName("trip")[1];
console.log($busan);
var $favSpot=document.getElementsByClassName("trip")[4];
console.log($favSpot);
$favSpot.style.color="rgba(255, 0, 0, 1)";
/* ---------------------------------------------------- */
// h4 요소들을 하나의 변수명으로 선언한 뒤, 스타일 입력시 변수명[인덱스번호]로 불러온다
var $element=document.getElementsByTagName("h4");
console.log($element);
console.log($element[1]);
$element[1].style.color="blue";
/* ---------------------------------------------------- */
var $unit = document.querySelector(".query_unit .ice_03");
console.log($unit);
$unit.style.backgroundColor="#aaffaa";

var $All=document.querySelectorAll(".query_All p");
console.log($All);
for(i=0;i<$All.length;i++){ // 0,1,2,3,4
    $All[i].style.color="red";
}
/* ---------------------------------------------------- */
// 간접 선택자(근거리 선택자)
var $child_01=document.querySelector(".style");
console.log($child_01);
var $parent_01=$child_01.parentNode;
console.log($parent_01);
$parent_01.style.background="#ff9900";
/* ---------------------------------------------------- */
var $parent_02=document.querySelector(".child_selecter");
console.log($parent_02);
var $child_02=$parent_02.childNodes;
console.log($child_02);
// NodeList(9) [text, li, text, li, text, li, text, li, text]
$child_02[5].style.fontWeight="bold";
/* ---------------------------------------------------- */
var $parent_03=document.querySelector(".children_selecter");
var $children=$parent_03.children;
console.log($children);
// HTMLCollection(4) [li, li, li, li]
$children[1].style.background="#ffaaff";

document.querySelector(".children_selecter").children[2].style.background="#ffffaa";
// 이와 같이 쓰게되면 메모리 부족문제가 생길 수 있으므로 $children처럼 하나의 변수로 묶어 입력하는 것이 효율적이다
/* ---------------------------------------------------- */
document.querySelector(".kids").closest("ul").style.background="#aaaaff";
/* ---------------------------------------------------- */
var $group_child=document.querySelector(".child_group");
var $f_child=$group_child.firstChild;
console.log($f_child); // #text
var $f_child=$group_child.firstChild.nextSibling;
console.log($f_child); // <p>첫째</p>
var $l_child=$group_child.lastChild;
console.log($l_child); // #text
var $l_child=$group_child.lastChild.previousSibling;
console.log($l_child); // <p>셋째</p>
var $second_sibling=$l_child.previousSibling.previousSibling;
console.log($second_sibling); // <p>둘째</p>
/* ---------------------------------------------------- */
var $txt_01=document.getElementById("txt");
console.log($txt_01);
// 특정 아이디를 지목하여 갖고 온다(상대적인 관점에서 처리속도가 빠름)

var $txt_02=document.querySelector("#txt");
console.log($txt_02);
// 문서의 전체로부터 특정 아이디를 찾아서 가져온다