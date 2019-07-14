<template>
  <div class="home">
    test
    <p>{{data}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getList } from '@/request/api.js'
export default {
  name: 'test',
  data () {
    return {
      data: 'data',
      obj: {}
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    ...mapGetters(['id'])
  },
  methods: {
    init () {
      let params = {
        page: '1',
        page_size: '20'
      }
      console.log(getList)
      getList(params).then((res) => {
        console.log('res')
        console.log(res)
      })
    },
    ...mapActions(['setId'])
  }
}
</script>
