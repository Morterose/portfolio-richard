<template>
  <div class="icon-button" @click="navigateTo">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <span>{{ text1 }}</span>
    <span class="text2">{{ text2 }}</span>
  </div>
</template>

<script>
import SearchIconAnimate from '../components/SearchIconAnimate.vue';

export default {
  components: {
    SearchIconAnimate
  },
  props: {
    text1: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    iconComponent: {
         type: Object,
         required: true
    }
  },
  methods: {
    navigateTo() {
      this.$router.push(this.route);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-button {
  width: 172px;
  height: 244px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .icon {
    border-radius: 32px;
    width: 11.39vw;
    aspect-ratio: 1 / 1;
    margin-bottom: 8px;
    background: #F1F3F5;

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }

  .text1 {
    font-size: 18px;
  }

  .text2 {
    opacity: 0.32;
    font-size: 18px;
  }

  p {
    margin: 0;
    text-align: center;
    font-size: 16px;
  }
}
</style>