<template>
    <div class="index">
        <section class="banner-first">
            <p class="big-font">"Marketing that fits<br>like a glove"</p>
            <p class="small-font">"You brand, your audience, our tailored campaigns"</p>
            <img class="banner-first-image" src="/images/banner-first.webp">
        </section>
        <section class="banner-second">
            <p class="medium-font">About Us</p>
            <div class="about-us">
                <img class="banner-second-image" src="/images/about_us.png">
                <br>
                <br>
                <p class="small-font">As a marketing agency, Social Musketeers takes pride in being the life of the
                    marketing party. Our approach is all about bringing humor, relatability, and creativity to the table.
                </p>
                <br>
                <br>
                <p class="small-font">We're not your typical marketing agency - we're a team of experts who specialize in
                    developing campaigns that resonate with your target audience. Whether it's branding, search engine
                    optimization, performance marketing, video production, influencer marketing, or web development, we've
                    got you covered.</p>
                <br>
                <br>
                <FilledButton name="Read More" navigateTo="about" />
            </div>
        </section>
        <section class="banner-third">
            <p class="medium-font">Why Choose Us</p>
            <div class="why-choose-us">
                <img class="banner-third-image" src="/images/why_choose_us.png">
                <br>
                <br>
                <p class="small-font">As a marketing agency, Social Musketeers takes pride in being the life of the
                    marketing party. Our approach is all about bringing humor, relatability, and creativity to the table.
                </p>
                <br>
                <br>
                <p class="small-font">We're not your typical marketing agency - we're a team of experts who specialize in
                    developing campaigns that resonate with your target audience. Whether it's branding, search engine
                    optimization, performance marketing, video production, influencer marketing, or web development, we've
                    got you covered.</p>
                <br>
                <br>
                <FilledButton class="why-choose-us-button" name="Read More" navigateTo="about" />
            </div>
        </section>
    </div>
</template>

<style>
.index {
    background-color: #f8f2e5 !important;
}

.banner-first .banner-second .banner-third {
    background-color: #126656 !important;
    position: absolute;
    margin-top: 8rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.banner-first-image {
    width: 100%;
    height: auto;
}

.banner-second-image {
    float: left;
    width: 40%;
    height: auto;
}

.banner-third-image {
    float: right;
    width: 30%;
    height: auto;
}

.big-font {
    color: #126656;
    font-size: calc(40px + (100 - 40) * ((100vw - var(--minViewportSize) * 1px) / (var(--maxViewportSize) - var(--minViewportSize))));
    text-align: center;
    line-height: 1;
    min-height: 0vw;
}

.medium-font {
    color: #126656;
    font-size: calc(50px + (70 - 50) * ((100vw - var(--minViewportSize) * 1px) / (var(--maxViewportSize) - var(--minViewportSize))));
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

.about-us>p {
    text-align: left;
    margin: 0 10rem 0 0;
}

.why-choose-us>img {
    margin-right: 4rem;
}

.why-choose-us>p {
    text-align: left;
    margin: 0 0 0 10rem;
}

.why-choose-us-button {
  margin-top: 2rem;
  float: left;
}

</style>