<template>
  <div class="index-page">
    <TheHeader @showAddButton="displayAddButton = !displayAddButton" />
    <ListTasks />
    <NewTask v-if="displayAddButton" />
    <p v-if="displayCompletedText" @click="displayAddButton = false" class="index-page__completed-text">
      {{ $t('noTasks') }}
    </p>
    <div @click="displayAddButton = false" class="index-page__close-add-task" />
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
