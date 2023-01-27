<template>
  <div>
    <header>
      <Header></Header>
    </header>
    <Banner />
    <nuxt-child />
    <footer>
      <!-- footer content -->
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

* {
  font-family: 'Anton', sans-serif;
}

html, body {
  margin: 0;
  padding: 0;
}

body {
  margin-top: 70px;
  overflow-y: scroll;
}
</style>