<script lang="ts" setup>
defineProps<{ obj: { a: number } }>();
</script>

<template>
  <v-value :val="obj.a" />
</template>
