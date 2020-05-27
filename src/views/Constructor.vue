<template>
    <div class="constructor">
        <div class="columns">
            <div class="column is-2">
                <b-sidebar
                        type="is-light"
                        :fullheight="true"
                        :open="true"
                >
                    <div class="is-flex">
                        <b-button type="is-info" icon-right="arrow-left" size="is-small" tag="router-link"
                                  :to="{name: 'Home'}"></b-button>
                        <h1 class="title is-4">{{ CURRENT_PAGE.title }}</h1>
                    </div>
                    <div class="components">
                        <draggable class="dragArea list is-hoverable"
                                   :list="components"
                                   :group="{ name: 'modules', pull: 'clone', put: false }"
                                   :sort="false"
                                   :clone="cloneModule"
                        >
                            <div class="list-item" v-for="(component, key) in components" :key="key">
                                {{ component.name }}
                            </div>
                        </draggable>
                    </div>
                </b-sidebar>
            </div>
            <div class="column">
                <EditorPanel></EditorPanel>
                <draggable
                        class="dragArea"
                        v-model="activeComponents"
                        group="modules"
                        handle=".handle"
                >
                    <div v-for="(component, key) in activeComponents" class="component" :key="key">
                        <div class="actions buttons">
                            <a class="button is-small handle">
                                <b-icon icon="mouse-pointer"></b-icon>
                            </a>
                            <a @click.prevent="removeAt(key)"
                               class="button is-small">
                                <b-icon icon="trash"></b-icon>
                            </a>
                        </div>
                        <div class="component">
                            <keep-alive>
                                <component v-bind:is="component.component" :key="key"></component>
                            </keep-alive>
                        </div>
                    </div>
                    <div v-if="!activeComponents.length" class="has-text-centered">
                        <b-icon icon="clone" size="is-large"></b-icon>
                        <h1 class="title is-3">Drop Modules Here</h1>
                    </div>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import ComponentsMixin from '@/Mixins/components'
  import draggable from 'vuedraggable'
  import EditorPanel from '../tools/EditorPanel'

  export default {
    name: 'Constructor',
    mixins: [ComponentsMixin],
    components: {
      EditorPanel,
      draggable,
    },
    computed: {
      activeComponents: {
        get () {
          return this.CURRENT_PAGE.components
        },
        set (val) {
          this.setCurrentPageComponents({ uuid: this.CURRENT_PAGE.uuid, components: val })
        },
      },
      ...mapGetters('Page', [
        'CURRENT_PAGE',
      ]),
    },
    created () {
      this.setCurrentPage(this.$route.params.uuid)
    },
    methods: {
      ...mapActions('Page', [
        'setCurrentPage', 'setCurrentPageComponents',
      ]),
      cloneModule (module) {
        return module
      },
      removeAt (key) {
        this.activeComponents.splice(key, 1)
      },
    },
  }
</script>

<style lang="scss" scoped>
    .dragArea {
        position: relative
    }

    .component {
        min-height: 70px;
        position: relative;
        border: 1px solid #ffffff;

        &:hover {
            border: 1px dashed;

            .actions {
                display: flex;
            }
        }

        .actions {
            display: none;
            z-index: 1000;
            position: absolute;
            right: 0;
            width: 100px;
            justify-content: flex-end;

            a {
                z-index: 10000000;
            }

        }
    }
</style>