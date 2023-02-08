<template>
    <div class="social-header">
        <img src="~/assets/images/logo.png" href="/" class="logo" />
        <!-- <nav>
            <nuxt-link to="/about" class="underline">About</nuxt-link>
            <nuxt-link to="/services" class="underline">Services</nuxt-link>
            <nuxt-link to="/blog" class="underline">Blog</nuxt-link>
            <nuxt-link to="/contact" class="underline">Contact</nuxt-link>
        </nav> -->
    </div>
</template>
  
<script>
export default {
    mounted() {
        window.addEventListener('scroll', function () {
            var logo_element = document.getElementsByClassName('logo').item(0);
            var header_element = document.querySelector('header');
            var nav_elements = document.querySelector('nav').querySelectorAll('a');

            if (window.scrollY > 10) {
                header_element.style.height = "30px";
                logo_element.style.height = "7%";
                logo_element.style.width = "7%";
                nav_elements.forEach(e => {
                    e.style.fontSize = "13px";
                })
            } else {
                header_element.style.height = "70px";
                logo_element.style.height = "10%";
                logo_element.style.width = "10%";
                nav_elements.forEach(e => {
                    e.style.fontSize = "18px";
                })
            }
        });
    }
}
</script>
  
<style>
header {
    /* background-color: #000; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    padding: 20px 0;
    z-index: 1;
    transition: 0.3s ease-in-out;
}

.social-header {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 20%;
    height: 20%;
    background-color: #333;
    transition: 0.3s ease-in-out;
}

nav a {
    color: #333;
    text-decoration: none;
    padding: 10px;
    margin-right: 20px;
    transition: all 0.3s;
    font-size: 18px;
    position: relative;
}

nav a:hover {
    color: #FFE51C;
}

.underline {
    display: inline-block;
    position: relative;
}

.underline:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: #D43C3B;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.underline:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
</style>