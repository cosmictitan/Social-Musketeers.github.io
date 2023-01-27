<template>
  <div class="banner">

    <section class="banner-first">
      <div class="banner-content">
        <img :src="imageUrl1" alt="banner image">
        <h1>Social<br>Musketeers</h1>
      </div>
    </section>

    <section class="banner-second">
      <div class="banner-content">
        <img :src="imageUrl2" alt="banner image">
        <h1>Social<br>Musketeers</h1>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl1: 'https://picsum.photos/1920/1080',
      imageUrl2: 'https://picsum.photos/1921/1081',
    }
  }
}
</script>

<style>
.banner {
  width: 100%;
  top: 0;
}

.banner img {
  top: 0;
  width: 100%;
  position: fixed;
  object-fit: cover;
}

.banner-first,
.banner-second {
  height: 120vh;
  /* Use clip-path: polygon(...) instead of inset(...) to support Chrome */
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);
}

.banner-content {
  display: flex;
  flex-wrap: wrap;
}

h1 {
  margin: 20% auto;
  align-self: center;
  font-size: 5rem;
  z-index: 1;
}

.banner-first h1 {
  color: #FFE51C;
}

.banner-second h1 {
  color: #D43C3B
}
</style>
