<template>
  <div class="pagination">
    <button @click="prevPage" class="arrow">&lt;</button>
    <span>{{ currentPage }}/{{ totalPages }}</span>
    <button @click="nextPage" class="arrow">&gt;</button>
  </div>
</template>

<script>
export default {
  name: 'PageSwitcher',
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('updatePage', this.currentPage + 1);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('updatePage', this.currentPage - 1);
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 100px;
  color: lightgray;
  /* transform: translateX(-50%); */
}

.arrow {
  background: none;
  border: none;
  color: lightgray;
  font-size: 20px;
  cursor: pointer;
}

.arrow:hover {
  color: white;
}

span {
  width: auto;
  margin: 0 10px;
}
</style>