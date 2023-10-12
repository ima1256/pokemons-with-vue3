import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {

    const favorites = ref([])

    if(localStorage.getItem('favorites')) {
        favorites.value = JSON.parse(localStorage.getItem('favorites'))
    }

    const add = (poke) => {
        if (!isFavorite(poke)) favorites.value.push(poke)
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

    const remove = (id) => {
        favorites.value = favorites.value.filter(poke => poke.id != id)
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

    const isFavorite = (poke) => {
        return favorites.value.some(p => p.id == poke.id)
    }

    return {
        favorites,
        add,
        remove,
        isFavorite
    }
})