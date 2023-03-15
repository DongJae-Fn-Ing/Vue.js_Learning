<template>
  <h1 class="title">vue.js</h1>

  <!-- npm run serve 스타트 -->
  <!-- 데이터 바인딩 시작 -->
  <!-- 데이터 바인딩을 하는 이유 html에 하드코딩해놓으면 나중에 변경하기 어려움 -->
  <!-- vue의 실시간 자동 렌더링 쓰려고 -->

  <ul class="menu">
    <li v-for="(item, i) in menus" :key="i">
      <button type="button">{{ item }}</button>
    </li>
  </ul>

  <div>
    <!--<h4 class="">{{products[0]}}</h4>  -->
    <!-- 클래스 및 스타일도 전부 바인딩 가능 -->
    <!-- 클래스나 스타일 같은 속성을 바인딩 하고 싶은 경우 속성 왼쪽에 : 사용 -->
    <!--  <p>{{ price1 }}만원</p>  -->
    <!-- 데이터 바인딩 방식 {{오브젝트 이름}} -->
    <!-- <button type="button" v-on:click="countUp">허위매물 신고</button> <span>신고수 : {{count}}</span> -->
  </div>

  <button type="button" @click="priceSort">가격낮은순 정렬 할꾸얌</button>
  <button type="button" @click="reSort">가격높은순 정렬 할꾸얌</button>
  <button type="button" @click="abcSort">가나다순 정렬이다 멍청아</button>
  <button type="button" @click="backSort">되돌리기</button>
  <div class="content">
    <ul class="list">
      <CardItem
        @openModal="
          modal = true;
          click = $event;
        "
        v-for="(a, i) in oneroom"
        :key="i"
        :dataFile="oneroom[i]"
      />
    </ul>
  </div>

  <ComOne v-if="showCome === true" />

  <!-- 사용 -->
  <!--   <div class="start" :class="{ on: modal }">
    <Modal
      :dataFile="oneroom"
      :click="click"
      :modal="modal"
      @openModal="
        modal = false;
        click = $event;
      "
    />
  </div> -->
  <Transition name="fade">
    <Modal
      :dataFile="oneroom"
      :click="click"
      :modal="modal"
      @openModal="
        modal = false;
        click = $event;
      "
    />
  </Transition>
</template>

<script>
import "../public/global.css";
import dummy from "./assets/dummy";
/* 자유롭게 작명 */
/* 이런식으로 import */
import CardItem from "./components/CardItem";
import ComOne from "./components/comOne";
import Modal from "./components/Modal";

