<template lang="pug">
  .root
    form(@submit.prevent="login(hostname)")
      input(type="text", v-model="hostname")
      input(type="submit", value="ログイン")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    login: (domain) => {
      localStorage.setItem("domain", domain)
      var clientId = localStorage.getItem("client_id")
      var clientSecret = localStorage.getItem("client_secret")
      if (!clientId || !clientSecret) {
        const api = `https://${domain}/api/v1/apps`
        const form = {
          "client_name": "Blue Symfony",
          "redirect_uris": `https://${window.location.host}/login-redirect`,
          "scopes": "read write follow"
        }
        const option = {
          method: "POST",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
          body: Object.keys(form).map(key => key + "=" + encodeURIComponent(form[key])).join("&")
        }
        fetch(api, option)
          .then(res => res.json())
          .then(body => {
            var clientId = body.client_id
            var clientSecret = body.client_secret
            localStorage.setItem("client_id", clientId)
            localStorage.setItem("client_secret", clientSecret)
            var redirectTo = encodeURIComponent(`https://${window.location.host}/login-redirect`)
            window.location.href = `https://${domain}/oauth/authorize?client_id=${clientId}&client_secret=${clientSecret}&response_type=code&redirect_uri=${redirectTo}`
          })
      } else {
        var redirectTo = encodeURIComponent(`https://${window.location.host}/login-redirect`)
        window.location.href = `https://${domain}/oauth/authorize?client_id=${clientId}&client_secret=${clientSecret}&response_type=code&redirect_uri=${redirectTo}`
      }
    }
  }
})
</script>

