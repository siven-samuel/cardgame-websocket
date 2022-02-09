<template>
  <div class="castle-stats">
    <div class="main-stats">
      <div class="stat">base: {{CastleStats.castle}}</div>
      <div class="stat">shield: {{CastleStats.shield}}</div>
    </div>
    <div class="material-ressoures resources">
      <div class="stat">waepons: {{CastleStats.weapons}}</div>
      <div class="stat">energy: {{CastleStats.energy}}</div>
      <div class="stat">minerals: {{CastleStats.minerals}}</div>
    </div>
    <div class="human-resoures resources">
      <div class="stat">factories: {{CastleStats.factories}}</div>
      <div class="stat">miners: {{CastleStats.miners}}</div>
      <div class="stat">reactors: {{CastleStats.reactors}}</div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'CastleP1',
    data() {
        return {
            items: null,
        };
    },
    props: ['CastleStats'],
};
</script>
<style lang="less">
.player2 {
  .stat {
    background-color: blue !important;
    text-align: right;
  }
}
</style>
<style scoped lang="less">
.castle-stats {
    position: absolute;
    bottom: -110px;
    width:100%;
    color: white;
    text-align: left;
    padding: 5px;
    display: flex;
    z-index: 10;
    height: 50px;
    .resources {
      padding: 15px;
    }
}
@media only screen and (max-width: 800px) {
  .castle-stats {
    font-size: 13px;
  }
}
</style>
