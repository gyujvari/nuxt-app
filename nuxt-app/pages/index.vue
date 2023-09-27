<template>
  <div v-if="!isLoading" ref="scrollComponent" class="p-8">
    <h1 class="mt-3 mb-3 text-3xl text-black font-bold ml-2">
      Legfrissebb cikkeink
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <div v-for="a in articles" :key="a.id">
        <ArticleCard :article="a" />
      </div>
    </div>
  </div>
  <Loading v-if="isLoading" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const initialArticlesNumber = ref(12);
const articles = ref();
const scrollComponent = ref(null);
const isLoading = ref(true);
const router = useRouter();

const loadMoreArticles = () => {
  initialArticlesNumber.value += 4;
  loadItems(initialArticlesNumber.value);
};

onMounted(async () => {
  window.addEventListener("scroll", handleScroll);
  loadItems(initialArticlesNumber.value);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const loadItems = (numberOfItems) => {
  axios.get(`api/getArticles/${numberOfItems}`).then(function (response) {
    articles.value = response.data;
    isLoading.value = false;
  });
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY + windowHeight >= document.body.scrollHeight) {
    loadMoreArticles();
  } else {
    console.log("no more articles");
  }
};
</script>
