<template>
  <div class="home">
    <PackP1/>
    <PackP2/>
  </div>
</template>

<script>
// @ is an alias to /src
import PackP1 from '@/components/Cards/PackP1.vue';
import PackP2 from '@/components/Cards/PackP2.vue';

export default {
  name: 'Deck',
  components: {
    PackP1,
    PackP2,
  },
};
</script>
