
var domain = localStorage.getItem("domain")
var params = new URLSearchParams(window.location.search.substring(1))
var code = params.get('code')

var api = `https://${domain}/oauth/token`
var form = {
  "grant_type": "authorization_code",
  "client_id": localStorage.getItem("client_id"),
  "client_secret": localStorage.getItem("client_secret"),
  "redirect_uri": `https://${window.location.host}/login-redirect`,
  "code": code
}
var option = {
  method: "POST",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  },
  body: Object.keys(form).map(key => key + "=" + encodeURIComponent(form[key])).join("&")
}
fetch(api, option)
  .then(res => res.json())
  .then(body => {
    localStorage.removeItem("client_id")
    localStorage.removeItem("client_secret")
    document.cookie = `token=${body.access_token}`
    window.location.href = "/"
  })
