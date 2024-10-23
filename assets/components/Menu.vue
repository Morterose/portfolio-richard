<template>
  <nav class="menu">
    <router-link 
      v-for="(link, index) in links" 
      :key="index" 
      :to="link.path" 
      class="menu-item" 
      :class="{ active: isActiveRoute(link.path) }" 
      @click.native="setActive(index)">
        {{ link.label }}
    </router-link>
    <div class="active-background" ref="activeBackground"></div>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(this.updateActiveBackground, 50);
    });
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        setTimeout(this.updateActiveBackground, 100);
      });
    }
  },
  methods: {
    isActiveRoute(path) {
      const active = this.$route.path === path;
      if (active) {
        this.$nextTick(() => {
          setTimeout(this.updateActiveBackground, 0);
        });
      }
      return active;
    },
    setActive(index) {
      this.activeIndex = index;
      this.updateActiveBackground();
    },
    updateActiveBackground() {
      const activeItem = this.$el.querySelector('.menu-item.active');
      const activeBackground = this.$refs.activeBackground;

      if (activeItem && activeBackground) {
        activeBackground.style.left = `${activeItem.offsetLeft}px`;
        activeBackground.style.width = `${activeItem.offsetWidth}px`;
      }
    }
  }
};
</script>

<style scoped>
.menu {
  background-color: #F4F1F2;
  border-radius: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: max-content;
  position: relative;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.menu-item {
  color: #000;
  text-decoration: none;
  padding: 10px 18px;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}

.menu-item.active,
.menu-item:hover {
  color: #FF0055;
}

.active-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 100px;
  background-color: #FF0055;
  z-index: 0;
  transition: all 0.3s ease;
}

.menu-item.active + .menu-item::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
}

.menu-item.active {
  color: #ffffff; 
  transition: none;
}
</style>