<script setup>

import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore()

const { increment } = useCounter
const { count, double } = storeToRefs(useCounter)

</script>

<template>
  <main>
    <h1>Home Counter: {{ count }}</h1>
    <h2>Double Counter: {{ double }}</h2>
    <button @click="increment">Increment</button>
  </main>
</template>
