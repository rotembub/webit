<template>
  <div class="home-page">
    <div class="title">
      <h1>Create your dream site in minutes</h1>
    </div>
    <p>
      Discover the platform that gives you the freedom to create, design, manage
      and develop your web presence exactly the way you want.
    </p>
    <div class="home-page-btn">
      <span class="home-page-span"
        ><router-link to="/template">Get started</router-link></span
      >
    </div>
    <div class="homepage-first-card">
      <div class="homepage-first-card-inner" v-observe-visibility="animateDiv">
        <div>
          <h2>Create the Websites You Want</h2>
          <p>
            Design and build your own high-quality websites. Whether you’re
            promoting your business, showcasing your work, opening your store or
            starting a blog—you can do it all with the Wix website builder.
          </p>
          <router-link to="/template"></router-link>
        </div>
        <img
          :src="
            require(`@/assets/homepage/illustration-woman-online-desktop.svg`)
          "
        />
      </div>
    </div>
    <div class="homepage-second-card">
      <div
        class="homepage-second-card-inner"
        v-observe-visibility="animateDivLeft"
      >
        <div>
          <h2>Create the Websites You Want</h2>
          <p>
            Design and build your own high-quality websites. Whether you’re
            promoting your business, showcasing your work, opening your store or
            starting a blog—you can do it all with the Wix website builder.
          </p>
          <router-link to="/template"></router-link>
        </div>
        <img :src="require(`@/assets/homepage/homepage.svg`)" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home-page',
  components: {},
  methods: {
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
