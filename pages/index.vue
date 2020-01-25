<template>
  <div class="index-page">
    <TheHeader @showAddButton="displayAddButton = !displayAddButton" role="banner" />
    <ListTasks role="main" />
    <NewTask v-if="displayAddButton" role="complementary" />
    <h3 v-if="displayCompletedText" @click="displayAddButton = false" class="index-page__completed-text" role="complementary">
      {{ $t('noTasks') }}
    </h3>
    <div @click="displayAddButton = false" class="index-page__close-add-task" aria-hidden="true" />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import NewTask from '@/components/NewTask.vue'
import ListTasks from '@/components/ListTasks.vue'

export default {
  components: {
    TheHeader,
    NewTask,
    ListTasks
  },

  head () {
    return {
      title: this.$t('indexPageHead.title'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'author', content: 'Marina Aisa' },
        { name: 'description', property: 'og:description', content: this.$t('indexPageHead.description'), hid: 'description' },
        { property: 'og:title', content: this.$t('indexPageHead.title') },
        { name: 'twitter:description', content: this.$t('indexPageHead.description') }
      ]
    }
  },

  data () {
    return {
      displayAddButton: false
    }
  },

  computed: {
    displayCompletedText () {
      return (this.$store.getters.getTodos <= 0 && !this.displayAddButton)
    }
  }
}
</script>
<style lang="scss">
.index-page {
  display: flex;
  flex-direction: column;

  &__completed-text,
  &__close-add-task {
    flex: 1;
    display: flex;
  }

  &__completed-text {
    align-items: center;
    justify-content: center;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 1.5rem;
  }
}
</style>
