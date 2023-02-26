<script setup lang="ts">
import {ref} from 'vue'

const ssr = ref(import.meta.env.SSR)
</script>

<template>
  <div>
    {{ssr}} 111111111
  </div>
</template>
