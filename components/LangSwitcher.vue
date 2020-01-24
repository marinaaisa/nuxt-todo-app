<template>
  <select v-model="selected" @change="changeLocale()" class="lang-switcher">
    <option :value="selected" selected>
      {{ $i18n.locale }}
    </option>
    <option v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale" :key="locale.code">
      {{ locale.code }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeLocale () {
      this.$router.push(this.switchLocalePath(this.selected))
    }
  }
}
</script>
<style lang="scss">
.lang-switcher {
  border-radius: 2px;
  font-size: 1rem;
  color: var(--text-color);
  background-color: var(--button-bg-color);
  padding: .5rem 2rem .5rem .7rem;
  border: 1px solid var(--border-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 50'><polygon fill='rgb(27, 144, 245)' points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 12px;
  background-position: calc(100% - .5rem) center;
  background-repeat: no-repeat;
  text-transform: uppercase;
  transition: border-color .3s;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: var(--primary);
  }
}
</style>
