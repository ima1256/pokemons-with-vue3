<script setup>

//import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useGetData } from '../composables/getData'
import { useFavoritesStore } from '../store/favorites'

const route = useRoute()
const router = useRouter()
const useFavorites = useFavoritesStore()

//const poke = ref({})

//let loaded = ref(false)

const { add, isFavorite } = useFavorites

const { favorites } = storeToRefs(useFavorites)

const back = () => {
    router.push('/pokemons')
}

const { getData, data, loading, error } = useGetData()

getData('https://pokeapi.co/api/v2/pokemon/' + route.params.name)

</script>

<template>
    <div class="h-200 mt-100">
        <h1 v-if="loading">Loading info...</h1>

        <div class="alert alert-danger m-10" v-if="error">{{ error }}</div>

        <div v-if="data">
            <h1 class="card-title text-center">Poke name: {{ $route.params.name }}</h1>
            <img class="d-block m-auto" :src="data.sprites?.front_default" alt="" />
            <button :disabled="isFavorite(data)" @click="add(data)" class="btn btn-primary mb-2">Add Favorites</button>
        </div>

        <button @click="back" class="btn btn-outline-primary">Back</button>
    </div>
</template>