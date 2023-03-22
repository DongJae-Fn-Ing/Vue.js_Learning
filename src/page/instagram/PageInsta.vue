<template>
  <div class="headers">
    <ul class="header-button-left">
      <li><button type="button">Cancel</button></li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1">
        <button @click="nextPage" type="button">Next</button>
      </li>
      <li v-if="step == 2">
        <button @click="publish" type="button">발행</button>
      </li>
    </ul>
    <img src="../../assets/logo.png" class="logo" />
  </div>

  <Container
    @inputData="myWrite = $event"
    :instaData="instaData"
    :step="step"
    :uploadFile="uploadFile"
    :filterName="filterName"
  />
  <h4>{{ $store.state.names }}</h4>
  <p>{{ $store.state.age }}</p>
  <button type="button" @click="$store.commit('nameChange')">
    스테이트 변경 버튼
  </button>
  <button type="button" @click="$store.commit('ageAdd')">나이 감소</button>
  <!--   데이터를 직접 바꾸지 말고 store.js에게 바꿔 달라고 부탁해라
  스텝
  1.sotre.js에서 state 수정 방법 정의
  2.수정하고 싶으면 store.js에게 부탁 
  $store.commit('nameChange', 데이터) 부탁하는 함수
  mutations 실행하는 함수 commit
  vuex의 장점은 state 변경은 내가 정의한 store.js만 합니다
  이제 state가 이상하면 store.js만 뒤져도 될듯
  -->
  <button @click="$store.dispatch('getData')">테스트</button>
  <!--   dispatch는 actions -->
  <button @click="more" type="button" class="more-btn">더보기 버튼</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <!-- 파일 업로드시 코드 실행 -->
      <!-- multiple 속성 넣으면 여러개 다루는 거 가능 -->
      <!-- accept="image/*"만 보이기 -->
      <!-- 그냥 확장자 검사해라 자바스크립트로 -->
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "@/components/InstaComponents/Container";
import InstaDummyData from "../../assets/instaData";
import axios from "axios";
/* axios임포트 후 */
import { mapMutations, mapState } from "vuex";
/* mapState 함수 사용하고 싶으면 호출 */

export default {
  name: "PageInsta",

  data() {
    return {
      instaData: InstaDummyData,
      step: 3,
      count: 0,
      uploadFile: ``,
      myWrite: "",
      filterName: "",
    };
  },
  components: {
    Container,
  },
  methods: {
    more() {
      axios
        .get("https://codingapple1.github.io/vue/more" + this.count + ".json")
        .then((/* 가져온 데이터 */ dummy) => {
          /* 요청성공시 실행할 코드 */
          console.log(dummy);
          this.instaData.push(dummy.data);
          this.count++;
          /* push함수는 배열의 마지막에 ()값을 추가해준다. */
        });

      /* axios.get 추가 후 콜백함수  */

      /* axios추가 사용법 */
      /* axios.post('url',{전송할 데이터}).then() 성공할 경우
    axios.post('url',{전송할 데이터}).catch() 실패할 경우
    
    내가 원하는 url로 전송할때*/
    },

    upload(e) {
      let file = e.target.files;
      console.log(URL.createObjectURL(file[0]));
      this.uploadFile = URL.createObjectURL(file[0]);
      this.step = 1;
    },
    nextPage() {
      this.step++;
    },
    publish() {
      let myData = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadFile,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.myWrite,
        filter: this.filterName,
      };
      this.instaData.unshift(myData);
      /*       데이터 앞에 내가 입력한 값을 밀어 넣는 기능 
      unshuft */
      this.step = 0;
    },
    now() {
      return new Date();
      /* 현재시간 출력 */
    },

    /* vuex mutations 함수를 한번에 꺼내다 쓰고 싶으면 methods 안에 */
    ...mapMutations(["함수명", "test"]),
  },
  computed: {
    now2() {
      return new Date();
      /* 현재시간 출력 */

      /*       그냥 state 하나 꺼내쓸 때도
      computed 안에 사용하면 편할 수도 */
    },

    /* store.js의 name을 쓰고 싶으면 */
    name() {
      return this.$store.state.name;
      /* computed 안에 함수는 항상 return을 써야함 */
    },
    ...mapState(["names", "age", "likes"]),
    ...mapState({ 작명: "names" }),
    /* store에 있는 state를 편하게 끌어다 쓸 수 있다 */
    /* 작명도 가능 */
  },

  /* methods랑 computed 차이 */
  /* methods 안에 있는 함수는 사용할 때 즉 호출할 때 마다 사용 */
  /*   computed 안에 있는 함수는 사용해도 실행되지 않습니다.
  뷰파일이 로드 및 라우팅 했을 때 사용  처음 실행한 값 간직함 즉 계산 결과 저장하는 곳
  computed의 안에 함수 () 금지
  */
  mounted() {
    this.emitter.on("filterClassData", (a) => {
      console.log(a);
      this.filterName = a;
    });
  },
};
</script>

