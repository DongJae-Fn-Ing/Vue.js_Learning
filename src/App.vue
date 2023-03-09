<template>
가동재의 vue.js npm run serve 스타트
<!-- 데이터 바인딩 시작 -->
<!-- 데이터 바인딩을 하는 이유 html에 하드코딩해놓으면 나중에 변경하기 어려움 -->
<!-- vue의 실시간 자동 렌더링 쓰려고 -->

<ul class="menu">
  <li v-for="(item,i) in menus" :key="i"><button type="button">{{item}}</button></li>
</ul>

 <div>
    <!-- 원룸샵 -->
    <!--<h4 class="">{{products[0]}}</h4>  -->
    <!-- 클래스 및 스타일도 전부 바인딩 가능 -->
    <!-- 클래스나 스타일 같은 속성을 바인딩 하고 싶은 경우 속성 왼쪽에 : 사용 -->
    <p>{{ price1 }}만원</p> 
    <!-- 데이터 바인딩 방식 {{오브젝트 이름}} -->
    <!-- <button type="button" v-on:click="countUp">허위매물 신고</button> <span>신고수 : {{count}}</span> -->
 </div> 

-----------------------------------------------------------------------------------------
  <div v-for="(a,i) in products" :key="i">
    <h4>{{products[i].name}}</h4>
    <p>{{a.money}}만원</p>
    <button type="button" v-on:click="countUp(i)">허위매물 신고</button> <span>신고수 : {{count[i]}}</span>
  </div>

  
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      price1: 80,
      price2: 20,
      price3: 70,
      products : [{name: "구로구 원룸", money: 70},{name: "가산동 원룸", money: 60}, {name: "은계동 원룸", money: 50}],
      menus :['home', 'shop','about'],
      count: [0,0,0],
    }
  },
  /* 데이터 보관함 data()이런식으로 만들어라 */
  /* 데이터는 객체 자료로 저장해둬라 */

  methods:{
    countUp(i){
      this.count[i]++;
      /* 함수안에서 데이터를 쓸 땐 this.데이터명 이런식으로 써라 */
    }
  },
  /* 함수 만들기 methods 쓰고 만들기 */

  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  height: 60px;
  display: flex;
  list-style: none;
}

.menu li{
  width: 33.3333%;
}

.menu li button{
  width: 100%;
  height: 100%;
}


</style>



/* 2일차 뷰 반복문 */
/* v-for 문법 */
/* <li v-for="??(작명) in ??(반복횟수)"  :key="작명했던거"><button type="button">Home</button></li> */
/* 꼭 키 값을 입력*/
/* 반복횟수에 데이터를 삽입 가능하다 */

/* <li v-for="(item,i) in menus" :key="item"><button type="button">{{item}}</button></li> */

/* 데이터를 삽입하면 데이터 수 만큼 반복 */
/* 그리고 키값을 item에 입력을 하면 바인딩 가능 */
/* 개념을 다시 정리 반복횟수에 데이터를 삽입하면 작명 했던 변수는 데이터 안의 자료가 된다. */
/* 키의 용도는 반복으로 생성한 요소들이 구분하기 위한 속성 */

/* v-for="(item,i)  이런식으로 두개 입력도 가능 여기서 i는 1씩 증가하는 값*/

/* 3일차 이벤트 핸들러 */
/* 클릭 이벤트 */
/* <button type="button" v-on:click="자바스크립트 입력하세요">허위매물 신고</button> <span>신고수 : 0</span> */


/* <button type="button" @:click="">허위매물 신고</button> <span>신고수 : 0</span> */
/* 이런식도 가능 */

/* <button type="button" v-on:click="count++">허위매물 신고</button> <span>신고수 : {{count}}</span> */

/* 이벤트명 정리 */
/* v-on:click  @:click
v-on:mouseover @:mouseover
인풋일 경우
v-on:input @:input */

/* 자바스크립트가 너무 길 경우 함수로 써라 */

/* data() 밑에 methods : 옵션 쓰고 함수명(){자바스크립트 작성} */
/* 함수안에서 데이터를 쓸 땐 this.데이터명 이런식으로 써라 */

/* 1~3일차 문제풀이 완료 2023 03 08 */