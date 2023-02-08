<template>
  <div>
    <header>
      <Header></Header>
    </header>
    <!-- <Banner /> -->
    <Vue3Lottie class="mafia"
      animationLink="https://raw.githubusercontent.com/Social-Musketeers/Social-Musketeers.github.io/main/assets/lottie/mafia.json"
      :height="400" :width="200" />
    <h1><span>All for one and one for all</span>, our marketing Team is coming to conquer. Get ready to experience the
      strength of brand unity with us, <span>soon!</span></h1>
  </div>
</template>

<script>
import 'vue3-lottie/dist/style.css'

document.addEventListener('touchstart', function onFirstTouch() {
  document.body.style.zoom = 1.0;
  document.removeEventListener('touchstart', onFirstTouch, false);
}, false);

export default {
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" }
  ]
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap');

* {
  font-family: 'Maven Pro', sans-serif;
}

html {
  background-color: #000;
}

body {
  margin: auto;
  align-content: center;
  height: max-content;
  width: max-content;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 50px;
  padding-right: 50px;
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