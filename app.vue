<template>
  <div>
    <header>
      <Header></Header>
    </header>
    <Banner />
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

:root {
  --minViewportSize: 320;
  --maxViewportSize: 1920;
}

* {
  font-family: 'Questrial', sans-serif;
}

html {
  background-color: #FAF4E8;
}

body {
  margin: auto;
  align-content: center;
  height: max-content;
  width: max-content;
  padding-bottom: 100px;
}

span {
  color: #FF9900;
}

h1 {
  color: antiquewhite;
  text-align: center;
  width: 150vh;
  font-weight: 300;
  word-wrap: break-word;
  white-space: normal;
}

@media (max-width: 420px) {
  body {
    padding-top: 70px;
    padding-left: 0;
    padding-right: 0;
  }

  h1 {
    font-size: 1.2em;
    width: 50vh;
  }

  span {
    color: #FF9900;
  }
}
</style>