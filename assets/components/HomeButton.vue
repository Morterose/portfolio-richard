<template>
  <button class="button-with-link" @click="navigate">
    🏠
  </button>
</template>

<script>
export default {
  name: 'HomeButton',
  props: {
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    navigate() {
      window.location.href = this.link;
    }
  }
};
</script>

<style scoped>
.button-with-link {
  background-color: black;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
}


.button-with-link:hover {
  transform: scale(1.09);
  transition: transform 0.2s;
}
</style>