<template>
<v-app style="background-color:black;">
  <navigatino-year style="z-index:4;"></navigatino-year>
  <navigation-month style="z-index:3;"></navigation-month>
  <v-content>
    <music-head></music-head>
    <music-body></music-body>
  </v-content>
  <music-foot></music-foot>
</v-app>
</template>

<script>
import navigatinoYear from './components/navigationYear.vue'
import navigationMonth from './components/navigationMonth.vue'
import musicHead from './components/musicHead.vue'
import musicBody from './components/musicBody.vue'
import musicFoot from './components/musicFoot.vue'
export default {
  components: {
    navigatinoYear,
    navigationMonth,
    musicHead,
    musicBody,
    musicFoot
  },
  data() {
    return {}
  },
  name: 'App'
}
</script>

<style scoped>

</style>

