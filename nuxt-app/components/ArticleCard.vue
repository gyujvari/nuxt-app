<template>
  <NuxtLink :to="`/about/${article.id}`">
    <div
      class="relative bg-white rounded-lg p-2 hover:scale-105 transition-transform"
    >
      <img
        v-if="article.imageUrl"
        :src="article.imageUrl"
        alt="Card Image"
        class="w-full object-cover rounded-lg"
      />
      <p v-if="!article.imageUrl">Missing image</p>
      <div class="mt-2 text-xl text-black font-semibold">
        {{ article.title }}
      </div>
      <div
        class="absolute top-5 right-5 bg-red-500 rounded p-1 text-white text-xs"
      >
        {{ article.readingTime }} perc
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { article } = defineProps(["article"]);
</script>
