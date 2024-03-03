<script lang="ts" setup>
defineProps<{ objobj: { obj: { a: number } } }>();
</script>

<template>
  <v-object :obj="objobj.obj"></v-object>
</template>
