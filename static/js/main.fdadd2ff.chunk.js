(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),r=c(5),i=c.n(r),l=(c(12),c(4)),j=c.n(l),d=c(6),u=c(2),o=c.p+"static/media/cloud.c9c98672.png",b=c.p+"static/media/sun.2f212242.png",m=c.p+"static/media/rain.6c234ab9.gif",p=c.p+"static/media/snow.58da4989.gif",h=c.p+"static/media/thunder.1fbd5af5.gif";c(14);function O(e){var t=e.clouds,c=e.feels_like_current,n=e.humidity,r=e.temp_current,i=e.wind_speed,l=e.feels_like,j=e.temp,d=e.weather,O=e.city,f=e.country,x=e.rain,y=Object(s.useState)(""),N=Object(u.a)(y,2),w=N[0],g=N[1];return Object(s.useEffect)((function(){switch(d[0].main){case"Clouds":g(o);break;case"Clear":g(b);break;case"Thunderstorm":g(h);break;case"Drizzle":case"Rain":g(m);break;case"Snow":g(p);break;default:g(o)}}),[]),Object(a.jsxs)("section",{className:"today-wrapper",children:[Object(a.jsxs)("section",{className:"information-container",children:[Object(a.jsxs)("article",{className:"location-container today-container",children:[Object(a.jsx)("p",{className:"location-country",children:f}),Object(a.jsx)("p",{className:"location-city",children:O})]}),Object(a.jsxs)("section",{className:"weather-container",children:[Object(a.jsxs)("article",{className:"weather-container__left today-container",children:[x?Object(a.jsxs)("p",{className:"rain-chance",children:[x," %"]}):null,Object(a.jsxs)("p",{className:"wind-speed",children:[i," m/s"]}),Object(a.jsxs)("p",{className:"clouds",children:[t," %"]}),Object(a.jsxs)("p",{className:"humidity",children:[n," %"]})]}),Object(a.jsxs)("article",{className:"weather-container__right today-container",children:[Object(a.jsx)("p",{className:"current-temperature",children:r}),Object(a.jsxs)("p",{className:"feels-like",children:["feels like ",c]}),Object(a.jsx)("p",{className:"max-temperature temperature-range",children:j.max}),Object(a.jsx)("p",{className:"min-temperature temperature-range",children:j.min})]})]}),Object(a.jsxs)("section",{className:"temperature-container",children:[Object(a.jsxs)("article",{className:"temperature-trend today-container",children:[Object(a.jsx)("p",{className:"label",children:"Temperature"}),Object(a.jsx)("p",{children:j.morn}),Object(a.jsx)("p",{children:j.day}),Object(a.jsx)("p",{children:j.eve}),Object(a.jsx)("p",{children:j.night})]}),Object(a.jsxs)("article",{className:"temperature-trend today-container",children:[Object(a.jsx)("p",{className:"label",children:"Feels like"}),Object(a.jsx)("p",{children:l.morn}),Object(a.jsx)("p",{children:l.day}),Object(a.jsx)("p",{children:l.eve}),Object(a.jsx)("p",{children:l.night})]})]})]}),Object(a.jsx)("figure",{className:"image-container",children:Object(a.jsx)("img",{className:"image",src:w,alt:"".concat(w)})})]})}c(15);function f(e){var t=e.forecastDay,c=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],n=Object(s.useState)(""),r=Object(u.a)(n,2),i=r[0],l=r[1],j=Object(s.useState)(""),d=Object(u.a)(j,2),o=d[0],b=d[1],m=Object(s.useState)(),p=Object(u.a)(m,2),h=p[0],O=p[1],f=Object(s.useState)(),x=Object(u.a)(f,2),y=x[0],N=x[1],w=Object(s.useState)(),g=Object(u.a)(w,2),S=g[0],k=g[1],v=Object(s.useState)(),_=Object(u.a)(v,2),D=_[0],E=_[1],T=Object(s.useState)(),F=Object(u.a)(T,2),M=F[0],L=F[1],z=Object(s.useState)(),A=Object(u.a)(z,2),C=A[0],J=A[1],P=Object(s.useState)(),$=Object(u.a)(P,2),B=$[0],G=$[1];return Object(s.useEffect)((function(){l(new Date(1e3*t.dt).toLocaleDateString("de-DE")),0!==new Date(1e3*t.dt).getDay()?b(c[new Date(1e3*t.dt).getDay()-1]):b(c[6]),O(t.wind_speed),E(t.clouds),L(t.humidity),k(t.rain),J(new Date(1e3*t.sunrise).toLocaleTimeString("de-DE").replace(/(:\d{2}| [AP]M)$/,"")),G(new Date(1e3*t.sunset).toLocaleTimeString("de-DE").replace(/(:\d{2}| [AP]M)$/,"")),N(t.temp.day)}),[]),Object(a.jsxs)("article",{className:"forecast-day-wrapper",children:[Object(a.jsx)("p",{className:"weekday",children:o}),Object(a.jsx)("p",{className:"date",children:i}),Object(a.jsx)("p",{className:"value temperature",children:y}),S?Object(a.jsxs)("p",{className:"value rain-chance",children:[S," %"]}):null,Object(a.jsxs)("p",{className:"value wind-speed",children:[h," m/s"]}),Object(a.jsxs)("p",{className:"value clouds",children:[D," %"]}),Object(a.jsxs)("p",{className:"value humidity",children:[M," %"]}),Object(a.jsxs)("p",{className:"value sunrise",children:[C," h"]}),Object(a.jsxs)("p",{className:"value sunset",children:[B," h"]})]})}c(16);function x(e){var t=e.forecastDaily;return Object(a.jsx)("section",{className:"seven-day-forecast-wrapper",children:t.map((function(e){return Object(a.jsx)(f,{forecastDay:e},e.dt)}))})}function y(){return Object(a.jsx)("div",{className:"spinner"})}function N(){var e=Object(s.useState)(!0),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(Object),i=Object(u.a)(r,2),l=i[0],o=i[1],b=Object(s.useState)([]),m=Object(u.a)(b,2),p=m[0],h=m[1];return Object(s.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat("53.55215","&lon=").concat("9.98448","&exclude=").concat("hourly,minutely","&appid=").concat("39c3930949e7f373065570d91d4f6598","&units=").concat("metric")).then((function(e){return e.json()})).then((function(e){o(e.current),e.daily.shift(),h(e.daily)})).catch((function(e){return console.error(e)}));case 2:n(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(a.Fragment,{children:c?Object(a.jsx)(y,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{clouds:l.clouds,feels_like_current:l.feels_like,humidity:l.humidity,temp_current:l.temp,wind_speed:l.wind_speed,feels_like:p[0].feels_like,temp:p[0].temp,weather:l.weather,city:"Hamburg",country:"Germany",rain:l.rain}),Object(a.jsx)(x,{forecastDaily:p})]})})}i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.fdadd2ff.chunk.js.map