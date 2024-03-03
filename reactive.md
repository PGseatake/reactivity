# リアクティビティ

## ref

```javascript
const val = ref(0);
val.value = 1; // 更新あり

const obj = ref({ a: 0 });
obj.value.a = 1; // 更新あり
obj.value = { a: 10 }; // 更新あり

const ary = ref([0]);
ary.value[0] = 1; // 更新あり
ary.value.push(2); // 更新あり
ary.value = [10]; // 更新あり

const objobj = ref({ obj: { a: 0 } });
objobj.value.obj.a = 1; // 更新あり
objobj.value.obj = { a: 10 }; // 更新あり
objobj.value = { obj: { a: 20 } }; // 更新あり

const aryobj = ref([{ a: 0 }]);
aryobj.value[0].a = 1; // 更新あり
aryobj.value[0] = { a: 10 }; // 更新あり
aryobj.value.push({ a: 20 }); // 更新あり
aryobj.value = [{ a: 30 }]; // 更新あり
```

## reactive

```javascript
const val = reactive(0);
val = 1; // 実装不可

const obj = reactive({ a: 0 });
obj.a = 1; // 更新あり
obj = { a: 10 }; // 更新あり

const ary = reactive([0]);
ary[0] = 1; // 更新あり
ary.push(2); // 更新あり
ary = [10]; // 実装不可

const objobj = reactive({ obj: { a: 0 } });
objobj.obj.a = 1; // 更新あり
objobj.obj = { a: 10 }; // 更新あり
objobj = { obj: { a: 20 } }; // 更新あり

const aryobj = reactive([{ a: 0 }]);
aryobj[0].a = 1; // 更新あり
aryobj[0] = { a: 10 }; // 更新あり
aryobj.push({ a: 20 }); // 更新あり
aryobj = [{ a: 30 }]; // 実装不可
```

## shallowRef

```javascript
const val = shallowRef(0);
val.value = 1; // 更新あり

const obj = shallowRef({ a: 0 });
obj.value.a = 1; // 更新なし
obj.value = { a: 2 }; // 更新あり

const ary = shallowRef([0]);
ary.value[0] = 1; // 更新なし
ary.value.push(2); // 更新なし
ary.value = [3]; // 更新あり

const objobj = shallowRef({ obj: { a: 0 } });
objobj.value.obj.a = 1; // 更新なし
objobj.value.obj = { a: 2 }; // 更新なし
objobj.value = { obj: { a: 3 } }; // 更新あり

const aryobj = shallowRef([{ a: 0 }]);
aryobj.value[0].a = 1; // 更新なし
aryobj.value[0] = { a: 2 }; // 更新なし
aryobj.value.push({ a: 3 }); // 更新なし
aryobj.value = [{ a: 4 }]; // 更新あり
```

## shallowReactive

```javascript
const val = shallowReactive(0);
val = 1; // 実装不可

const obj = shallowReactive({ a: 0 });
obj.a = 1; // 更新あり
obj = { a: 10 }; // 実装不可

const ary = shallowReactive([0]);
ary[0] = 1; // 更新あり
ary.push(2); // 更新あり
ary = [10]; // 実装不可

const objobj = shallowReactive({ obj: { a: 0 } });
objobj.obj.a = 1; // 更新なし
objobj.obj = { a: 10 }; // 更新あり
objobj = { obj: { a: 20 } }; // 実装不可

const aryobj = shallowReactive([{ a: 0 }]);
aryobj[0].a = 1; // 更新なし
aryobj[0] = { a: 10 }; // 更新あり
aryobj.push({ a: 20 }); // 更新あり
aryobj = [{ a: 30 }]; // 実装不可
```

# 使いどころ

## ref

```javascript
const val = ref(0); // プリミティブ値に関してはこれ一択
const obj = ref({ a: 0 }); // 変数に対して代入したい場合
const ary = ref([0]); // 全ての値をリアクティブにしたい場合
const objobj = ref({ obj: { a: 0 } }); // 最適化とか考えるのが面倒な時
const aryobj = ref([{ a: 0 }]);
```

## reactive

```javascript
const obj = reactive({ a: 0 }); // 変数に対して代入が不要な場合
const ary = reactive([0]); // （変数への代入の有無が判断基準かも）
const objobj = reactive({ obj: { a: 0 } }); // 全ての値をリアクティブにしたい場合
const aryobj = reactive([{ a: 0 }]); // 最適化とか考えるのが面倒な時
```

## shallowRef

```javascript
const val = shallowRef(0); // プロパティ変更での更新が不要な時
const obj = shallowRef({ a: 0 });
const ary = shallowRef([0]);
const objobj = shallowRef({ obj: { a: 0 } });
const aryobj = shallowRef([{ a: 0 }]);
```

## shallowReactive

```javascript
const obj = shallowReactive({ a: 0 }); // ルートのプロパティ変更だけ更新したい場合
const objobj = shallowReactive({ obj: { a: 0 } }); // Array/Object があっても代入で問題ない場合

const ary = shallowReactive([0]); // 配列操作した時だけ更新したい場合
const aryobj = shallowReactive([{ a: 0 }]);
```