<style>
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.headers {
  width: 500px;
  height: 40px;
  background-color: darkgray;
  padding-bottom: 8px;
  margin: 0 auto;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}

.more-btn {
  width: 500px;
  height: 40px;
  background-color: #dfdfdf;
  display: block;
  margin: 10px auto;
}
</style>


/* 2023.03.20 학습 */
/* ajax 서버 통신 */
/* 서버란 데이터를 요청하면 데이터를 보내주는 곳 */

/* 서버란 데이터달라고 하면 데이터보내주는 프로그램
 막무가내로 데이터를 달라고 하면 불가하고
 1. 어떤 데이터인지? (데이터의 url)
 2. 어떤 방법으로 요청할건지? 잘 기재해야 데이터줌 (get인지 post)
 웹툰을 본다치먄
 데이터의 url 기재해야함 comic.naver.com
 get과 post 둘 중하나 선택해야함 get데이터를 읽을 때 post 데이터를 보낼때

get 요청 
브라우저 url 치는 곳이 겟 요청하는 곳
데이터를 서버에서 가져올 때

post 요청
form 태그에 메소트 속성 post action에는 링크 입력해주고
유저가 서버에 데이터 보내려면 거의 post요청 필요 댓글 블로그 글쓰기
서버로 데이터를 보낼때

겟 포스트 단점 그냥 쓰면 페이지가 새로고침이 된다.
이러면 속도가 느린데 단점을 보완한게 ajax 
ajax란 새로고침없이 get,post 요청하는 기능 */

/* ajax 요청 하려면
1.axios 라이브러리 사용
2.기본 fetch 함수 쓰든가(매우 최신 브라우저만 사용) */

/* axios 쓰는 법 */
/* 스크립트 영역 참고 */


/* 탭을 만들어 보기 */

/* 2023.03.21 이미지 업로드 */ 
/* FileReader() 쓰거나 
URL.createObjectURL()

FileReader() 파일을 글자로 변환해줌
URL.createObjectURL() 이미지의 가상 url을 생성해줌
이 url을 이미지에 삽입하면 된다.

URL.createObjectURL() 한걸 변수에 담고
콘솔을 찍어보면 blob이라는 것이 나오는데 컴퓨터 안에 있는 모든 파일들은
0과 1로 이루어진 바이너리 데이터라고 하는데
바이너리 데이터를 다룰 때 blob이라는 object에 담아서 다룸 */

/* 글 발행기능 */

/* 상위 상위 컴포넌트 즉 먼 컴포넌트에 값을 전달할 때 mitt 라이브러리 */

/* vuex 모든 컴포넌트들이 데이터를 공유할 수 있는 하나 js 파일 */
/* 큰 프로젝트에서 써라 작은 프로젝트에서 쓰지 말 것*/
/* 셋팅법
자바스크립트 파일을 만들고 main.js에서 셋팅 */

/* 규칙 vuex 국룰 state 수정하고 싶으면
1. 미리 store.js에 수정 방법을 정의해두고
2. 그 방법을 컴포넌트에서 소환해서 수정해야함 */

/* 2023.03.22 pwa */
/* 웹페이지를 모바일 페이지로 보여지기 */
/* vue add pwa로 설치 dist 파일 확인 */


/* 버그확인 */
/* https://chrome.google.com/webstore/category/extensions 여기 들어가서 Vue.js devtools 라고 찾아서 설치합니다. */


/* Composition API 사용법 */
/* 지금까지 Options API방식으로 작성 */