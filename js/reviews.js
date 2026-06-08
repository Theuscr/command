// reviews.js — Avaliações de produtos (POST OpenFoodFacts)

/* ===== REVIEWS ===== */
function rRvs(){
  document.getElementById('prv').innerHTML=`<div class="rv-s">
    <div class="rv-h"><h3>Avaliacoes</h3><button class="btn btn-p btn-sm" onclick="openModal()">Deixar Avaliacao</button></div>
    ${reviews.map(r=>`<div class="rvc">
      <div class="rvt"><div><div class="rvn">${r.name}</div><div class="rvd">${r.date}</div></div><div style="color:var(--purple)">${st(r.rating)}</div></div>
      <p style="font-size:14px;margin-bottom:8px;line-height:1.5">${r.text}</p>
      <div style="font-size:12px;color:var(--gray3)">Util (${r.util})</div>
    </div>`).join('')}
  </div>`;
}
function openModal(){
  starSel=0;document.querySelectorAll('#sp span').forEach(s=>s.classList.remove('on'));
  document.getElementById('rv-txt').value='';document.getElementById('err-rv').classList.remove('show');
  document.getElementById('mod-rv').classList.add('open');
}
function closeModal(){document.getElementById('mod-rv').classList.remove('open')}
document.getElementById('sp').addEventListener('click',e=>{
  if(!e.target.dataset.v)return;
  starSel=+e.target.dataset.v;
  document.querySelectorAll('#sp span').forEach(s=>s.classList.toggle('on',+s.dataset.v<=starSel));
});
async function submitReview(){
  const txt=document.getElementById('rv-txt').value.trim();
  if(!starSel||!txt){document.getElementById('err-rv').classList.add('show');return}
  const btn=document.getElementById('btn-rv');btn.textContent='Enviando...';btn.disabled=true;
  await apiPost({text:txt,rating:starSel});
  const d=new Date();
  reviews.unshift({name:'Voce',date:`${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`,text:txt,rating:starSel,util:0});
  rRvs();closeModal();toast('Avaliacao enviada! &#11088;','success');
  btn.textContent='Enviar';btn.disabled=false;
}