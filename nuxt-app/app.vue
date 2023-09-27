<template>
  <div>
    <Header />
    <main class="mt-16">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { useArticleStore } from "~/store";
useArticleStore().getToken();
</script>
