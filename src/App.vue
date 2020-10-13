<template>
  <div id="app">
    <!-- <header class="logo">Leni-o-matic</header> -->
    <nav class="main-nav">
      <ul>
        <!-- <li>Import</li> -->
        <li>Export</li>
        <li @click="chooseOne()">Random</li>
      </ul>
    </nav>
    <main class="leni-container">
      <svg class="leni-head" viewBox="0 0 200 200">
        <g id="head">
          <path
            fill="#69b3b2"
            d="M60.7 164.84c.88-23.22-16.05-37.56-15.54-66.66.25-14.54 4.14-52.49 49.77-58.84 19.43-2.71 67.12 8.17 61.4 60.34-3.72 34-17.88 41.83-18.66 64.87"
          />
          <path
            fill="#141827"
            d="M62.2 164.84a55 55 0 00-2.82-18.61c-1.88-5.9-4.39-11.56-6.6-17.33a91.49 91.49 0 01-5.48-19.8 74.26 74.26 0 01-.47-15.2 70.06 70.06 0 014.76-21.76 48.29 48.29 0 0117.16-21.72A55.54 55.54 0 0184.85 43a58.42 58.42 0 0114.59-2.5 62.94 62.94 0 0122.12 3.5 52.72 52.72 0 0122 14c7 7.74 10.76 17.77 11.57 28.11a84 84 0 01-1.47 21.69 105.06 105.06 0 01-5.51 19.36c-3.77 9.63-9.12 18.72-11 29a56.91 56.91 0 00-.92 8.33c-.07 1.94 2.93 1.93 3 0a53.57 53.57 0 013.08-15.88c1.72-4.85 4-9.47 6.06-14.17C154 121.68 157.74 108 158.26 94c.42-11.45-1.95-23.15-8.45-32.73a51.59 51.59 0 00-21.35-17.64 68.05 68.05 0 00-24.12-6 62.06 62.06 0 00-29.4 5.91 50.81 50.81 0 00-22.86 20.78 65.21 65.21 0 00-7.69 23.92 77.94 77.94 0 001.89 30.63c3.35 12.41 10.11 23.79 12.3 36.53a45.93 45.93 0 01.62 9.44c-.07 1.93 2.93 1.93 3 0z"
          />
          <g fill="#151b2d" opacity=".16">
            <path
              d="M58.65 147.13s9.7-5.83 2.42-20.07C58.9 122.81 53 119 48.88 121c0 0 6.32 18 9.77 26.13z"
            />
            <path
              d="M69.26 48.77s1 7.15-2.6 11.46c-1.88 2.25-7.86 8.57-13.88 7.05a46.23 46.23 0 0116.48-18.51z"
            />
            <path
              d="M96.18 45.56c-.58 2.55 2 5.19 6.87 3.44 4.6-1.63 3.7-5.58 2-6.46-3.05-1.62-8.05-.47-8.87 3.02z"
            />
            <path
              d="M155.11 78.33s-9.33 1.18-12.13-7.82c-1.25-4-.15-9 1.79-12.67 0 0 9.14 10.16 10.34 20.49z"
            />
            <path
              d="M147.08 110.11c-1.51 2.57-2.12 7.34-1.24 9.88s4.06 4.86 4.06 4.86c2.39-5.47 5.75-19 5.75-19-5.03.41-6.83 1.85-8.57 4.26z"
            />
            <path
              d="M58.44 92.14a3.14 3.14 0 003.62 2.59 3.42 3.42 0 002.23-4 3.08 3.08 0 00-3.81-2.25 3.24 3.24 0 00-2 3.7"
            />
            <path
              d="M124.61 53.55a2.36 2.36 0 002.3 2.19 3.14 3.14 0 003-1.74 2.66 2.66 0 00-3.15-3 2.77 2.77 0 00-2.15 2.55z"
            />
          </g>
          <path
            fill="#ffcb31"
            d="M138 164.6l-.61 5c-10.63.23-73 .05-77-.06-.18-1.32.09-3.55-.25-5-.06.06 46.74.29 77.86.06z"
          />
          <path
            fill="#141827"
            d="M136.49 164.6l-.61 5 1.5-1.5c-9.85.21-19.72.12-29.58.11q-18.73 0-37.49-.09c-3.33 0-6.66 0-10-.08l1.5 1.5c-.2-1.79.06-3.58-.3-5.36l-1.45 1.89 17.62.07h38.08q11.1 0 22.21-.09a1.5 1.5 0 000-3c-13.27.1-26.55.11-39.82.1q-16 0-31.93-.07h-6.16a1.53 1.53 0 00-1.45 1.9c.31 1.5 0 3.06.2 4.57a1.52 1.52 0 001.5 1.5c8.29.21 16.6.11 24.9.13q19.39.06 38.8 0c4.45 0 8.9 0 13.35-.1a1.54 1.54 0 001.5-1.5l.61-5c.25-1.89-2.75-1.88-2.98.02z"
          />
          <path
            fill="#141827"
            d="M62.2 164.84a55 55 0 00-2.82-18.61c-1.88-5.9-4.39-11.56-6.6-17.33a91.49 91.49 0 01-5.48-19.8 74.26 74.26 0 01-.47-15.2 70.06 70.06 0 014.76-21.76 48.29 48.29 0 0117.16-21.72A55.54 55.54 0 0184.85 43a58.42 58.42 0 0114.59-2.5 62.94 62.94 0 0122.12 3.5 52.72 52.72 0 0122 14c7 7.74 10.76 17.77 11.57 28.11a84 84 0 01-1.47 21.69 105.06 105.06 0 01-5.51 19.36c-3.77 9.63-9.12 18.72-11 29a56.91 56.91 0 00-.92 8.33c-.07 1.94 2.93 1.93 3 0a53.57 53.57 0 013.08-15.88c1.72-4.85 4-9.47 6.06-14.17C154 121.68 157.74 108 158.26 94c.42-11.45-1.95-23.15-8.45-32.73a51.59 51.59 0 00-21.35-17.64 68.05 68.05 0 00-24.12-6 62.06 62.06 0 00-29.4 5.91 50.81 50.81 0 00-22.86 20.78 65.21 65.21 0 00-7.69 23.92 77.94 77.94 0 001.89 30.63c3.35 12.41 10.11 23.79 12.3 36.53a45.93 45.93 0 01.62 9.44c-.07 1.93 2.93 1.93 3 0z"
          />
        </g>
        <g v-html="leni.eye.url"></g>
        <g v-html="leni.mouth.url"></g>
        <g v-html="leni.hat.url"></g>
        <g v-html="leni.extra.url"></g>
        <g v-html="leni.hand.url"></g>
      </svg>
    </main>

    <Parts />
  </div>
