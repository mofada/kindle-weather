<template>
  <div id="ctiIframe"></div>
  <button v-if="isCallReady" @click="callMe('18888888888')"></button>
</template>

<script>
export default {
  data () {
    return {
      accountId: 10685705,
      token: "87ae984b-0af3-44fb-bf3f-fdb95434a1c2",
      isCallReady: true
    }
  },
  methods: {
    callMe (phone) {
      DYSDK.call(phone, (data) => {
      })
    }
  },
  mounted() {
    var se = document.createElement('script')
    se.id = 'dySdkScript'
    //需要先获取account_id和token
    se.setAttribute('url', `https://cti.duyansoft.com/ctibar.html?account_id=${this.accountId}&token=${this.token}&noNumberInput=true&noOpBtn=true`)
    se.setAttribute('ctype', 'mini')
    se.src = 'https://cti.duyansoft.com/syui/dysdk/dysdk2.min.js'

    // js 加载后执行
    se.onload = () => {
      DYSDK.ready(() => {

      })

      DYSDK.callReady(() => {
        this.isCallReady = true
      })

      DYSDK.callConnecting((data) => {
        if (data.uuid) {
        }
      })

      DYSDK.callConfirm((data) => {
        if (data.uuid) {
        } else {
          this.$Message.error('不存在uuid')
        }
      })

      DYSDK.callFail((data) => {
      })

      DYSDK.callEnd((data) => {
      })

      DYSDK.callBridge((data) => {
      })

      DYSDK.getPhonelines((data) => {
      })

      DYSDK.init()
    }
    document.getElementById('ctiIframe').appendChild(se)
  }
}
</script>
