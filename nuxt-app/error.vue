<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <img src="./static/magnifier.svg" alt="error_icon" class="w-16 h-16 mb-4" />
    <p class="text-2xl font-semibold text-black mb-2">Valami hiba történt</p>
    <p class="text-lg text-gray-600 mb-6">
      Kérjük győződj meg róla, hogy az internetkapcsolattal minden rendben
      van-e.
    </p>
    <nuxt-link
      to="/"
      class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >Újratöltés</nuxt-link
    >
  </div>
</template>
