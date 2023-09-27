<template>
  <div v-if="article" class="pr-10 pl-10">
    <div class="relative rounded-lg overflow-hidden w-90 h-80">
      <img
        :src="article.imageUrl"
        alt="Kép"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute bottom-5 right-80 bg-red-500 rounded p-1 text-white text-xs"
      >
        {{ article.readingTime }} perc
      </div>
    </div>
    <div class="w-80 mx-auto mt-6 flex flex-col items-center justify-center">
      <div class="w-50 mx-auto">
        <div class="mt-2 mb-3 text-xl text-black font-semibold">
          {{ article.title }}
        </div>
        <div class="text-sm" v-html="article.description"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
import { useArticleStore } from "~/store";

const article = computed(() => useArticleStore().article);

onMounted(async () => {
  await useArticleStore().getArticleById(id);
});
</script>