</template>

<script>
import Parts from "./components/Parts.vue";
import store from "./store.js";

export default {
  name: "app",
  data: function () {
    return store.data;
  },
  methods: {
    randomElement(parts) {
      const keys = Object.keys(parts)
      const random = Math.trunc(Math.random() * keys.length)
      return parts[keys[random]]
    },
    chooseOne() {
      this.leni.eye = this.randomElement(this.parts.eyes);
      this.leni.mouth = this.randomElement(this.parts.mouths);
      this.leni.hat = this.randomElement(this.parts.hats);
      this.leni.hand = this.randomElement(this.parts.hand);
      this.leni.extra = this.randomElement(this.parts.extra);
    },
  },
  components: {
    Parts,
  },
};
</script>

<style lang="scss">
body {
  background-color: #233042;
  background-image: url(assets/stars.svg);
  color: #f8f3dc;
  margin: 0 auto;
}
ul {
  padding-left: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.5fr 40vh 4fr 0.5fr;
  grid-template-areas: "logo" "nav" "leni" "parts" "footer";
  height: 100vh;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
}

.main-nav ul {
  display: flex;
  grid-area: nav;
  li {
    cursor: pointer;
    list-style: none;
    margin: auto;
    &:hover {
      background-color: #549b97;
    }
  }
}

.logo {
  grid-area: logo;
}

.leni-container {
  border: 1px solid;
  border-bottom: 0;
  grid-area: leni;
}

.leni-head {
  height: 100%;
  .none {
    display: none;
  }
}

.parts {
  display: flex;
  flex-wrap: wrap;
  li {
    background-color: #354156;
    border: 1px solid transparent;
    cursor: pointer;
    flex: 1 1 100px;
    list-style-type: none;
    margin: 5px;
    text-align: center;
    &:hover,
    &:focus,
    &.active {
      background-color: #233042;
      border-color: initial;
    }
    svg {
      margin: 10px;
    }
    span {
      border: 1px solid;
      display: block;
    }
  }
}
</style>
