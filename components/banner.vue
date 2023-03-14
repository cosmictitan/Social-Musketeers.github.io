<template>
  <div class="banner">

    <section class="banner-first">
      <p class="big-font">"Marketing that fits<br>like a glove"</p>
      <p class="small-font">"You brand, your audience, our tailored campaigns"</p>
      <img class="banner-image" src="~/assets/images/banner-first.webp">
    </section>

    <!-- <section class="banner-second">
      <div class="banner-content">
        <img :src="imageUrl2" alt="banner image">
        <h1>Social<br>Musketeers</h1>
      </div>
    </section> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl1: '~/assets/images/stewie.png',
      imageUrl2: 'https://picsum.photos/1921/1081',
    }
  }
}
</script>

<style>
.banner-first {
  background-color: #FAF4E8;
  position: absolute;
  margin-top: 8rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.banner-image {
  width: 100%;
  height: auto;
}

.big-font {
  color: #126656;
  font-size: calc(40px + (100 - 40) * ((100vw - var(--minViewportSize) * 1px) / (var(--maxViewportSize) - var(--minViewportSize))));
  text-align: center;
  line-height: 1;
  min-height: 0vw;
}

.small-font {
  color: #126656;
  font-size: calc(16px + (25 - 16) * ((100vw - var(--minViewportSize) * 1px) / (var(--maxViewportSize) - var(--minViewportSize))));
  text-align: center;
  line-height: 1.4;
  min-height: 0vw;
}
</style>
