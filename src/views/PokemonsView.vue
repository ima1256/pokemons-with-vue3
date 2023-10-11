<script setup>

import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData'

//const pokemons = ref([])

const { getData, data, loading } = useGetData()

// const getData = async () => {
//     try {
//         const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
//         console.log(data.results)
//         pokemons.value = data.results
//     } catch(err) {
//         console.log(err)
//     }
// }

getData('https://pokeapi.co/api/v2/pokemon')

</script>

<template>

    <h1 v-if="loading">Loading info...</h1>

    <div v-if="data">
        <h1>Pokemons</h1>

        <div v-for="pokemon in data.results" :key="pokemon.name" class="card mb-2">
            <div class="card-body h-20">
                <router-link :to="`/pokemons/${pokemon.name}`" class="card-title text-middle">{{ pokemon.name }}</router-link>
            </div>
        </div>

        <div class="mt-2">

            <button :disabled="!data.previous" class="btn btn-warning me-2" @click="getData(data.previous)">Previous</button>
            <button :disabled="!data.next" class="btn btn-warning" @click="getData(data.next)">Next</button>

        </div>

    </div>
</template>

<style></style>