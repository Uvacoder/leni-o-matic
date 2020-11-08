<template>
    <section class="parts-container">
        <div class="tabs">
            <button v-for="(tab, i) in tabs" :key="i" :class="{'active': tabActive === tab}" @click="tabActive = tab">{{ tab }}</button>
        </div>

        <ul class="parts" v-if="tabActive == 'eyes'">
            <li @click="chooseEye(item)" class="eye" :class="{'active': leni.eye === item}" v-for="(item, i) in parts.eyes" :key="i"> 
              <button :aria-label="item.name">
                <svg viewBox="0 0 200 200" v-html="item.url" role="img"></svg>
                <span>{{ item.name }}</span>
              </button>
            </li>
        </ul>

        <ul class="parts" v-if="tabActive == 'mouths'">
            <li @click="chooseMouth(item)" class="mouth" :class="{'active': leni.mouth === item}" v-for="(item, i) in parts.mouths" :key="i"> 
              <button :aria-label="item.name">
                <svg viewBox="0 0 200 200" v-html="item.url" role="img"></svg>
                <span>{{ item.name }}</span>
              </button>
            </li>
        </ul>
        <ul class="parts" v-if="tabActive == 'hats'">
            <li @click="chooseHat(item)" class="hat" :class="{'active': leni.hat === item}" v-for="(item, i) in parts.hats" :key="i"> 
              <button :aria-label="item.name">
                <svg viewBox="0 0 200 200" v-html="item.url" role="img"></svg>
                <span>{{ item.name }}</span>
              </button>
            </li>
        </ul>
        <ul class="parts" v-if="tabActive == 'hands'">
            <li @click="chooseHand(item)" class="hand" :class="{'active': leni.hand === item}" v-for="(item, i) in parts.hands" :key="i"> 
              <button :aria-label="item.name">
                <svg viewBox="0 0 200 200" v-html="item.url" role="img"></svg>
                <span>{{ item.name }}</span>
              </button>
            </li>
        </ul>
        <ul class="parts" v-if="tabActive == 'extras'">
            <li @click="chooseExtra(item)" class="extra" :class="{'active': leni.extra === item}" v-for="(item, i) in parts.extras" :key="i"> 
                <button :aria-label="item.name">
                  <svg viewBox="0 0 200 200" v-html="item.url" role="img"></svg>
                  <span>{{ item.name }}</span>
                </button>
            </li>
        </ul>
        <ul class="parts" v-if="tabActive == '+ extras'">
            <li @click="chooseExtra2(item)" class="extra2" :class="{'active': leni.extra2 === item}" v-for="(item, i) in parts.extras2" :key="i"> 
              <button :aria-label="item.name">
                <svg viewBox="0 0 200 200" v-html="item.url" role="img"></svg>
                <span>{{ item.name }}</span>
              </button>
            </li>
        </ul>

    </section>
</template>

<script>
import store from './../store.js'

export default {
  name: 'Parts',
  data: function () {
    return store.data
  },
  methods: {
    checkRoute() {
      var str = "";
      var partes = {
        e: this.leni.eye.name,
        m: this.leni.mouth.name,
        x: this.leni.extra.name,
        hd: this.leni.hand.name,
        ht: this.leni.hat.name,
        xx: this.leni.extra2.name,
      }
      for (var key in partes) {
          if (str != "") { str += "&"; }
          str += key + "=" + encodeURIComponent(partes[key]);
      }
      history.pushState(
          {},
          null,
          this.$route.path + '?' + str
        )
    },
   chooseEye: function(item) {
    this.leni.eye = item
    this.checkRoute()
   },
   chooseMouth: function(item) {
      this.leni.mouth = item
    this.checkRoute()
   },
  chooseHat: function(item) {
      this.leni.hat = item
    this.checkRoute()
   },
  chooseHand: function(item) {
      this.leni.hand = item
    this.checkRoute()
   },
  chooseExtra: function(item) {
      this.leni.extra = item
    this.checkRoute()
   },
  chooseExtra2: function(item) {
      this.leni.extra2 = item
    this.checkRoute()
   }
 }
}
</script>

<style lang="scss">
ul { padding-left: 0; }

.parts-container {
  border-top: 0;
  grid-area: parts;
}
.tabs { 
  cursor: pointer;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-around;
  > button {
    background-color: var(--bgColor);
    border-radius: 50px;
    border: 0;
    color: var(--textColor);
    flex: 1 1 100px;
    margin: 5px;
    padding: .8rem .5rem;
    &.active, &:hover, &:focus {
        background-color: #0b3d4e;
    }
  }
}

</style>
