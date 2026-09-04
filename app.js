const airports = [
  ['SHJ','Sharjah','United Arab Emirates'],['DXB','Dubai','United Arab Emirates'],['DOH','Doha','Qatar'],['LHR','London','United Kingdom'],['MAN','Manchester','United Kingdom'],['CAI','Cairo','Egypt'],['BOM','Mumbai','India'],['IST','Istanbul','Türkiye']
];
const destinations = [
  ['DOH','Doha','Qatar'],['CAI','Cairo','Egypt'],['IST','Istanbul','Türkiye'],['LHR','London','United Kingdom']
];
const from = document.querySelector('#from'), to = document.querySelector('#to');
for (const [code,city] of airports) { for (const s of [from,to]) { const o=document.createElement('option'); o.value=code; o.textContent=`${city} (${code})`; s.appendChild(o); } }
from.value='SHJ';to.value='DOH';
document.querySelector('#destinationGrid').innerHTML = destinations.map((d,i)=>`<article class="destination-card"><div class="destination-art art-${i+1}"><span>${d[0]}</span><b>✈</b></div><div class="destination-body"><div><small>${d[2]}</small><h3>${d[1]}</h3></div><div class="fare"><strong>From 0R$</strong></div></div></article>`).join('');
const toast=document.querySelector('#toast'),toastText=document.querySelector('#toastText');let timer;
function demo(msg){toastText.textContent=msg;toast.hidden=false;clearTimeout(timer);timer=setTimeout(()=>toast.hidden=true,2600)}
document.querySelectorAll('[data-demo]').forEach(el=>el.addEventListener('click',()=>demo(el.dataset.demo)));
document.querySelector('#swap').onclick=()=>{const a=from.value;from.value=to.value;to.value=a};
document.querySelector('#searchBtn').onclick=()=>{document.querySelector('#routeText').textContent=`${from.value} → ${to.value}`;document.querySelector('#results').hidden=false};
document.querySelector('#closeResult').onclick=()=>document.querySelector('#results').hidden=true;
document.querySelectorAll('[data-trip]').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('[data-trip]').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');const one=btn.dataset.trip==='oneway';document.querySelector('#returnField').classList.toggle('disabled',one);document.querySelector('#returnDate').disabled=one});
document.querySelector('#menuBtn').onclick=()=>document.querySelector('#navlinks').classList.toggle('open');
