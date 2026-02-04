<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0)
</script>

<template>
    <v-container>
    <v-card class="pa-4">
      <v-card-title class="mt-1">My First Vuetify Page</v-card-title>

      <v-card-text>
        <p>Count: {{ count }}</p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary"  @click="count++">
          Increment
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
</style>