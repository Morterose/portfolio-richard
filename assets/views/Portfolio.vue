<template>
  <div class="main">
    <router-view :key="$route.path"></router-view> <!-- Обновленный router-view --><!-- <router-view :key="$route.path" :current-page="currentPage"></router-view> -->
    <div class="footer">
      <Menu class="menu1" :links="links" />
      <PageSwitcher 
        class="page-switcher" 
        :totalPages="2" 
        :currentPage="currentPage"
        @updatePage="updatePage" 
      />
      <HomeButton class="homebutton" link="/" />
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import HomeButton from '../components/HomeButton.vue';
import PageSwitcher from '../components/PageSwitcher.vue';

export default {
  name: 'Portfolio',
  components: {
    Menu,
    PageSwitcher,
    HomeButton
  },
  data() {
    return {
      links: [
        { path: "/portfolio/ya-pluskids", label: "Плюс" },
        { path: "/portfolio/ya-video", label: "Видео" },
        { path: "/portfolio/ya-search", label: "Поиск" },
        { path: "/portfolio/ya-buisness", label: "Бизнес" },
      ],
      currentPage: parseInt(this.$route.query.page) || 1
    };
  },
  watch: {
    '$route.query.page'(newPage) {
      this.currentPage = parseInt(newPage) || 1;
    }
  },
  methods: {
    updatePage(newPage) {
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, page: newPage } });
    }
  }
};
</script>

<style scoped>
.main {
  --font-size: 1.322vw;

  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.router-view {
  flex: 1;
  overflow-y: visible;
}

.footer {
  position: relative;
  bottom: 0;
  height: 5.2vh;
  padding: 3.66vh 2.64vw 4.07vh 2.64vw;
  width: 94.72vw;
  display: grid;
  grid-template-columns: repeat(4, 22.55vw);
  column-gap: 24px;
}
.menu1 {
  font-size: var(--font-size);
  width: 27.38vw;
  min-width: 414px;
  height: 5.2vh;
  min-height: 52px; 
  grid-column: 1/3;
}
.page-switcher {
  font-size: var(--font-size);
  height: 5.2vh;
  min-height: 52px;
  width: 10.58vw;
  max-width: 160px;
  margin-right: 37.09vw; /* 32.01vw */
  grid-column: 3/4;
}
.homebutton {
  font-size: var(--font-size);
  width: 60px;
  height: 5.2vh;
  min-height: 52px;
  grid-column: 4/5;
  justify-self: end;
}
</style>