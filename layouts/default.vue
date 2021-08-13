<template>
  <div>
    <div class="skewed" />
    <Navigation />
    <TopButton />
    <div class="container is-max-desktop">
      <section class="hero is-fullheight">
        <Nuxt />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Cookies from 'js-cookie'
import { getRandomString } from '~/utils/helpers'

export default Vue.extend({
  computed: {
    cookie (): string {
      let cookie = Cookies.get('duid')
      if (!cookie) {
        cookie = getRandomString(16)
        Cookies.set('duid', cookie, { expires: 365 })
      }
      return cookie
    }
  },
  watch: {
    $route () {
      this.discordify()
    }
  },
  mounted () {
    this.discordify()
  },
  methods: {
    discordify () {
      this.$store.dispatch('discordify', `Someone visited your website - \`${this.cookie}\` `)
    }
  }
})
</script>

<style scoped>
.skewed {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: #2c3e50;
  z-index: 0;
  transform: skewY(8deg);
  transform-origin: top right;
}
</style>
