<template>
  <div class="home">
    <Board gameType="network-multiplayer"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue';

export default {
  name: 'Multiplayer',
  components: {
    Board,
  },
};
</script>
