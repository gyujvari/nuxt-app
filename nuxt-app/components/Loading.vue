<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="flex items-center space-x-2">
      <div class="animate-spin">
        <img src="../static/loading.svg" alt="Spinner" class="w-8 h-8" />
      </div>

      <div class="text-lg font-semibold">Loading...</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 2s linear infinite;
}
</style>
