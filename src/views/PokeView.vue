<script setup>

//import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

import { useGetData } from '../composables/getData';

const route = useRoute()
const router = useRouter()

//const poke = ref({})

//let loaded = ref(false)

const back = () => {
    router.push('/pokemons')
}

const { getData, data, loading, error } = useGetData()

getData('https://pokeapi.co/api/v2/pokemon/' + route.params.name)

</script>

<template>
    <h1 v-if="loading">Loading info...</h1>

    <div class="alert alert-danger m-10" v-if="error">{{ error }}</div>

    <div v-if="data">
        <h1 class="card-title">Poke name: {{ $route.params.name }}</h1>
        <img :src="data.sprites?.front_default" alt="" />
    </div>

    <button @click="back" class="btn-outline-primary">Back</button>
</template>