// ============================================================
// produtos.js — Dados, imagens e renderização dos produtos
// ============================================================

const PRODS=[
  {id:1,name:'Whey 100% Integral Medica 900g',brand:'Integral Medica',cat:'suplementos',price:99.99,old:145,off:31,rating:4.7,reviews:248,emo:'&#129371;',sku:'IM-W100',stock:450,opts:['Chocolate','Baunilha','Morango','Cookie'],specs:{'Marca':'Integral Medica','Proteina/dose':'24g','Carboidratos':'3g','Calorias':'120 kcal','BCAA':'5.5g','Glutamina':'4g','Gorduras':'1.5g','Aminoacidos':'Perfil completo'}},
  {id:2,name:'Whey Protein Isolado 900g',brand:'Integral Medica',cat:'suplementos',price:129.90,old:189,off:31,rating:4.5,reviews:312,emo:'&#127942;',sku:'IM-WIS',stock:320,opts:['Chocolate','Baunilha','Morango'],specs:{'Marca':'Integral Medica','Proteina/dose':'28g','Carboidratos':'1g','Calorias':'110 kcal','BCAA':'6g','Glutamina':'5g','Gorduras':'0.5g','Aminoacidos':'Perfil isolado'}},
  {id:3,name:'Whey Isolado Integral 900g',brand:'Integral Medica',cat:'suplementos',price:110,old:180,off:39,rating:4.6,reviews:156,emo:'&#128170;',sku:'IM-WIL',stock:210,opts:['Baunilha','Chocolate'],specs:{'Marca':'Integral Medica','Proteina/dose':'27g','Carboidratos':'2g','Calorias':'115 kcal','BCAA':'5.8g','Glutamina':'4.5g','Gorduras':'0.8g','Aminoacidos':'Perfil completo'}},
  {id:4,name:'Todynho Proteico 400ml',brand:'Integral Medica',cat:'suplementos',price:12,old:18,off:33,rating:4.3,reviews:197,emo:'&#129381;',sku:'IM-TOD',stock:800,opts:null,specs:{'Marca':'Integral Medica','Proteina/porcao':'15g','Carboidratos':'8g','Calorias':'130 kcal','BCAA':'3.2g','Glutamina':'2g','Gorduras':'1g','Aminoacidos':'Essenciais'}},
  {id:5,name:'Whey Concentrado DUX 900g',brand:'DUX',cat:'suplementos',price:124.99,old:145,off:14,rating:4.8,reviews:248,emo:'&#129367;',sku:'DX-WCO',stock:512,opts:['Chocolate','Baunilha','Morango','Cookie','Banana','Laranja'],specs:{'Marca':'DUX','Proteina/dose':'24g','Carboidratos':'3g','Calorias':'120 kcal','BCAA':'5.5g','Glutamina':'4g','Gorduras':'1.5g','Aminoacidos':'Perfil completo'}},
  {id:6,name:'Whey Protein Isolado DUX',brand:'DUX',cat:'suplementos',price:100,old:165,off:39,rating:4.6,reviews:312,emo:'&#128293;',sku:'DX-WIS',stock:278,opts:['Chocolate','Baunilha'],specs:{'Marca':'DUX','Proteina/dose':'28g','Carboidratos':'1g','Calorias':'108 kcal','BCAA':'6.2g','Glutamina':'4.8g','Gorduras':'0.4g','Aminoacidos':'Isolado'}},
  {id:7,name:'Whey Protein Hydro DUX',brand:'DUX',cat:'suplementos',price:120,old:200,off:40,rating:4.4,reviews:156,emo:'&#9889;',sku:'DX-WHY',stock:134,opts:['Chocolate','Morango'],specs:{'Marca':'DUX','Proteina/dose':'30g','Carboidratos':'0.5g','Calorias':'120 kcal','BCAA':'6.8g','Glutamina':'5.5g','Gorduras':'0.2g','Aminoacidos':'Hidrolisado'}},
  {id:8,name:'Coqueteleira DUX 900ml',brand:'DUX',cat:'acessorios',price:12,old:18,off:33,rating:4.3,reviews:167,emo:'&#129379;',sku:'DX-COQ',stock:400,opts:null,specs:{'Marca':'DUX','Volume':'900ml','Material':'Polipropileno','BPA Free':'Sim','Tela misturadora':'Inclusa','Cores':'4','Peso':'180g','Garantia':'6 meses'}},
  {id:9,name:'Whey e Creatina Growth',brand:'Growth',cat:'suplementos',price:124.99,old:145,off:14,rating:4.6,reviews:248,emo:'&#128165;',sku:'GW-WCR',stock:315,opts:['Chocolate','Baunilha','Morango'],specs:{'Marca':'Growth','Proteina/dose':'22g','Carboidratos':'4g','Calorias':'125 kcal','BCAA':'5g','Creatina':'3g','Gorduras':'1.8g','Aminoacidos':'Perfil completo'}},
  {id:10,name:'Whey 80% Growth 900g',brand:'Growth',cat:'suplementos',price:95,old:160,off:41,rating:4.5,reviews:312,emo:'&#127807;',sku:'GW-W80',stock:422,opts:['Baunilha','Chocolate','Cookie'],specs:{'Marca':'Growth','Proteina/dose':'22g','Carboidratos':'6g','Calorias':'130 kcal','BCAA':'4.8g','Glutamina':'3.5g','Gorduras':'2g','Aminoacidos':'Concentrado'}},
  {id:11,name:'Kit Sabores + Creatina Growth',brand:'Growth',cat:'suplementos',price:150,old:300,off:50,rating:4.7,reviews:156,emo:'&#127873;',sku:'GW-KIT',stock:98,opts:null,specs:{'Marca':'Growth','Conteudo':'6 saches + 300g creatina','Proteina/sache':'20g','Carboidratos':'5g','Calorias':'120 kcal','Creatina monohidratada':'300g','Sabores':'6 variedades','Garantia':'12 meses'}},
  {id:12,name:'Coqueteleira Growth 600ml',brand:'Growth',cat:'acessorios',price:12,old:18,off:33,rating:4.2,reviews:167,emo:'&#129371;',sku:'GW-COQ',stock:230,opts:null,specs:{'Marca':'Growth','Volume':'600ml','Material':'Tritan','BPA Free':'Sim','Tela misturadora':'Inclusa','Cores':'6','Peso':'150g','Garantia':'6 meses'}},
  {id:13,name:'Whey Concentrado TOPWAY 900g',brand:'TopWax',cat:'suplementos',price:124.99,old:145,off:14,rating:4.7,reviews:156,emo:'&#127947;',sku:'TW-WCO',stock:450,opts:['Chocolate','Baunilha','Morango','Cookie','Banana','Laranja'],specs:{'Marca':'TopWax','Proteina/dose':'24g','Carboidratos':'3g','Calorias':'120 kcal','BCAA':'5.5g','Glutamina':'4g','Gorduras':'1.5g','Aminoacidos':'Perfil completo'}},
  {id:14,name:'Creatina Topway 300g',brand:'TopWax',cat:'suplementos',price:95,old:125,off:24,rating:4.8,reviews:312,emo:'&#128300;',sku:'TW-CRE',stock:672,opts:null,specs:{'Marca':'TopWax','Dose recomendada':'5g','Pureza':'Creapure 99.9%','Carboidratos':'0g','Calorias':'0 kcal','Formato':'Po fino','Sabor':'Neutro','Certificacao':'NSF Sport'}},
  {id:15,name:'Chips Proteica Topway',brand:'TopWax',cat:'suplementos',price:30,old:90,off:67,rating:4.4,reviews:156,emo:'&#127839;',sku:'TW-CHI',stock:843,opts:['Cheddar','Pimenta','Original'],specs:{'Marca':'TopWax','Proteina/porcao':'15g','Carboidratos':'10g','Calorias':'140 kcal','Gorduras':'3g','Sodio':'220mg','Porcao':'35g','Sabores':'3'}},
  {id:16,name:'Whey Isolado Topway 900g',brand:'TopWax',cat:'suplementos',price:120,old:155,off:23,rating:4.6,reviews:167,emo:'&#11088;',sku:'TW-WIS',stock:389,opts:['Chocolate','Baunilha','Morango'],specs:{'Marca':'TopWax','Proteina/dose':'27g','Carboidratos':'1.5g','Calorias':'112 kcal','BCAA':'6g','Glutamina':'4.5g','Gorduras':'0.7g','Aminoacidos':'Isolado'}},
  {id:17,name:'Camiseta Manga Maromba',brand:'TopWax',cat:'roupas',price:42,old:70,off:40,rating:4.5,reviews:89,emo:'&#128085;',sku:'TW-CAM',stock:200,opts:['P','M','G','GG'],specs:{'Marca':'TopWax','Material':'88% Poliester 12% Elastano','Tecnologia':'Dry-Fit','Protecao UV':'UPF 30+','Gramatura':'160g/m2','Lavagem':'30°C','Cores':'5','Garantia':'3 meses'}},
  {id:18,name:'Legging Compressao Pro',brand:'Growth',cat:'roupas',price:68,old:100,off:32,rating:4.6,reviews:134,emo:'&#129393;',sku:'GW-LEG',stock:180,opts:['P','M','G','GG'],specs:{'Marca':'Growth','Material':'76% Nylon 24% Elastano','Tecnologia':'Compressao Inteligente','Cintura alta':'Sim','Bolso lateral':'Sim','Lavagem':'30°C','Cores':'8','Garantia':'3 meses'}},
  {id:19,name:'Top Fitness Premium',brand:'DUX',cat:'roupas',price:55,old:80,off:31,rating:4.4,reviews:77,emo:'&#128153;',sku:'DX-TOP',stock:150,opts:['P','M','G'],specs:{'Marca':'DUX','Material':'82% Poliamida 18% Elastano','Tecnologia':'Dry-Cool','Suporte':'Medio','Bojo removivel':'Sim','Lavagem':'30°C','Cores':'6','Garantia':'3 meses'}},
  {id:20,name:'Short Treino Dry Fit',brand:'Integral Medica',cat:'roupas',price:38,old:60,off:37,rating:4.3,reviews:62,emo:'&#129779;',sku:'IM-SHO',stock:250,opts:['P','M','G','GG'],specs:{'Marca':'Integral Medica','Material':'100% Poliester','Tecnologia':'Dry-Fit','Bolsos':'2 laterais','Elastico':'Interno + cordao','Lavagem':'40°C','Cores':'4','Garantia':'3 meses'}},
];
let reviews=[
  {name:'Noseku Atoia',date:'14/01/2024',text:'Excelente produto! A qualidade e muito boa e o atendimento foi perfeito. Recomendo!',rating:5,util:24},
  {name:'Daniel Cotrim',date:'05/01/2024',text:'Bom custo-beneficio. O sabor do whey e muito bom!',rating:4,util:18},
  {name:'Deide Costa',date:'04/01/2024',text:'Superou minhas expectativas. Muito bom misturado com agua.',rating:5,util:31},
];
let cart=JSON.parse(localStorage.getItem('cmd-c')||'[]');
let curP=null,selF=null,qty=1,starSel=0,payM='pix',isPromo=false;
let currentUser=JSON.parse(localStorage.getItem('cmd-user')||'null');

