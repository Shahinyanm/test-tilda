<template>
    <div>
        <p>
            1
        </p>
    </div>
</template>

<script>
  // import TextHelper from '@/helperComponents/TextHelper'

  export default {
    name: 'Content',
    // components: { TextHelper },
    data () {
      return {
        content: 'Book design is the art of incorporating the content, style, format, design, and sequence of the various\n' +
          '            components of a book into a coherent whole. In the words of Jan Tschichold, "methods and rules upon which it\n' +
          '            is impossible to improve, have been developed over centuries. To produce perfect books, these rules have to\n' +
          '            be brought back to life and applied." Front matter, or preliminaries, is the first section of a book, and is\n' +
          '            usually the smallest section in terms of the number of pages. Each page is counted, but no folio or page\n' +
          '            number is expressed, or printed, on either display pages or blank pages.',
      }
    },
  }
</script>

<style scoped>
    p {
        width: 50%;
        font-size: 20px;
        text-align: center;
    }
</style>