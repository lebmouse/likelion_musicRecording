<template>
  <v-app>
    <navigatino-year></navigatino-year>
    <navigation-month></navigation-month>
    <v-content>
      <music-head></music-head>
      <music-body></music-body>
      <music-foot></music-foot>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import navigatinoYear from './components/navigationYear.vue'
import navigationMonth from './components/navigationMonth.vue'
import musicHead from './components/musicHead.vue'
import musicBody from './components/musicBody.vue'
import musicFoot from './components/musicFoot.vue'
export default {
  components:{
    navigatinoYear,navigationMonth,musicHead,musicBody,musicFoot
  },
  data () {
    return {
    }
  },
  name: 'App'
}
</script>
