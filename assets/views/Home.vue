<template>
  <div class="main-page">
    <div class="header">
      <h1>Ричард Церр</h1>
    </div>

    <p class="description">
      Старший дизайнер продукта. Делаю интерфейсы для людей. Ценю в продуктах здравый смысл и пользу. Разговариваю с пользователями. Погружаюсь в проблемы. Понимаю разработчиков. Люблю задачи с высоким уровнем неопределенности. С рутиной смирился.
    </p>

    <div class="details">
      <IconButton text1=" Плюс Детям" text2="23-24" route="/portfolio/ya-plus">
        <template v-slot:icon> <!--не смог реализовать через props . посмотреть-->
          <PlusIconAnimate/>
        </template>
      </IconButton>
      <IconButton text1="Поиск" text2="21-22" route="/portfolio/ya-search">
        <template v-slot:icon> 
          <SearchIconAnimate/>
        </template>
      </IconButton>
      <IconButton text1="Бизнес" text2="21-22" route="/portfolio/ya-buisness">
        <template v-slot:icon> 
          <!---->
        </template>
      </IconButton>
      <IconButton text1="Видео" text2="22-23" route="/portfolio/ya-video">
        <template v-slot:icon> 
          <!---->
        </template>
      </IconButton>
    </div>

    <div class="footer">
      <span>Telegram</span>
      <span>Dribbble</span>
      <span>Behance</span>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import IconButton from '../components/IconButton.vue';
import plusKidsImg from '../img/plus-kids.png';
import videoImg from '../img/video.png';
import busImg from '../img/bus.png';
import SearchIconAnimate from '../components/SearchIconAnimate.vue';
import PlusIconAnimate from '../components/PlusIconAnimate.vue';

export default {
     components: {
       IconButton,
       PlusIconAnimate,
       SearchIconAnimate
      },
     data() {
       return {
         plusKidsImg,
         videoImg,
         busImg
       };
     }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

.main-page {
  color: #333;
  margin: 0 auto;
  text-align: center;
  flex: 1; /* Flex-grow для заполнения пространства */
}

.header {
  margin-top: 5.3%;
  max-width: 800px;
}

.header h1 {
  font-size: 20px;
  font-weight: 50;
  margin: 0;
  max-width: 800px;
}

.description {
  height: 170px;
  font-size: 24px;
  font-weight: 10;
  max-width: 729px;
  margin: 18.14% auto 6.1%;
  text-align: center;
  max-width: 800px;
}

.details {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 17.9%;
}

.footer {
  display: flex;
  justify-content: center;
  gap: 36px;
  font-size: 20px;
  margin-bottom: 5.3%;
}

.footer span {
  cursor: pointer;
}
</style>