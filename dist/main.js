var Client;(()=>{var e={637:e=>{e.exports="image/travel1.png"},181:e=>{e.exports="image/travel2.jpg"}},t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";n.r(o),n.d(o,{handleSubmit:()=>c});const e="5de31e011adb4940aa5b958726f603e1",t="https://api.weatherbit.io/v2.0/forecast/daily?",a="https://pixabay.com/api/?key=",r="20352608-22d8f6eb6de07cb69c22283c7";function c(n){event.preventDefault();const o=document.getElementById("from_place").value,c=document.getElementById("to_place").value,s=document.getElementById("travel_date").value,d=`http://api.geonames.org/searchJSON?q=${c}&maxRows=10&username=xiaohua`,m=function(e){let t=new Date(e),n=new Date;return Math.floor((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())-Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()))/864e5)}(document.getElementById("travel_date").value);l(d).then((function(n){const o=n.geonames[0].lat,a=n.geonames[0].lng;return console.log(o),console.log(a),async function(n,o,a){const r=Math.floor(new Date(a).getTime()/1e3),c=new Date,l=Math.floor(new Date(c.getFullYear()+"-"+c.getMonth()+"-"+c.getDate()).getTime()/1e3);let i;i=r-l<604800?await fetch(weatherCurrentUR+"lat="+n+"&lon="+o+"&key="+e):await fetch(t+"lat="+n+"&lon="+o+"&key="+e);try{const e=await i.json();return console.log(e),e}catch(e){console.log("error",e)}}(o,a,travel_date)})).then((e=>{const t=e.data[0].temp,n=e.data[0].weather.description;return console.log(t),console.log(n),async function(e){const t=await fetch(a+r+"&q="+e+" city&image_type=photo");try{const e=await t.json();return console.log(e),e}catch(e){console.log("error",e)}}(c).then((e=>{if(e.hits.length>0){const a=e.hits[0].webformatURL;return console.log(a),async function(e,t){console.log(t);const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log(e),e}catch(e){console.log("error",e)}}("/add",{from:o,to:c,date:s,days_away:m,image:a,temp:t,condition:n})}})).then((e=>{i(e)}))}))}const l=async e=>{const t=await fetch(e);try{const e=await t.json();return console.log(e),e}catch(e){console.log("error",e)}};const i=async()=>{const e=await fetch("/all");try{const t=await e.json();console.log(t);const n=document.getElementById("trip_information");n.classList.remove("invisible"),n.scrollIntoView({behavior:"smooth"}),document.getElementById("boarding").innerHTML=t.from,document.getElementById("destination").innerHTML=t.to,document.getElementById("departing_date").innerHTML=t.date,document.getElementById("days_away").innerHTML=t.days_away,void 0!==t.image&&document.getElementById("destination_image").setAttribute("src",t.image),document.getElementById("temperature").innerHTML=t.temp,document.getElementById("weather_condition").innerHTML=t.condition}catch(e){console.log("error",e)}};document.querySelector(".planNow").addEventListener("click",(function(e){document.getElementById("plan_form").reset(),document.getElementById("plan_trip").scrollIntoView({behavior:"smooth"})}));document.getElementById("travel_submit").addEventListener("click",c);document.getElementById("remove_trip").addEventListener("click",(function(e){document.getElementById("plan_form").reset(),document.getElementById("trip_information").classList.add("invisible")}));n(637),n(181)})(),Client=o})();