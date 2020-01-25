<template>
  <select v-model="selected" @change="changeLocale()" :aria-label="$t('accessibility.langSwitcher')" class="lang-switcher">
    <option :value="selected" :aria-label="$t(`accessibility.${$i18n.locale}`)" selected>
      {{ $i18n.locale }}
    </option>
    <option v-for="locale in locales" :key="locale.code" :aria-label="$t(`accessibility.${locale.code}`)">
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

  computed: {
    locales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
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

  &:hover {
    border-color: var(--primary);
  }
}
</style>
