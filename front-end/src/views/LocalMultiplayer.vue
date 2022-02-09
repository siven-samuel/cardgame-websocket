<template>
  <div class="home">
    <Board gameType="local-multiplayer"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue';

export default {
  name: 'LocalMultiplayer',
  components: {
    Board,
  },
};
</script>
