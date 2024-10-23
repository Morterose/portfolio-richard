<template>
  <section v-if="currentPage === 1" class="page">
    <div class="container-title">
      <div class="container-about">
        <div class="about">
          <div class="sec1">Продукт</div>
          <div class="sec2">Что делал</div>
          <div class="sec3">В итоге</div>
          <div class="sec1-descr">Плюс Детям</div>
          <div class="sec2-descr">Занимался привлечением новых опционеров, поддержкой маркетинговых коммуникаций и детских приложений</div>
          <div class="sec3-descr">Привлекали много триальщиков, при этом мало кто пользовался бенефитами. Проблема в продукте и позиционировании.</div>
        </div>
      </div>
      <div class="example1">
        <img class="pic" src="../img/ya-plus-pics/1/image-602220.png" alt="">
      </div>
      <div class="example2">
        <img class="pic" src="../img/ya-plus-pics/1/image-602221.png" alt="">
      </div>
      <div class="example3">
        <img class="pic" src="../img/ya-plus-pics/1/image-602228.png" alt="">
      </div>
    </div>
  </section>
  <section v-else-if="currentPage === 2" class="page" id="hello">
    <div class="container">
      <div class="example4">
        <img class="pic" src="../img/ya-plus-pics/2/image-602223.png" alt="">
      </div>
      <div class="example5">
        <img class="pic" src="../img/ya-plus-pics/2/image-602225.png" alt="">
      </div>
      <div class="example6">
        <img class="pic" src="../img/ya-plus-pics/2/image-602224.png" alt="">
      </div>
      <div class="example7">
        <img class="pic-2" src="../img/ya-plus-pics/2/image-602226.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'YaPlus',
  props: {
    currentPage: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.page {
  --background-color: rgba(0, 0, 1);
  --text-color: rgb(255, 255, 255);
  --secondary-text-color: rgba(255, 255, 255, 0.32);
  --font-size: 1.322vw;
  --font-size-about: 1.653vw;
  --radius: 32px;
  --container-bg: rgb(40, 35, 44);

  font-size: var(--font-size);
  height: 82.89vh;
  overflow: hidden;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 2.66vh 2.64vw 0 2.64vw;
  box-sizing: border-box; /* Для включения padding в общий размер элемента */
  /* padding: 4.07vh 2.64vw 3.66vh 2.64vw; */
}

.container-title {
  /* max-width: 94.7vw; */
  max-width: 100%;
  max-height: 100%;
  display:grid;
  grid-template:  "container-about container-about example2 example2"
                  "container-about container-about example2 example2"
                  "container-about container-about example2 example2"
                  "container-about container-about example2 example2"
                  "example1 example1 example2 example2"
                  "example1 example1 example3 example3"
                  "example1 example1 example3 example3"
                  "example1 example1 example3 example3"
                  "example1 example1 example3 example3"
                  "example1 example1 example3 example3";
  column-gap: 24px;
  row-gap: 24px;
  /* grid-template-columns: repeat(4, minmax(0, 1fr)); */
  grid-template-columns: repeat(4 , 22.55vw);
  grid-template-rows: repeat(10, 6.1099vh);
}

.container-title * {
  border-radius: var(--radius);
}
.container-about {
  grid-area: container-about; 
  height: 31.7vh;
  background-color: var(--background-color);
}
.about {
  height: 80%;
  margin: 32px;
  display: grid;
  grid-template-columns: 17.045% auto; 
  /* grid-template-rows: min-content min-content min-content;  */
  grid-template-rows: 9.09% 27.2727% 27.2727%;
  gap: 17.7% 24px; 
  grid-template-areas: 
    "sec1 sec1-descr"
    "sec2 sec2-descr"
    "sec3 sec3-descr"; 
  text-align: left;
  align-items: center;
  place-content: stretch;
}

.sec1 { grid-area: sec1; }
.sec1-descr { grid-area: sec1-descr; }
.sec2 { grid-area: sec2; }
.sec2-descr { grid-area: sec2-descr; }
.sec3 { grid-area: sec3; }
.sec3-descr { grid-area: sec3-descr; }

.sec1, .sec2, .sec3 {
  color: var(--secondary-text-color);
}

.sec1-descr, .sec2-descr, .sec3-descr {
  color: var(--text-color);
}

.example1 { 
  grid-area: example1; 
  height: 48.75vh;
}
.example2 { 
  grid-area: example2;
  height: 40.22vh;
 }
.example3 { 
  grid-area: example3;
  height: 40.22vh; 
}

.example1, .example2, .example3 {
  display: flex;
  align-items: center; 
  justify-content:center; 
  overflow: auto;
  background-color: var(--container-bg);
  /* width: 100%;
  height: 100%; */
}

.pic {
  width: auto;
  height: auto;
  min-width: 704px;
  max-width: 100%;
  min-height: 395px;
  max-height: 100%;
  object-fit: fill; 
  object-position: center; 
}

.pic-2{
  width: auto;
  height: auto;
  min-width: 704px;
  max-width: 100%;
  min-height: 395px;
  max-height: 100%;
  object-fit: contain; 
  object-position: center; 
}

.container {
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr;
  gap: 24px;
  height: 100%;
  width: 100%;
}

.example4{
  grid-row: 1/3;
  grid-column: 1/3;
  height: 40.22vh;
}

.example5{
  grid-row:3/5;
  grid-column: 1/3;
  height: 40.22vh;
}

.example6{
  grid-row: 1/3;
  grid-column: 3/5;
  height: 40.22vh;
}

.example7{
  grid-row: 3/5;
  grid-column: 3/5;
  height: 40.22vh;
}

.example4,.example5,.example6{
  border-radius: var(--radius);
  background-color: var(--container-bg);
  display: flex;
  align-items: center; 
  justify-content:center; 
  overflow: auto;
}

.example7{
  border-radius: var(--radius);
  background-color: #EEEEF2;
  display: flex;
  align-items: center; 
  justify-content:center; 
  overflow: auto;
}
</style>