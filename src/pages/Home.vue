<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const msg = ref('这是首页')

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
