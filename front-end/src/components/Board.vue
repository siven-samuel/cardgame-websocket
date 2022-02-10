<template>
  <div class="main">
    <div class="sky">
         <CastleP1/>
         <CastleP2/>
         <Pack v-show="false"/>
    </div>
    <div class="ground">
      <Hand :gameType="gameType"/>
    </div>
  </div>
</template>

<script>
import CastleP1 from '@/components/Castles/CastleP1.vue';
import CastleP2 from '@/components/Castles/CastleP2.vue';
import Hand from '@/components/Cards/Hand.vue';
import Pack from '@/components/Cards/PackP1.vue';

export default {
  name: 'Board',
  props: {
    gameType: String,
  },
  computed: {
    Player() {
      return this.$store.getters.isPlayer;
    },
  },
    components: {
    CastleP1,
    CastleP2,
    Hand,
    Pack,
  },
  data() {
    return {
        username: 'user1',
        msg: 'testmsg1',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .sky {
    background: #e2d09c;
    height: 60%;
    width: 100%;
    position: relative;
  }
  .ground {
    background: #a87b4d;
    height: 40%;
    z-index: 5;
  }
}
</style>
