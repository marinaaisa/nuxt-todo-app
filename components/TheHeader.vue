<template>
  <header class="header">
    <a id="skip" href="#content" role="button">
      {{ $t('accessibility.skipContent') }}
    </a>
    <div class="header__actions">
      <LangSwitcher />
      <button @click="$emit('showAddButton')" :aria-label="$t('accessibility.addButton')" class="header__add-button">
        <svg width="10" height="10" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8V0H8V8H0V10H8V18H10V10H18V8H10Z" />
        </svg>
      </button>
    </div>
    <div class="header__reminders">
      <h1>{{ $t('reminders') }}</h1>
      <h2 :aria-label="$t('accessibility.numberTasks')" class="header__number-of-tasks">
        {{ numberTasks }}
      </h2>
    </div>
  </header>
</template>

<script>
import LangSwitcher from '@/components/LangSwitcher.vue'

export default {
  components: {
    LangSwitcher
  },

  computed: {
    numberTasks () {
      return this.$store.getters.getNumberOfTodos
    }
  }
}
</script>

<style lang="scss">
.header {
  &__reminders {
    display: flex;
    justify-content: space-between;
  }

  &__number-of-tasks {
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-weight: 600;
    color: var(--primary);
    font-size: 2rem;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;

    * + * {
      margin-left: 1rem;
    }
  }

  &__add-button {
    background-color: var(--button-bg-color);
    box-shadow: inset 0 1px 0 #ffffff29;
    color: var(--text-color);
    padding: .3rem 1rem;
    border: none;
    border-radius: 2px;
    transition: background-color .3s;

    &:active, &:hover {
      background-color: var(--primary);
    }
  }
}

#skip {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  justify-content: center;
  z-index: 100;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  text-decoration: none;
  color: var(--primary);
  font-size: 20px;

  &:focus {
    padding: 2px;
    max-height: none;
    overflow: auto;
    z-index: 200;
  }

  &:hover {
    transition: all 800ms;
    text-decoration: underline var(--primary) solid;
  }
}
</style>
