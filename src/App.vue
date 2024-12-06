<template>
  <div id="rootCont">
    <canvas ref="gameCanvas" id="gameCanvas"></canvas>
    <div ref="menuEl" id="menuEl">
      <h4>
        Move with WASD
      </h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { startGame } from './game/main';

const gameCanvas = ref<HTMLCanvasElement>();
const menuEl = ref<HTMLDivElement>();

onMounted(() => {
  startGame(gameCanvas.value!)

  setMenuSize()
  window.addEventListener('resize', () => setMenuSize())
});

function setMenuSize() {
  menuEl.value!.style!.width = gameCanvas.value?.style.width!
  menuEl.value!.style.height = gameCanvas.value?.style.height!
}

</script>

<style scoped>
#rootCont {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#gameCanvas {
  border: 20px inset black;
}

#menuEl {
  border: 10px outset burlywood;
  position: absolute;
}

h4 {
  text-align: center;
}
</style>