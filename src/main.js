import { createApp } from "vue";
import App from "./App.vue";
import routerTest from "./routes/router";
import store from "./store";
import mitt from "mitt";
import './registerServiceWorker'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

/* mitt를 프로젝트 전체에서 사용하게 함
mitt 라이브러리 셋팅 */

/* app.config.globalProperties  글로벌한 변수 보관함
모든 컴포넌트들이 사용하고 싶은 변수들을 여기에 추가

app.config.globalProperties.변수명 = 변수명

사용하는 곳에서 this.변수명
*/
/* 응용을 하자면 모든 컴포넌트에서 사용하거나 쓰는 변수나 라이브 러리를
이런식으로 추가해서 써라 */

/* vuex 설치법 */

app.use(routerTest).use(store).mount("#app");
