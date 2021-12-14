<template>
  <div>
    <app-header></app-header>
    <div class="home-page">
      <div class="hero">
        <div class="title">
          <h1>Create your dream site in minutes</h1>
          <p>
            Discover the platform that gives you the freedom to create, design,
            manage and develop your web presence exactly the way you want.
          </p>
        </div>

        <div class="video-background-container">
          <img src="@/assets/home-page-background.jpeg" />
        </div>

        <div class="get-started-container">
          <div class="video-container">
            <div class="homepage-video-container">
              <img src="@/assets/homepage-video-screen.png" />
            </div>
            <video
              src="@/assets/webit-homepage-video.mp4"
              controlslist="nodownload"
              loop=""
              autoplay=""
              s
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>

          <div class="home-page-btn">
            <span class="home-page-span"
              ><router-link :to="'/template'">Get started</router-link></span
            >
          </div>
        </div>
      </div>

      <div class="homepage-first-card">
        <div
          class="homepage-first-card-inner"
          v-observe-visibility="animateDiv"
        >
          <div>
            <h2>
              Make your own website and get built-in tools to grow your business
              online.
            </h2>
            <p>
              Pick a template and customize anything, or answer a few questions
              and get a free website designed just for you.
            </p>
            <span class="home-page-card-span"
              ><router-link :to="'/template'"
                >Our templates &rarr;</router-link
              ></span
            >
          </div>
          <div class="home-card-img">
            <img
              :src="
                require(`@/assets/homepage/illustration-woman-online-desktop.svg`)
              "
            />
          </div>
        </div>
      </div>
      <div class="homepage-second-card">
        <div>
          <h1>Build your dream website in minutes</h1>
          <p>
            Create a website with the Webit website builder and use the built-in
            professional business suite to promote and manage your business—all
            in one place.
          </p>
        </div>
        <div>
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_fkukudqu.json"
            background="transparent"
            speed="1"
            class="lotti-animation"
            style=""
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <div class="homepage-third-card">
        <div
          class="homepage-second-card-inner"
          v-observe-visibility="animateDivLeft"
        >
          <div>
            <h2>Create the Websites You Want</h2>
            <p>
              Design and build your own high-quality websites. Whether you’re
              promoting your business, showcasing your work, opening your store
              or starting a blog—you can do it all with the Webit website
              builder.
            </p>
            <span class="home-page-card-span"
              ><router-link :to="'/editor'"
                >Start creating &rarr;</router-link
              ></span
            >
          </div>
          <div class="home-card-img">
            <img :src="require(`@/assets/homepage/homepage.svg`)" />
          </div>
        </div>
      </div>

      <div class="footer">
        <p>&copy; 2021 All rights reserved to Webit</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import appHeader from '../cmps/app-header.cmp.vue'
export default {
  name: 'home-page',
  components: { appHeader },

  created() {},
  methods: {
    toTheTemplates() {
      this.$router.push('/template')
    },
    animateDiv(isVisible, entry) {
      // if (!isVisible) entry.target.classList.remove('slide-in-right')
      if (isVisible) entry.target.classList.add('slide-in-right')
    },
    animateDivLeft(isVisible, entry) {
      // if (!isVisible) entry.target.classList.remove('slide-in-left')
      if (isVisible) entry.target.classList.add('slide-in-left')
    },
  },
}
</script>
