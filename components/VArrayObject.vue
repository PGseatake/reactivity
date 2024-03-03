<script lang="ts" setup>
const props = defineProps<{ aryobj: { a: number }[] }>();
</script>

<template>
  <v-object v-for="v in aryobj" :obj="v"></v-object>
</template>
