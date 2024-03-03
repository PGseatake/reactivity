<script lang="ts" setup>
defineProps<{ ary: number[] }>();
</script>

<template>
  <template v-for="v in ary" :key="v">
    <v-value :val="v" />
  </template>
</template>