/* ===== API OpenFoodFacts ===== */
async function apiGet(){
  // GET OpenFoodFacts API para enriquecer specs (silencioso)
  try{
    const ctrl = new AbortController();
    const tid = setTimeout(()=>ctrl.abort(), 5000);
    const r=await fetch('https://world.openfoodfacts.org/cgi/search.pl?search_terms=whey+protein&action=process&json=1&page_size=1&fields=product_name,nutriments',{signal:ctrl.signal});
    clearTimeout(tid);
    if(!r.ok)throw new Error();
    const d=await r.json();
    if(d.products&&d.products[0]){
      const n=d.products[0].nutriments||{};
      if(n['proteins_100g']) PRODS[0].specs['Proteina (API)']=n['proteins_100g']+'g/100g';
      if(n['energy-kcal_100g']) PRODS[0].specs['Energia (API)']=n['energy-kcal_100g']+' kcal/100g';
    }
  }catch(e){ /* silencioso */ }
}
async function apiPost(data){
  try{
    const fd=new FormData();
    fd.append('code','3017620422003');
    fd.append('user_id','command_demo');
    fd.append('comment',data.text);
    const r=await fetch('https://world.openfoodfacts.org/cgi/product_jqm2.pl',{method:'POST',body:fd});
    console.log('[POST] review status:',r.status);
  }catch(e){console.warn('[POST]',e.message)}
}

