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
/* ---------------------------------------------------- */
var $attr=document.querySelector("#dom_attr");
var $attrSrc=$attr.src;
// $attr.src : <img id="dom_attr" src="img/ace.png" alt="카드 앞면">의 태그 중에서 src 속성의 속성값을 가져오겠다는 항목
console.log($attrSrc); // 소스의 절대경로

var $getAttrSrc=$attr.getAttribute("src");
console.log($getAttrSrc); // 소스의 상대경로; 내부의 속성값
var $getAttrAlt=$attr.getAttribute("alt");
console.log($getAttrAlt); // 소스의 대체 텍스트; 내부의 속성값


// 속성의 변경
$attr.setAttribute("src", "img/card.png");
// setAttribute("변경할 속성명", "변경되어진 속성값")
$attr.setAttribute("alt", "카드 뒷면");

// 속성의 생성 : 원본 HTML 파일 상에는 존재하지 않지만 추가로 속성과 속성값을 생성
function card_move(){
    $attr.setAttribute("class", "active");
}

$attr.setAttribute("ajw", "현혜원");

// 속성의 삭제 : 기존에 존재하던 속성의 속성 값을 삭제
$attr.setAttribute("alt", "");
function card_origin(){
    $attr.setAttribute("class", "");
}
/* ---------------------------------------------------- */
/* 
var $innerHTML=document.getElementById("more").innerHTML;
console.log($innerHTML); // .more의 하위 태그
document.getElementById("more").innerHTML="<span>감추기</span>";
 */
var $html_a=document.getElementById("more");
console.log($html_a);
var $innerHTML=$html_a.innerHTML; // 선택자를 기준으로 하위요소를 저장
console.log($innerHTML);
$html_a.innerHTML="<i>하위요소 변경</i>"; // 선택자를 기준으로 하위요소 변경
/* 
변수값을 재선언한 것 뿐 위와 같이 적어야 하위요소가 변경된다
$innerHTML="<i>하위요소 변경</i>"
console.log($innerHTML); 
*/
/* ---------------------------------------------------- */
var $text=document.getElementsByClassName("trip_fav")[0];
console.log($text);
var $innerText=$text.innerText;
// 선택자를 기준으로 하위에 존재하는 모든 텍스트를 저장
console.log($innerText);

$text.innerText="이번 휴가 <i>부산</i>";
// 현재 선택자가 담고 있는 내부의 텍스트를 새로운 텍스트로 교체(대입)
/* ---------------------------------------------------- */
var $name=document.querySelector("#member_name");
$name.setAttribute("value", "강하늘");
$name.setAttribute("readonly", "readonly"); // 두번째 인용구 안에 생략 가능하나 문법상 좋지 않음
$name.setAttribute("disabled", "disabled");

var $chk_box=document.querySelector(".agree input");
$chk_box.setAttribute("checked", "checked");
/* ---------------------------------------------------- */
var $value=document.querySelector(".local_address select").value;
console.log($value); // se(selected 속성을 가지고 있는 option 태그의 value 속성값을 불러온다)