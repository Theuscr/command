// ============================================================
// pagamento.js — Métodos de pagamento e finalização do pedido
// ============================================================

/* ===== PAGAMENTO ===== */
function selPay(m){
  payM=m;
  ['pix','card','bolt'].forEach(x=>document.getElementById('pm-'+x).classList.toggle('active',x===m));
  document.getElementById('pix-sec').style.display=m==='pix'?'block':'none';
  document.getElementById('card-sec').style.display=m==='card'?'block':'none';
  document.getElementById('bolt-sec').style.display=m==='bolt'?'block':'none';
}
function bldParc(){
  const tot=cTot(),sel=document.getElementById('cparc');if(!sel)return;
  sel.innerHTML='';
  [1,2,3,6,10,12].forEach(n=>{
    const op=document.createElement('option');op.value=n;
    op.textContent=n+'x de '+fmt(tot/n)+(n>6?' (com juros)':' sem juros');
    sel.appendChild(op);
  });
}
function copyPix(){
  navigator.clipboard?.writeText('command-fitness@pix.com.br').then(()=>toast('Chave PIX copiada!','success')).catch(()=>toast('Chave: command-fitness@pix.com.br','success'));
}
function doPag(){
  if(payM==='card'){
    let ok=true;
    if(document.getElementById('cn').value.replace(/\s/g,'').length<16){se('er-cn','cn');ok=false}
    if(!document.getElementById('cno').value.trim()){se('er-cno2','cno');ok=false}
    if(document.getElementById('cval').value.length<5){se('er-cval','cval');ok=false}
    if(document.getElementById('ccvv').value.length<3){se('er-ccvv','ccvv');ok=false}
    if(!ok)return;
  }
  const btn=document.getElementById('btn-pag');
  if(btn){btn.textContent='Processando...';btn.disabled=true}
  setTimeout(()=>{
    document.getElementById('cfm-num').textContent='Pedido #CMD-'+Date.now().toString().slice(-6);
    cart=[];sCart();
    goTo('page-confirmacao');
    if(btn){btn.textContent='Finalizar Compra';btn.disabled=false}
  },1800);
}