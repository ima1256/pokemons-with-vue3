<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <nav class="navbar bg-body-tertiary rounded">
      <div class="container-fluid">

        <router-link class="navbar-brand" to="/pokemons">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
          Poke API
        </router-link>

        <div class="d-flex">
          <router-link active-class="active" class="btn btn-outline-primary" to="/">Home</router-link>
          <router-link active-class="active" class="btn btn-outline-primary mr-2" to="/pokemons">Pokemons</router-link>
          <router-link active-class="active" class="btn btn-outline-primary" to="/favorites">Favorites</router-link>
        </div>

      </div>
    </nav>

    <RouterView />
    
</template>



