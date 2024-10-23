<template>
  <div class="button-container">
    <div class="inner-rectangle">
      <span class="label">100 р в месяц</span>
    </div>
    <div class="zebra"></div>
    <div class="zayac"></div>
    <div class="cat"></div>
  </div>
</template>

<script>
export default {
  name: 'PlusIconAnimate',
};
</script>

<style scoped>
.button-container{
  --border-radius: 32px;
  --path-zayac: url('../img/ya-plus-icon/01_3x.png');
  --path-zebra: url('../img/ya-plus-icon/PRAV7-1-3 1.png');
  --path-cat: url('../img/ya-plus-icon/cubocat_book_pose 1.png');
}
.button-container {
  width: 11.39vw;
  aspect-ratio: 1 / 1;
  position: relative;
  background: transparent;
  border-radius: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F1F3F5;
  overflow: hidden;
}

.inner-rectangle {
  width: 138px;
  height: 72px;
  background: linear-gradient(
    90deg,
    #ff5c4d 0%,
    #eb469f 25%,
    #8341ef 72%,
    #3f68f9 100%
  );
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 3;
}

.button-container:hover {
  background-color: white;
}

.button-container:hover .inner-rectangle {
  transform: rotate(-7deg);
}

.label {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.zebra, .zayac, .cat {
  position: absolute;
  width: 100px;
  height: 100px;
  background-size: cover;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  z-index: 1;
}

.zebra {
  top: 53px;
  left: 30px;
  background-image: var(--path-zebra);
}

.zayac {
  bottom: 46px;
  left: -2px;
  background-image: var(--path-zayac);
}

.cat {
  bottom: 33px;
  left: 82px;
  background-image: var(--path-cat);
}

.button-container:hover .zebra {
  transform: translate(0px, 30px);
  opacity: 1;
}

.button-container:hover .zayac {
  transform: translate(-8px, -45px);
  opacity: 1;
}

.button-container:hover .cat {
  transform: translate(-8px, -45px);
  opacity: 1;
}
</style>