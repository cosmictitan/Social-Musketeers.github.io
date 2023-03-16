<template>
  <div>
    <header class="index">
      <Header></Header>
    </header>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>

    <!-- <client-only>
      <Vue3Lottie class="mafia"
        animationLink="https://raw.githubusercontent.com/Social-Musketeers/Social-Musketeers.github.io/main/assets/lottie/landing.json"
        />
    </client-only> -->
    <!-- <h1><span>All for one and one for all</span>, our marketing Team is coming to conquer. Get ready to experience the
      strength of brand unity with us, <span>soon!</span></h1> -->
  </div>
</template>

<script>
import 'vue3-lottie/dist/style.css'
import axios from 'axios'

export default {
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" }
  ],
  css: [
    '~/assets/style.css',
  ],
  data() {
    return {
      animationData: null
    }
  },
  async mounted() {
    document.addEventListener('touchstart', function onFirstTouch() {
      document.body.style.zoom = 1.0;
      document.removeEventListener('touchstart', onFirstTouch, false);
    }, false);

    try {
      const response = await axios.get('/assets/lottie/landing.json')
      this.animationData = response.data
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style src="@/assets/style.css"></style>
