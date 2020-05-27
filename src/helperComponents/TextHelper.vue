<template>
    <div class="text-container">
        <div v-html="content" @input="onInput" @dblclick="openEditor" @mouseup="openEditor" class="content" contenteditable="true"></div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'TextHelper',
    data () {
      return {
        isEditable: false,
      }
    },
    props: {
      content: {
        type: String,
      },
    },
    methods: {
      ...mapActions('Editor', [
        'TOGGLE_EDITOR_OPENED',
      ]),
      onInput (e) {
        console.log(e.target.innerText)
      },
      openEditor () {
        this.TOGGLE_EDITOR_OPENED(true)
      }
    },
  }
</script>

<style lang="scss" scoped>
    .text-container {
        .content {
            z-index: 5;
        }

        [contenteditable] {
            outline: 0px solid transparent;
        }
    }
</style>