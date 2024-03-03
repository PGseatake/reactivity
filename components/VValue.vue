<script lang="ts" setup>
defineProps<{ val: number }>();
</script>

<template>
  <span style="border: 1px solid gray; padding: 0 4px">{{ val }}</span>
</template>