/* ===== UTIL ===== */
function fmt(v){return'R$ '+v.toFixed(2).replace('.',',')}
function st(r){let s='';for(let i=1;i<=5;i++)s+=i<=Math.round(r)?'&#9733;':'&#9734;';return s}
const PUBLIC_PAGES=['page-login','page-cadastro'];
function goTo(id){
  if(!PUBLIC_PAGES.includes(id)&&!currentUser){
    toast('Faca login para continuar!','error');
    setTimeout(()=>{
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      document.getElementById('page-login').classList.add('active');
      window.scrollTo(0,0);
    },400);
    return;
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const t=document.getElementById(id);if(t)t.classList.add('active');
  window.scrollTo(0,0);upd();
  if(id==='page-perfil'&&currentUser){
    if(document.getElementById('p-no'))document.getElementById('p-no').value=currentUser.nome||'';
    if(document.getElementById('p-em'))document.getElementById('p-em').value=currentUser.email||'';
    if(document.getElementById('p-te'))document.getElementById('p-te').value=currentUser.tel||'';
    if(document.getElementById('p-cp'))document.getElementById('p-cp').value=currentUser.cpf||'';
    if(document.getElementById('p-en'))document.getElementById('p-en').value=currentUser.end||'';
    if(document.getElementById('p-ci'))document.getElementById('p-ci').value=currentUser.cidade||'';
    if(document.getElementById('p-uf'))document.getElementById('p-uf').value=currentUser.uf||'';
    if(document.getElementById('p-ce'))document.getElementById('p-ce').value=currentUser.cep||'';
  }
  if(id==='page-carrinho')rCart();
  if(id==='page-entrega')rSum('ent-s');
  if(id==='page-pagamento'){rSum('pag-s');bldParc();}
}
function goC(c){goTo('page-listagem');document.getElementById('filt-sel').value=c;document.getElementById('sort-sel').value='';isPromo=false;rl()}
function goPromo(){goTo('page-listagem');document.getElementById('filt-sel').value='';document.getElementById('sort-sel').value='desc';isPromo=true;rl()}
function goHome(){goTo('page-home')}
function tv(id){const el=document.getElementById(id);el.type=el.type==='password'?'text':'password'}
let _tt;
function toast(msg,tp='success'){const el=document.getElementById('toast');el.textContent=(tp==='success'?'✅ ':'❌ ')+msg;el.className='show '+tp;clearTimeout(_tt);_tt=setTimeout(()=>el.classList.remove('show'),3200)}
function mP(el){let v=el.value.replace(/\D/g,'');if(v.length<=10)v=v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3');else v=v.replace(/(\d{2})(\d{5})(\d{0,4})/,'($1) $2-$3');el.value=v}
function mC(el){let v=el.value.replace(/\D/g,'');v=v.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');el.value=v}
function mZ(el){let v=el.value.replace(/\D/g,'');v=v.replace(/(\d{5})(\d)/,'$1-$2');el.value=v}
function mCard(el){let v=el.value.replace(/\D/g,'').slice(0,16);el.value=v.replace(/(\d{4})/g,'$1 ').trim()}
function mVal(el){let v=el.value.replace(/\D/g,'').slice(0,4);if(v.length>=3)v=v.slice(0,2)+'/'+v.slice(2);el.value=v}
function se(eId,iId){const e=document.getElementById(eId),i=document.getElementById(iId);if(e)e.classList.add('show');if(i){i.classList.add('err');i.addEventListener('input',()=>{e&&e.classList.remove('show');i.classList.remove('err')},{once:true})}}
function upd(){
  const t=cart.reduce((s,c)=>s+c.qty,0);
  document.querySelectorAll('.cb').forEach(b=>b.textContent=t);
  // Show user name in navbar if logged in
  document.querySelectorAll('.nb-user-name').forEach(el=>{
    el.textContent=currentUser?currentUser.nome.split(' ')[0]:'';
    el.style.display=currentUser?'inline':'none';
  });
}
function doLogout(){
  currentUser=null;
  localStorage.removeItem('cmd-user');
  cart=[];
  sCart();
  goTo('page-login');
  toast('Ate logo! &#128075;','success');
}
function cTot(){return cart.reduce((s,c)=>s+c.price*c.qty,0)}
function sCart(){localStorage.setItem('cmd-c',JSON.stringify(cart));upd()}


function prodImg(id, big) {
  const src = PROD_IMGS[id];
  if(!src) return big ? '<span style="font-size:100px">&#127947;</span>' : '<span style="font-size:60px">&#127947;</span>';
  const size = big ? '90%' : '85%';
  return `<img src="${src}" alt="produto" style="width:${size};height:${size};object-fit:contain;"/>`;
}

/* ===== CARD HTML ===== */
function ch(p){return`<div class="pc" onclick="openP(${p.id})">
  <div class="pc-img">${prodImg(p.id,false)}<div class="pc-off">${p.off}% OFF</div></div>
  <div class="pc-b">
    <div class="pc-n">${p.name}</div>
    <div class="pc-s">${st(p.rating)} <span>(${p.reviews})</span></div>
    <div><span class="p-cur">${fmt(p.price)}</span><span class="p-old">${fmt(p.old)}</span></div>
  </div>
</div>`}