import Content from '@/components/Content'
import ContentWithImage from '@/components/ContentWithImage'

export default {
  data () {
    return {
      components: [
        {
          id: 1,
          name: 'Content',
          component: Content,
        },
        {
          id: 2,
          name: 'Content with image',
          component: ContentWithImage,
        },
      ],
    }
  },
}