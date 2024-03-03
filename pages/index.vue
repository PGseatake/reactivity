<script lang="ts" setup>
const val = ref(0);
const obj = ref({ a: 0 });
const ary = ref([0]);
const objobj = ref({ obj: { a: 0 } });
const aryobj = ref([{ a: 0 }]);

const ref_ = {
  val_val: () => {
    val.value = val.value + 1;
  },

  obj_val: () => {
    obj.value.a = obj.value.a + 1;
  },
  obj_obj: () => {
    obj.value = { a: 10 };
  },

  ary_val: () => {
    ary.value[0] = ary.value[0] + 1;
  },
  ary_push: () => {
    ary.value.push(ary.value[0]);
  },
  ary_ary: () => {
    ary.value = [10];
  },

  objobj_val: () => {
    objobj.value.obj.a = objobj.value.obj.a + 1;
  },
  objobj_obj: () => {
    objobj.value.obj = { a: 10 };
  },
  objobj_root: () => {
    objobj.value = { obj: { a: 20 } };
  },

  aryobj_val: () => {
    aryobj.value[0].a = aryobj.value[0].a + 1;
  },
  aryobj_obj: () => {
    aryobj.value[0] = { a: 10 };
  },
  aryobj_push: () => {
    aryobj.value.push({ a: 20 });
  },
  aryobj_ary: () => {
    aryobj.value = [{ a: 30 }];
  },
};
</script>

<template>
  <v-container style="background-color: lavenderblush">
    <v-row justify="center">
      <v-col class="text-h5 text-decoration-underline">ref</v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="3" class="d-flex flex-col">
        <v-value :val="val" />
      </v-col>
      <v-col><v-btn text="val_val" @click="ref_.val_val" /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="3" class="d-flex flex-col">
        <v-object :obj="obj"></v-object>
      </v-col>
      <v-col><v-btn text="obj_val" @click="ref_.obj_val" /></v-col>
      <v-col><v-btn text="obj_obj" @click="ref_.obj_obj" /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="3" class="d-flex flex-col">
        <v-array :ary="ary"></v-array>
      </v-col>
      <v-col><v-btn text="ary_val" @click="ref_.ary_val" /></v-col>
      <v-col><v-btn text="ary_push" @click="ref_.ary_push" /></v-col>
      <v-col><v-btn text="ary_ary" @click="ref_.ary_ary" /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="3" class="d-flex flex-col">
        <v-object-object :objobj="objobj"></v-object-object>
      </v-col>
      <v-col><v-btn text="objobj_val" @click="ref_.objobj_val" /></v-col>
      <v-col><v-btn text="objobj_obj" @click="ref_.objobj_obj" /></v-col>
      <v-col><v-btn text="objobj_root" @click="ref_.objobj_root" /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="3" class="d-flex flex-col">
        <v-array-object :aryobj="aryobj"></v-array-object>
      </v-col>
      <v-col><v-btn text="aryobj_val" @click="ref_.aryobj_val" /></v-col>
      <v-col><v-btn text="aryobj_obj" @click="ref_.aryobj_obj" /></v-col>
      <v-col><v-btn text="aryobj_push" @click="ref_.aryobj_push" /></v-col>
      <v-col><v-btn text="aryobj_ary" @click="ref_.aryobj_ary" /></v-col>
    </v-row>
  </v-container>
</template>
