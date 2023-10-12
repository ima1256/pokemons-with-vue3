<script setup>

import { useFavoritesStore } from '../store/favorites'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'

const useFavorites = useFavoritesStore()

const { remove } = useFavorites

const { favorites } = storeToRefs(useFavorites)

</script>

<template>
    <h1>Favorites</h1>

    <p v-if="favorites.length == 0">Without favorites</p>

    <div v-else v-for="poke in favorites" :key="poke.id" class="card ">
        <div class="d-flex justify-content-between card-body">
            <h1 class="card-title mb-10"> {{ poke.name }} </h1>
            <router-link class="d-flex" :to="`/pokemons/${poke.name}`">
                <button class="btn btn-primary align-middle">
                    More information
                </button>
            </router-link>
            <!-- <img class="d-block m-auto" :src="poke.sprites.front_default" alt="" /> -->
        </div>
        <div @click="remove(poke.id)" class="btn btn-danger btn-sm">Remove</div>
    </div>

</template>