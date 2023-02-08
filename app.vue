<template>
  <div>
    <header>
      <Header></Header>
    </header>
    <!-- <Banner /> -->
    <Vue3Lottie
      animationLink="https://raw.githubusercontent.com/Social-Musketeers/Social-Musketeers.github.io/main/assets/lottie/mafia.json"
      :height="400" :width="400" />
    <h1><span>All for one and one for all</span>, our marketing Team is coming to conquer. Get ready to experience the strength of
      brand unity with us, <span>soon!</span></h1>
    <nuxt-child />
  </div>
</template>

<script>
import 'vue3-lottie/dist/style.css'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap');

* {
  font-family: 'Maven Pro', sans-serif;
}

html,
body {
  background-color: #000;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* margin-top: 0px;
  margin-left: 10rem;
  margin-right: 10rem; */
}

span {
  color: #FF9900;
}

h1 {
  color: antiquewhite;
  text-align: center;
  width: 150vh;
}
</style>