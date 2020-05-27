<template>
    <div class="editor" v-if="IS_EDITOR_OPENED">
        <div class="buttons">
            <b-button v-for="(command, key) in commands" :key="key" size="is-small" @click="doCommand(command)"
                      :icon-right="command.icon"></b-button>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'EditorPanel',
    data () {
      return {
        commands: [
          {
            'cmd': 'bold',
            'icon': 'bold',
            'desc': 'Toggles bold on/off for the selection or at the insertion point. (Internet Explorer uses the STRONG tag instead of B.)',
          },
          {
            'cmd': 'italic',
            'icon': 'italic',
            'desc': 'Toggles italics on/off for the selection or at the insertion point. (Internet Explorer uses the EM tag instead of I.)',
          },
          {
            'cmd': 'underline',
            'icon': 'underline',
            'desc': 'Toggles underline on/off for the selection or at the insertion point.',
          },
          {
            'cmd': 'fontSize',
            'val': '1-7',
            'icon': 'text-height',
            'desc': 'Changes the font size for the selection or at the insertion point. This requires an HTML font size (1-7) to be passed in as a value argument.',
          },
        ],
      }
    },
    computed: {
      ...mapGetters('Editor', [
        'IS_EDITOR_OPENED',
      ]),
    },
    methods: {
      doCommand (command) {
        let val = (typeof command.val !== 'undefined') ? prompt('Value for ' + command.cmd + '?', command.val) : ''
        document.execCommand(command.cmd, false, (val || ''))
      },
    },
  }
</script>

<style lang="scss" scoped>
    .editor {
        position: fixed;
        width: 100%;
        padding: 5px;
        bottom: 0;
        background-color: #0a1520;
        display: flex;
        z-index: 1;

        .is-underline {
            text-decoration: underline;
        }
    }
</style>