export default {
  name: "App",
  data() {
    return {
      showCome: true,
      people: { name: "kar", age: "29" },
      click: 0,
      oneroom: dummy,
      oneroom2: [...dummy],
      modal: false,
      menus: ["home", "shop", "about"],
      count: [0, 0, 0, 0, 0, 0],
    };
  },
  /* 데이터 보관함 data()이런식으로 만들어라 */
  /* 데이터는 객체 자료로 저장해둬라 */

  methods: {
    countUp(i) {
      this.count[i]++;
      /* 함수안에서 데이터를 쓸 땐 this.데이터명 이런식으로 써라 */
    },
    priceSort() {
      this.oneroom.sort(function (a, b) {
        return a.price - b.price;
        /* 이 부분이 음수면 왼쪽으로! 마이너스가 나오면 왼쪽으로 */
        /* a를 제일 작은수 b 제일큰수 */
      });
    },
    reSort() {
      this.oneroom.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    backSort() {
      this.oneroom = [...this.oneroom2];
    },
    abcSort() {
      this.oneroom.sort((a, b) => {
        return a.title < b.title ? -1 : a.title == b.title ? 0 : 1;
      });
    },
  },

  /* 함수 만들기 methods 쓰고 만들기 */

  components: {
    /* comOne : comOne, */
    /* 이런식으로 등록 */

    /* 양 옆에 네이밍이 같으면 */
    /* 아래처럼 축약 가능 */
    ComOne,
    Modal: Modal,
    CardItem,
  },
  mounted() {
    /*     setTimeout(() => {
      this.showCome = false;
    }, 2000); */
  },
  /* 라이프 사이클 훅쓰는법 */
};
</script>

<style>
/* 임시 타이틀 */

.title {
  font-size: 40px;
  text-align: center;
  display: block;
  margin: 100px 0;
}

/* 임시 메뉴 */

.menu {
  height: 60px;
  display: flex;
  list-style: none;
}

.menu li {
  width: 33.3333%;
}

.menu li button {
  width: 100%;
  height: 100%;
}

/* 임시 콘텐츠 구역 */

.content {
  margin: 20px 0 20px 0;
}

.content .list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.content .list li {
  width: 300px;
  height: 400px;
  background: goldenrod;
  text-align: center;
  padding: 10px;
}

.list li img {
  width: 100%;
}

.list li .box-title {
  cursor: pointer;
  margin: 10px;
  font-weight: bold;
}

.list li .box-title:hover {
  text-decoration: underline;
}

.list li p {
  display: block;
  margin: 5px 0;
}

.start {
  transition: all 1s;
  opacity: 0;
}

.on {
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>

/* 뷰 반복문 */ 
/* v-for 문법 */ /*
<li v-for="??(작명) in ??(반복횟수)" :key="작명했던거"><button type="button">Home</button></li>
*/ 

/* 꼭 키 값을 입력*/ /* 반복횟수에 데이터를 삽입 가능하다 */ /*
<li
  v-for="(item, i) in menus"
  :key="item"
><button type="button">{{item}}</button></li>
*/ 

/* 데이터를 삽입하면 데이터 수 만큼 반복 */ 

/* 그리고 키값을 item에 입력을
하면 바인딩 가능 */ 
/* 개념을 다시 정리 반복횟수에 데이터를 삽입하면 작명 했던
변수는 데이터 안의 자료가 된다. */ 

/* 키의 용도는 반복으로 생성한 요소들이 구분하기 위한 속성 */ 

/* v-for="(item,i) 이런식으로 두개 입력도 가능 여기서 i는 1씩 증가하는 값*/ 
/* 이벤트 핸들러 */ 
/* 클릭 이벤트 */ 

/*
<button type="button" v-on:click="자바스크립트 입력하세요"
>허위매물 신고</button>
<span>신고수 : 0</span>
*/ 


/*
<button type="button" @:click="">허위매물 신고</button>
<span>신고수 : 0</span>
*/ 


/* 이런식도 가능 */ 

/*
<button type="button" v-on:click="count++">허위매물 신고</button>
<span>신고수 : {{count}}</span>
*/
 
 /* 이벤트명 정리 */ 
 
 /* v-on:click @:click v-on:mouseover @:mouseover 인풋일
경우 v-on:input @:input */
 
 /* 자바스크립트가 너무 길 경우 함수로 써라 */ 
 
 /*
data() 밑에 methods : 옵션 쓰고 함수명(){자바스크립트 작성} */ 
/* 함수안에서데이터를 쓸 땐 this.데이터명 이런식으로 써라 */ 

/* 문제풀이 완료 2023 03 08 */



/* 2023 03 09 */ 

/* 모달창 만들기 */ 
/* 개발팁 데이터부터 어떤식으로 만들지 생각*/
/* UI는 간단하게 생각해라 그냥 만들고 숨기고 클릭하면 나타난다. */ 

/* 동적인 UI만드는 법 */ 
/* 1. UI의 현재 상태를 데이터로 저장해둠 - 그 UI가 지금 어떤식으로 보여야함? */ 

/* 2. 데이터에 따라 UI가 어떻게 보일지 작성 */ 

/* v-if 문법(조건식) v-if="1 == 1" 안에 있는 조건이 참일 경우 실행해준다 */ 

/* import /export 문법 다른 파일에서 현재 파일에 있는 변수를 사용하고 싶을 때 사용 보통 데이터가 길 경우 따로 파일을 생성해준다. 
var aaa = 10; exprot default aaa aaa란변수를 종결해준다. 
맨 끝에서 aaa 뱉어진다. 맨 마지막에 작성 dummy.js 마지막에

export default 변수명; 
export {변수명1,변수명2}; 
아무거나 선택 그리고 다른 파일에서 import를 script에서 해준다. 
import 변수명 from './assets/dummy.js';
import {변수명2}from './assets/dummy.js'; 
import 해서 객체 안에 삽입이 가능하다.
*/ 

/* 모달창 내에 상세페이지 만들기 */ 
/* 저장소를 만들고 즉 상태를 저장할 곳을
만들고 리액트로 치면 useState
 v-on:click="modal = true, click = i" 두개의 이벤트
삽입가능 클릭을 하면 변하는 값을 할당해준다. */ 
/* 조건식 추가 */ 
/* v-else - 위에게 참이 아니면 v-else를 실행한다. v-else - v-if가 참이 아니면 v-else를
실행한다. if문을 연달아 사용하고 싶은 경우 v-else-if 
ex/ v-if="1 == 2" 땡
v-else-if="3 == 3" 굿 */

 /* 컴포넌트 문법 */ /* 긴 html을 한단어로 줄이는 것 */
/* 왜써? */ 
/* 코드의 가독성 */ 
/* 재사용 쉬움 */ 
/* 초보 특 - 온갖거 다 컴포넌트로 만들어둠 그러지말고 반복적으로 출현할 부분만 컴포넌트화 해라 */ 
/*한단어 축약한 컴포넌트 쓰는 법 1.vue 파일 import하고 2.등록하고 3.쓰셈 */ 
/* 1- 스크립트에 import 
   2- components 오브젝트에 등록 
   3- 써라 */ 
   
   
/* props 문법 */ /*
데이터는 한곳에 밀어넣고 가져다 쓰는 형식 */ 

/* ex app.vue 부모 컴포넌트 modal.vue 자식 컴포넌트 자식컴포넌트가 부모가 가지고 있는 데이터를 쓰려면 props로 전송 
1. 데이터를 전송 v-bind or : */ 
/* : 용도 props 및 html 태그 속성 바인딩 용 */ 

/* 
2. 등록 
3. 사용 <Modal :title="oneroom[click].title" />
*/

 /* props는 재할당 불가 */ /
 * 학습완료 2023 03 09 */ 
 /* list 하위 li들 card 컴포넌트로 만들것 */

/* props 보낼 때 다양한 자료형 입력가능 배열, 객체 등등
그냥 문자 같은거 보낼땐
v-bind & : 없이 보낼수있다.
숫자형도 이런식으로 보내면 문자 취급 

오브젝트 안에 내용을 보내려면
ex : people: { name: "kar", age: "29" },
<com :이름="people.name" :나이="people.age" /> 로 써야하지만
<com v-bind="people" />로 한번에 보낼 수 있다. 그다지 비추 */


/* 
 2023 03 13
props는 수정을 하면 불가
read oniy
만약 부모에 있는 값을 수정하고 싶다?
custom event를 사용하면 됩니다.
여기서 의문 그러면 컴포넌트에 클릭이벤트를 달면 되는 거 아니야?
??? 하지만 여기서 이벤트 버블링이 발생

자식이 부모에게 일단 메시지를 보내는 형식이라 생각을 해라
자식 컴포넌트 이벤가 발생하는 부분에
$emit() 추가
$ == 뷰에 내장된 특별한 함수 

부모에게 메세지 보낼 때
$emit("작명",데이터)

그리고 컴포넌트가 호출한 곳을 가서 작명한 걸을 html 형식으로 써준다.
      <CardItem
        @openModal="modal = true"
        v-for="(a, i) in oneroom"
        :key="i"
        :dataFile="oneroom[i]"
      />
 

컴포넌트 데이터를 쓰고 싶을 때는 
  <h4 class="box-title" v-on:click="$emit('openModal', i)">
  </h4>
  이벤트가 발생하는 곳에 id값이나 키값 등을 추가하고

        <CardItem
        @openModal="(modal = true), (click = $event)"
        v-for="(a, i) in oneroom"
        :key="i"
        :dataFile="oneroom[i]"
      />
      컴포넌트 안 작명한 속성 안에
      pros값 = $event로 입력을 한다.

      만약에 $emit 같은 것을 함수안에 쓰고 싶으면
      methods에 쓰고
      함수() 작명하고
      안에 써서 사용해라

  methods: {
    name(){
      this.$emit('openModal', this.i)
    }
  },
  여기서도 this를 써라
  외부 데이터를 참조할 때 무조건

  모달창 닫기 버튼 만들기  */




/* 20230314 학습 */
/*       <input
        v-on:input="mon = $event.target.value"
        type="text"
        name=""
        id=""
        class="input"
      />
 $event 이게 자바스크립트 파라미터랑 같음 */
/* 
 v-on:input="mon = $event.target.value"이거의 축약 버전
 v-model="" 문법 여기에 입력한 데이터를 저장해주세요
       
       <input
        v-model="mon"
        type="text"
        name=""
        id=""
        class="input"
      />

      1. v-model 인풋의 입력한 값을 스테이트 부분에 삽입해준다.
      2. textarea.select 등등 모든 것 가능
      3. 스테이트의 초기값이 중요하다  초기값 입력한 것에 따라 인식을 하는게 다르다 예를 들어 처음 스테이트에 문자면 문자 숫자면 숫자
      4. input에 입력한 것은 전부 문자형 자료형
      그래서 무조건 입력 받고 싶은 것이 숫자로 만들고 싶으면
      <input
        v-model.number="mon"
        type="text"
        name=""
        id=""
        class="input"
      />
/*       v-model 뒤에 .number를 써라 그냥 숫자로 바꿔주는 것 문자 입력을 막을 수 없다 */

      인풋에 경고문을 띄우싶다
      -watcher : 데이터에 이상한 거 들어올 때 이걸로 방지한다.
      컴포넌트 methods등을 입력하는 곳에
      watch를 입력한다. 그리고 감시할 스테이트명으로 함수를 만든다.
        watch: {
           mon(a){
            여기서 a는 사용자가 입력한 값
          }
      이렇게 */
/*       다시 정리하면 
/*       데이터를 감시하려면
      whtach: {감시할데이터(){}} */
      이렇게 만들면 mon라는 스테이트의 값이 변화할 때마다 코드가 watch에 코드가 
      실행된다. */
/* 

    watch: {
    mon(a,b){
     if(a >= 13){
        alert("멍청아 값이 너무커 13이상 입력하지마");
      }
    }
  },
  여기서 b는 변경전 데이터 */

 /*  숙제
  문자를 입력하면 경고창 뛰우고 값을 1로 되돌리기  해결*/


/*2023.03.15 모달창 애니메이션 구현 */
/* 애니메이션 만들 때 굳이 vue 문법 쓸 필요 없다. 와이 css가 있잖아!!! */
/* 클래스명을 조건부로 넣으려면 */
/* :class = { 클래스명 : 조건 } */ 


/* vue에서 <Transition name="작명"></Transition> 쉽게 애니메이션을 줄 수 있음
특히 v-if나 v-else등으로 등장하는 것을 다루기 좋다
<Transition name="작명"></Transition> 이렇게 작명을 하고
css 다루는 곳으로 가서
.fade-enter-from{}
.fade-enter-active{}
.fade-enter-to{} 
로 작명


클래스명 작명법
아래만 작성하면 등장만 애니메이션이 작동한다
.작명-enter-from{시작}
.작명-enter-active{트랜지션}
.작명-enter-to{끝} 

아래처럼 작성하면 퇴장 애니메이션이 구성 가능
꺼꾸로 
.작명-leave-from{시작}
.작명-leave-active{트랜지션}
.작명-leave-to{끝} 
 */

/*  상품정렬기능과 데이터 원본 보존 */
/* sort()함수는 정렬 */
/* 
  this.oneroom.sort(function (a, b) {
    return a.price - b.price;
    이 부분이 음수면 왼쪽으로! 마이너스가 나오면 왼쪽으로 
    a를 제일 작은수 b 제일큰수 
  }); */
/* 
   sort 함수는 원본 데이터를 변형 시켜버림
  요즘은 맵 필터 사용 */
  /* 그래서 data에 원본용 스테이트 삽입하는 곳을 넣는다. */
/*   그러나 별개의 데이터를 사용하는 것이 아닌 
/*   같은 데이터를 끌어다 쓰는 개념이라 정렬이 불가
  그래서 스테이트 놓는 곳에
  [...dummy]로 넣는다
  [...]의 뜻은 객체나 배열의 사본을 만들어 달라 */

    backSort() {
      this.oneroom = this.oneroom2;
      이 함수 계속 클릭하면 어느 순간 작동안함
    },

        backSort() {
      this.oneroom = [...this.oneroom2];
      이렇게 어레이의 복사본의
      개별 복사본을 만들어서 넣는 개념이라 제대로 작동
    }, */

/*  
    LifeCycle 라이프사이클 생명주기
    이거 왜 배움
    컴포넌트는 웹페이지에 표시되기까지 일련의 step을 거침
    그 step을 라이프사이클이라 한다
    크게 3가지 step이 있는데

    create 단계 > mount 단계 > 컴포넌트 생성 > update 단계 > unmount 단계

    create 단계 : 데이터만 존재하는 단계
    mount 단계 : template 사이에 있던 걸 실제 html로 바꿔줌
    컴포넌트 생성 : html에 장착 
    update 단계 : 컴포넌트 안의 데이터가 변하면 재랜더링
    unmount 단계 : 컴포넌트 삭제되면


    위 단계 중간중간 hook을 걸 수 있다
    hook 통해 원하는 코드를 실행할 수 있다.

      */
      /* 사용법
      스크립트란에   mounted() {}, 써라 */
/*       그 외에도 여러 훅이 있는데
      beforeCreate(){},created() {}등등 검색해서써라 */
      

      /* 항상 ui를 만들기 전에 현재 상태를 스테이트에 저장을 해라 */
/*       this를 쓸 때는 화살표 함수를 써라 */
/* 훅은 여러가지 컴포넌트 안에서 쓸 수 있다 */
/* 서버의 데이터를 가져올 때고 라이프 사이클 훅 안에서 짠다 */
/* 보통 created 아니면 mounted 안에 작성 */

숙제
/* 이 페이지 마운트시 30% 할인 숫자가 작아지도록 */
/* 
모달창 내에 input이 있는데 여기에 2를 기입했을 때 알림창 alert() 을 띄우려면?

물론 watcher를 쓰면 되는데 이거 말고 오늘 배운 lifecycle hook을 이용합시다. 

힌트는 데이터가 변경되면 HTML (컴포넌트)가 재렌더링되는데 이걸 라이프사이클 용어로 update라고 합니다.  */