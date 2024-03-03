<script lang="ts" setup>
const Pages = [
  ["/", "ref"],
  ["/reactive", "reactive"],
  ["/shallowRef", "shallowRef"],
  ["/shallowReactive", "shallowReactive"],
];
</script>

<template>
  <v-app>
    <v-navigation-drawer>
      <v-list mandatory>
        <template v-for="p of Pages" :key="p[0]">
          <v-list-item exact :to="p[0]">{{ p[1] }}</v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>
