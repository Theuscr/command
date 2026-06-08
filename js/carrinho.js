// ============================================================
// carrinho.js — Estado e funções do carrinho de compras
// ============================================================

/* ===== CART ===== */
function addC(id){
  const p=PRODS.find(x=>x.id===id);if(!p)return;
  const ex=cart.find(c=>c.id===id&&c.f===(selF||'Padrao'));
  if(ex)ex.qty+=qty;
  else cart.push({id:p.id,name:p.name,price:p.price,emo:p.emo,f:selF||'Padrao',qty,cat:p.cat});
  sCart();toast(p.name+' adicionado! &#128722;','success');
}
function bNow(id){addC(id);goTo('page-carrinho')}
function rmC(id,f){cart=cart.filter(c=>!(c.id===id&&c.f===f));sCart();rCart()}
function cCQty(id,f,d){const it=cart.find(c=>c.id===id&&c.f===f);if(it)it.qty=Math.max(1,it.qty+d);sCart();rCart()}

function rCart(){
  const tot=cTot(),fr=tot>=100?0:19.90;
  const m=document.getElementById('cart-m'),s=document.getElementById('cart-s');
  if(!cart.length){
    m.innerHTML=`<div class="cc" style="text-align:center;padding:60px 24px"><div style="font-size:64px;margin-bottom:16px">&#128722;</div><h3 style="margin-bottom:8px">Carrinho vazio</h3><p style="color:var(--gray3);margin-bottom:24px">Adicione produtos para continuar</p><button class="btn btn-p" onclick="goTo('page-listagem')">Ver Produtos</button></div>`;
  }else{
    m.innerHTML=`<div class="cc"><h3>Seu Carrinho (${cart.reduce((s,c)=>s+c.qty,0)} ${cart.reduce((s,c)=>s+c.qty,0)===1?'item':'itens'})</h3>
    ${cart.map(c=>`<div class="ci">
      <div class="ci-th" style="overflow:hidden">${prodImg(c.id,false)}</div>
      <div class="ci-in"><strong>${c.name}</strong><small>${c.cat==='roupas'?'Tamanho':'Sabor'}: ${c.f}</small>
        <div class="cqy"><button onclick="cCQty(${c.id},'${c.f}',-1)">&#8722;</button><span>${c.qty}</span><button onclick="cCQty(${c.id},'${c.f}',1)">+</button></div>
      </div>
      <div class="ci-p"><strong>${fmt(c.price*c.qty)}</strong><small>${fmt(c.price)} cada</small></div>
      <button class="ci-rm" onclick="rmC(${c.id},'${c.f}')">&#128465;</button>
    </div>`).join('')}
    <button class="btn btn-p btn-f" style="margin-top:16px" onclick="goTo('page-entrega')">Continuar para Entrega</button></div>`;
  }
  s.innerHTML=sumH(tot,fr);
}
function sumH(tot,fr){
  if(tot===0) return`<h4>Resumo do Pedido</h4><p style="color:var(--gray3);font-size:13px;text-align:center;padding:12px 0">Nenhum produto no carrinho.</p>`;
  return`<h4>Resumo do Pedido</h4>
  <div class="sr2"><span>Subtotal</span><span>${fmt(tot)}</span></div>
  <div class="sr2"><span>Frete</span><span class="sf">${fr===0?'Gratis':fmt(fr)}</span></div>
  <div class="sr2 tot"><span>Total</span><span>${fmt(tot+fr)}</span></div>`;
}
function rSum(elId){const tot=cTot(),fr=tot>=100?0:19.90;const el=document.getElementById(elId);if(el)el.innerHTML=sumH(tot,fr)}