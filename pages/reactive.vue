<script lang="ts" setup>
// const val = reactive(0);
const obj = reactive({ a: 0 });
const ary = reactive([0]);
const objobj = reactive({ obj: { a: 0 } });
const aryobj = reactive([{ a: 0 }]);

const reactive_ = {
  // val_val: () => {
  //   val = val + 1;
  // },

  obj_val: () => {
    obj.a = obj.a + 1;
  },
  // obj_obj: () => {
  //   obj = { a: 10 };
  // },

  ary_val: () => {
    ary[0] = ary[0] + 1;
  },
  ary_push: () => {
    ary.push(ary[0]);
  },
  // ary_ary: () => {
  //   ary = [10];
  // },

  objobj_val: () => {
    objobj.obj.a = objobj.obj.a + 1;
  },
  objobj_obj: () => {
    objobj.obj = { a: 10 };
  },
  // objobj_root: () => {
  //   objobj = { obj: { a: 20 } };
  // },

  aryobj_val: () => {
    aryobj[0].a = aryobj[0].a + 1;
  },
  aryobj_obj: () => {
    aryobj[0] = { a: 10 };
  },
  aryobj_push: () => {
    aryobj.push({ a: 20 });
  },
  // aryobj_ary: () => {
  //   aryobj = [{ a: 30 }];
  // },
};
</script>

<template>
  <v-container style="background-color: lavenderblush">
    <v-row justify="center">
      <v-col class="text-h5 text-decoration-underline">reactive</v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="3" class="d-flex flex-col">
        <v-value :val="0" />
      </v-col>
      <v-col><v-btn text="val_val" @click="" class="text-decoration-line-through" /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="3" class="d-flex flex-col">
        <v-object :obj="obj"></v-object>
      </v-col>
      <v-col><v-btn text="obj_val" @click="reactive_.obj_val" /></v-col>
      <v-col><v-btn text="obj_obj" @click="" class="text-decoration-line-through" /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="3" class="d-flex flex-col">
        <v-array :ary="ary"></v-array>
      </v-col>
      <v-col><v-btn text="ary_val" @click="reactive_.ary_val" /></v-col>
      <v-col><v-btn text="ary_push" @click="reactive_.ary_push" /></v-col>
      <v-col><v-btn text="ary_ary" @click="" class="text-decoration-line-through" /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="3" class="d-flex flex-col">
        <v-object-object :objobj="objobj"></v-object-object>
      </v-col>
      <v-col><v-btn text="objobj_val" @click="reactive_.objobj_val" /></v-col>
      <v-col><v-btn text="objobj_obj" @click="reactive_.objobj_obj" /></v-col>
      <v-col><v-btn text="objobj_root" @click="" class="text-decoration-line-through" /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="3" class="d-flex flex-col">
        <v-array-object :aryobj="aryobj"></v-array-object>
      </v-col>
      <v-col><v-btn text="aryobj_val" @click="reactive_.aryobj_val" /></v-col>
      <v-col><v-btn text="aryobj_obj" @click="reactive_.aryobj_obj" /></v-col>
      <v-col><v-btn text="aryobj_push" @click="reactive_.aryobj_push" /></v-col>
      <v-col><v-btn text="aryobj_ary" @click="" class="text-decoration-line-through" /></v-col>
    </v-row>
  </v-container>
</template>
