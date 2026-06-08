// app.js — Estado, utilitários, navegação, API GET e inicialização

// Image map for products
const PROD_IMGS = {
  1: IMGS['whey_integral'],
  2: IMGS['iso_integral'],
  3: IMGS['iso_integral'],
  4: IMGS['mywhey_integral'],
  5: IMGS['whey_dux_conc'],
  6: IMGS['whey_dux_iso'],
  7: IMGS['whey_dux_hydro'],
  8: IMGS['squeeeze_dux'],
  9: IMGS['growth_combo'],
  10: IMGS['whey_growth'],
  11: IMGS['kit_growth'],
  12: IMGS['shaker'],
  13: IMGS['whey_topwax'],
  14: IMGS['creatina_topwax'],
  15: IMGS['chips_topwax'],
  16: IMGS['whey_iso_topwax'],
  17: IMGS['camiseta_preta'],
  18: IMGS['camiseta_rosa'],
  19: IMGS['camiseta_rosa'],
  20: IMGS['camiseta_preta']
};

/* ===== HOME ===== */
function rHome(){document.getElementById('hg').innerHTML=PRODS.slice(0,4).map(ch).join('')}

/* ===== LISTAGEM ===== */
function rl(){
  const sort=document.getElementById('sort-sel').value;
  const flt=document.getElementById('filt-sel').value;
  let ps=[...PRODS];
  if(isPromo) ps=ps.filter(p=>p.off>=35);
  else if(flt) ps=ps.filter(p=>p.cat===flt);
  if(sort==='asc')ps.sort((a,b)=>a.price-b.price);
  else if(sort==='desc')ps.sort((a,b)=>b.price-a.price);
  else if(sort==='az')ps.sort((a,b)=>a.name.localeCompare(b.name));
  const bb={};ps.forEach(p=>{if(!bb[p.brand])bb[p.brand]=[];bb[p.brand].push(p)});
  const el=document.getElementById('lc-ct');
  const title = isPromo ? '<div style="font-family:var(--font-d);font-size:44px;margin-bottom:8px;color:var(--dark)">PROMOCOES</div><p style="color:var(--gray3);font-size:14px;margin-bottom:32px">Produtos com 35% de desconto ou mais</p>' : '';
  if(!ps.length){el.innerHTML=title+'<p style="text-align:center;padding:60px;color:var(--gray3)">Nenhum produto encontrado.</p>';return}
  el.innerHTML=title+Object.entries(bb).map(([b,ps2])=>`<div class="bs"><div class="bn">${b}</div><div class="bg">${ps2.map(ch).join('')}</div></div>`).join('');
}

/* ===== PRODUTO ===== */
function openP(id){
  const p=PRODS.find(x=>x.id===id);if(!p)return;
  curP=p;qty=1;selF=p.opts?p.opts[0]:null;
  document.getElementById('bc-n').textContent=p.name;
  document.getElementById('pd').innerHTML=`
    <div class="gal"><div class="gal-m">${prodImg(p.id,true)}</div></div>
    <div class="pi">
      <h1>${p.name}</h1>
      <div class="sku">SKU: ${p.sku}</div>
      <div class="rat"><span class="st">${st(p.rating)}</span><strong>${p.rating}</strong><span class="cnt">(${p.reviews} avaliacoes)</span></div>
      <div class="pb">
        <div class="lbl">Preco</div>
        <div><span class="pm">${fmt(p.price)}</span><span class="po">${fmt(p.old)}</span></div>
        <div class="ppar">ou em ate 12x de ${fmt(p.price/12)} sem juros</div>
      </div>
      <div class="est">&#10003; Em estoque (${p.stock} unidades)</div>
      ${p.opts?`<div class="os"><h4>${p.cat==='roupas'?'Tamanho':'Sabor'}</h4><div class="ob">${p.opts.map(f=>`<button class="op${f===selF?' active':''}" onclick="selO(this,'${f}')">${f}</button>`).join('')}</div></div>`:''}
      <div class="os"><h4>Quantidade</h4><div class="qc"><button onclick="cQty(-1)">&#8722;</button><span id="qd">1</span><button onclick="cQty(1)">+</button></div></div>
      <div class="pa">
        <button class="btn btn-p" onclick="addC(${p.id})">Adicionar ao Carrinho</button>
        <button class="btn btn-o" onclick="bNow(${p.id})">Comprar Agora</button>
      </div>
      <div class="pp"><span>&#128666; Frete gratis acima de R&#36; 100</span><span>&#128274; Compra protegida e garantida</span></div>
    </div>`;
  document.getElementById('psp').innerHTML=`<div class="ss-s"><h3>Especificacoes Tecnicas</h3><div class="sg">${Object.entries(p.specs).map(([k,v])=>`<div class="sr"><span class="sk">${k}</span><span class="sv">${v}</span></div>`).join('')}</div></div>`;
  document.getElementById('pds').innerHTML=`<div class="ds-s"><h3>Sobre este Produto</h3><p style="color:#666;font-size:14px;line-height:1.7">${dsc(p)}</p></div>`;
  rRvs();
  goTo('page-produto');
}
function dsc(p){
  if(p.cat==='suplementos')return`Suplemento alimentar indicado para oferecer aporte proteico enriquecido com ativos exclusivos, favorecendo a manutencao e/ou ganho da massa muscular. Formulado com materias-primas de altissima qualidade para ser consumido apos o treino, garantindo a recuperacao muscular e o aporte de aminoacidos essenciais.`;
  if(p.cat==='roupas')return`Peca desenvolvida com tecnologia de ponta para maxima performance durante os treinos. Tecido com propriedades de secagem rapida e protecao UV, proporcionando conforto e liberdade de movimento em qualquer atividade fisica.`;
  return`Acessorio premium desenvolvido para atletas e praticantes de atividade fisica. Resistente, pratico e com design ergonomico para facilitar seu dia a dia na academia.`;
}
function selO(btn,f){selF=f;document.querySelectorAll('.op').forEach(b=>b.classList.remove('active'));btn.classList.add('active')}
function cQty(d){qty=Math.max(1,qty+d);const el=document.getElementById('qd');if(el)el.textContent=qty}

/* ===== INIT ===== */
// Restore session
if(currentUser){
  setTimeout(()=>{
    if(document.getElementById('p-no'))document.getElementById('p-no').value=currentUser.nome||'';
    if(document.getElementById('p-em'))document.getElementById('p-em').value=currentUser.email||'';
  },100);
}
selPay('pix');upd();
rHome();rl();