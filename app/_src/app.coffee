# initialize foundation
$(document).foundation({
  orbit: {
    next_on_click: true,
    pause_on_hover: false,
    resume_on_mouseout: false,
  }
})

#<![CDATA[
owa_baseUrl = "http://analytics.zdita.com/"
owa_cmds = owa_cmds or []
owa_cmds.push [
  "setSiteId"
  "822e336b242f4e40adfd260bcd2dd6c4"
]
owa_cmds.push ["trackPageView"]
owa_cmds.push ["trackClicks"]
owa_cmds.push ["trackDomStream"]
(->
  _owa = document.createElement("script")
  _owa.type = "text/javascript"
  _owa.async = true
  owa_baseUrl = ((if "https:" is document.location.protocol then window.owa_baseSecUrl or owa_baseUrl.replace(/http:/, "https:") else owa_baseUrl))
  _owa.src = owa_baseUrl + "modules/base/js/owa.tracker-combined-min.js"
  _owa_s = document.getElementsByTagName("script")[0]
  _owa_s.parentNode.insertBefore _owa, _owa_s
  return
)()

#]]>
