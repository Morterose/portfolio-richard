<template>
  <div class="container" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="rectangle">
      <div class="search-box" ref="searchBox">
        <span class="cursor cursor-static"></span>
        <span id="text" ref="textSpan">{{ displayedText }}</span>
        <span :style="cursorStyle" class="cursor hover-cursor"></span>
        <span class="close-btn">×</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalText: "красота",
      displayedText: "",
      interval: null,
      isAnimating: false,
      cursorStyle: {
        visibility: 'hidden',
        position: 'left',
        width: 'var(--width-cursor)',
        backgroundColor: 'black',
        left: '2px',
      },
    };
  },
  methods: {
    onMouseEnter() {
      this.startTypingEffect();
    },
    onMouseLeave() {
      clearInterval(this.interval);
      this.displayedText = "";
      this.updateCursorVisibility(false);
      this.isAnimating = false;
    },
    updateCursorVisibility(isVisible) {
      this.cursorStyle.visibility = isVisible ? 'visible' : 'hidden';
    },
    updateCursorPosition() {
      this.$nextTick(() => {
        const textSpan = this.$refs.textSpan;
        const searchBox = this.$refs.searchBox;
        if (textSpan && searchBox) {
          const textWidth = textSpan.offsetWidth;
          // Обновление позиции курсора в зависимости от ширины текста и положения контейнера
          this.cursorStyle.left = `${textWidth}px`;
        }
      });
    },
    startTypingEffect() {
      if (this.isAnimating) return;

      this.isAnimating = true;
      this.displayedText = "";
      this.updateCursorVisibility(true);
      let index = 0;

      this.interval = setInterval(() => {
        if (index < this.originalText.length) {
          this.displayedText += this.originalText[index];
          this.updateCursorPosition();
          index++;
        } else {
          clearInterval(this.interval);
          this.isAnimating = false;
        }
      }, 200);
    },
  },
};
</script>

<style scoped>
.container {
  --primary-color: rgb(253, 222, 85);
  --secondary-color: white;
  --border-radius: 32px;
  --width-cursor: 2px;
}

.container {
  width: 11.39vw;
  aspect-ratio: 1 / 1;
  min-width: 172px;    
  min-height: 172px;     
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
  position: relative;
  border-radius: var(--border-radius);
  transition: background-color 1.2s ease
}

.rectangle {
  width: 76.16%;
  height: 41.86%;
  background-color: var(--secondary-color);
  transition: width 0.5s ease, height 0.5s ease, border 0.5s ease;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  padding: 0 10.94%;
  box-sizing: border-box;
  position: relative;
  transition: width 1s ease;
  border: 1px solid var(--primary-color);
  overflow: visible;
}

.search-box {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: visible;
}

#text {
  font-size: 26px;
  opacity: 0;
  transition: opacity 0.5s ease;
  white-space: nowrap;
  position: relative;
}

.close-btn {
  cursor: pointer;
  user-select: none;
  margin-left: auto;
  padding-left: 10px;
  font-size: 26px;
  color: #8B93A5;
}

.container:hover {
  background-color: var(--secondary-color);
  transition: background-color 0.1s ease
}

.container:hover .rectangle {
  border: 4px solid var(--primary-color);
  width: 95.3vw;
  transition: width 10s ease, border 0.5s ease; 
}

.container:hover #text {
  opacity: 1;
}

.container:hover .cursor {
  animation: blink 1s step-start infinite;
  opacity: 1;
}

.cursor {
  visibility: visible;
  position: absolute;
  transform: translateY(5%);
  width: var(--width-cursor);
  height: 26px;
}

.cursor-static {
  position: absolute;
  background-color: black;
  margin-left: 2px;
  left: 8px; /* Позиция слева в блоке search-box */
  /* animation: blink 1s step-start infinite; */
}

.container:hover .cursor-static {
  visibility: hidden;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
}
</style>