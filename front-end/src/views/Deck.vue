<template>
  <div class="home">
    <PackP1/>
  </div>
</template>

<script>
// @ is an alias to /src
import PackP1 from '@/components/Cards/PackP1.vue';

export default {
  name: 'Deck',
  components: {
    PackP1,
  },
};
</script>
