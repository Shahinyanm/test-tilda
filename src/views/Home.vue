<template>
    <div class="home container">
        <b-modal :active.sync="isCreateModalActive" :hasModalCard="true" width="640" :canCancel="true">
            <div class="modal-card" style="width: 100%">
                <header class="modal-card-head">
                    <div class="modal-card-title">
                        Create page
                    </div>
                </header>
                <section class="modal-card-body">
                    <form @submit.prevent="createPage">
                        <b-field label="Title">
                            <b-input v-model="page.title"></b-input>
                        </b-field>
                        <b-button native-type="submit" type="is-primary">Create</b-button>
                    </form>
                </section>
            </div>
        </b-modal>
        <section>
            <div class="is-flex">
                <h1 class="title is-3">Pages</h1>
                <b-button type="is-info" icon-right="plus" @click="isCreateModalActive = true">Create page</b-button>
            </div>
            <b-table :data="PAGES">
                <template slot-scope="props">
                    <b-table-column label="UUID" width="200">
                        <span>{{ props.row.uuid }}</span>
                    </b-table-column>

                    <b-table-column label="Title">
                        <span class="has-text-weight-bold">{{ props.row.title }}</span>
                    </b-table-column>

                    <b-table-column label="Created at">
                        <span>{{ props.row.created_at }}</span>
                    </b-table-column>

                    <b-table-column>
                        <div class="buttons">
                            <b-button type="is-info" icon-right="eye" tag="router-link"
                                      :to="{name: 'Constructor', params: {uuid: props.row.uuid}}"></b-button>
                            <b-button type="is-danger" icon-right="trash" @click="removePage(props.row)"></b-button>
                        </div>
                    </b-table-column>
                </template>
            </b-table>
        </section>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Home',
    data () {
      return {
        isCreateModalActive: false,
        page: {},
      }
    },
    computed: {
      ...mapGetters('Page', ['PAGES']),
    },
    methods: {
      ...mapActions('Page', ['addNewPage', 'removePage']),
      /**
       * Create New page
       */
      createPage () {
        if (!this.page.title.trim()) {
          return
        }

        this.addNewPage(this.page)
        this.page = {}
        this.isCreateModalActive = false
      },
    },
  }
</script>
