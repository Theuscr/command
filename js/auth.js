// auth.js — Login, cadastro, logout, sessão e perfil (GET/POST/PUT API)

/* ===== ACOES ===== */
function doLogin(){
  const em=document.getElementById('l-em').value.trim(),se2=document.getElementById('l-se').value;
  let ok=true;
  if(!em||!em.includes('@')){se('er-lem','l-em');ok=false}
  if(!se2){se('er-lse','l-se');ok=false}
  if(!ok)return;
  // Verifica se email esta cadastrado
  const users=JSON.parse(localStorage.getItem('cmd-users')||'[]');
  const found=users.find(u=>u.email===em);
  if(!found){
    se('er-lem','l-em');
    document.getElementById('er-lem').textContent='Email nao cadastrado.';
    document.getElementById('er-lem').classList.add('show');
    setTimeout(()=>{document.getElementById('er-lem').textContent='Email invalido.'},3000);
    return;
  }
  if(found.senha!==se2){
    se('er-lse','l-se');
    document.getElementById('er-lse').textContent='Senha incorreta.';
    document.getElementById('er-lse').classList.add('show');
    setTimeout(()=>{document.getElementById('er-lse').textContent='Senha obrigatoria.'},3000);
    return;
  }
  currentUser=found;
  localStorage.setItem('cmd-user',JSON.stringify(found));
  // Preenche perfil com dados do usuario
  if(document.getElementById('p-no'))document.getElementById('p-no').value=found.nome||'';
  if(document.getElementById('p-em'))document.getElementById('p-em').value=found.email||'';
  if(document.getElementById('p-te'))document.getElementById('p-te').value=found.tel||'';
  toast('Login realizado! &#127881;','success');
  setTimeout(()=>goTo('page-home'),600);
}
async function doCad(){
  const no=document.getElementById('c-no').value.trim(),em=document.getElementById('c-em').value.trim(),se2=document.getElementById('c-se').value,co=document.getElementById('c-co').value;
  let ok=true;
  if(!no){se('er-cno','c-no');ok=false}
  if(!em||!em.includes('@')){se('er-cem','c-em');ok=false}
  if(se2.length<8){se('er-cse','c-se');ok=false}
  if(se2!==co){se('er-cco','c-co');ok=false}
  if(!ok)return;
  const btn=document.getElementById('btn-cad');btn.textContent='Criando...';btn.disabled=true;
  // POST API
  try{
    const fd=new FormData();fd.append('user_id',em.replace('@','_'));fd.append('password',se2);
    await fetch('https://world.openfoodfacts.org/cgi/session.pl',{method:'POST',body:fd});
    console.log('[POST] cadastro enviado');
  }catch(e){console.warn('[POST]',e.message)}
  // Salva usuario no localStorage
  const users=JSON.parse(localStorage.getItem('cmd-users')||'[]');
  const exists=users.find(u=>u.email===em);
  if(exists){
    toast('Email ja cadastrado!','error');
    btn.textContent='Criar Conta';btn.disabled=false;
    return;
  }
  users.push({
    nome:no,email:em,senha:se2,
    tel:document.getElementById('c-te').value,
    cpf:document.getElementById('c-cp').value,
    nasc:document.getElementById('c-na').value,
    end:document.getElementById('c-en').value,
    cidade:document.getElementById('c-ci').value,
    uf:document.getElementById('c-uf').value,
    cep:document.getElementById('c-ce').value
  });
  localStorage.setItem('cmd-users',JSON.stringify(users));
  toast('Conta criada! &#127881;','success');
  setTimeout(()=>goTo('page-login'),800);
  btn.textContent='Criar Conta';btn.disabled=false;
}
function doEnt(){
  let ok=true;
  if(!document.getElementById('e-no').value.trim()){se('er-eno','e-no');ok=false}
  const em=document.getElementById('e-em').value.trim();
  if(!em||!em.includes('@')){se('er-eem','e-em');ok=false}
  if(!document.getElementById('e-en').value.trim()){se('er-een','e-en');ok=false}
  if(!ok)return;
  goTo('page-pagamento');
}
async function savePerfil(){
  if(!currentUser)return;
  const loader = document.getElementById('api-loading');
  const loaderMsg = document.getElementById('api-loading-msg');
  const btn = document.querySelector('#page-perfil .btn-p');
  if(btn){btn.textContent='Salvando...';btn.disabled=true;}
  const updated={
    ...currentUser,
    nome:document.getElementById('p-no').value,
    tel:document.getElementById('p-te').value,
    cpf:document.getElementById('p-cp').value,
    end:document.getElementById('p-en').value,
    cidade:document.getElementById('p-ci').value,
    uf:document.getElementById('p-uf').value,
    cep:document.getElementById('p-ce').value,
  };
  // PUT na API OpenFoodFacts (simulando atualização de perfil)
  loaderMsg.textContent = 'Atualizando perfil...';
  loader.classList.add('show');
  try {
    const fd = new FormData();
    fd.append('user_id', currentUser.email.replace('@','_').replace('.','_'));
    fd.append('name', updated.nome);
    fd.append('email', updated.email);
    const r = await fetch('https://world.openfoodfacts.org/cgi/session.pl', {
      method: 'PUT',
      body: fd
    });
    console.log('[PUT] perfil status:', r.status);
  } catch(e){
    console.warn('[PUT] perfil:', e.message);
    // PUT falhou mas salvamos local mesmo assim
  } finally {
    loader.classList.remove('show');
  }
  // Salva localmente sempre
  const users=JSON.parse(localStorage.getItem('cmd-users')||'[]');
  const idx=users.findIndex(u=>u.email===currentUser.email);
  if(idx>=0)users[idx]=updated;
  localStorage.setItem('cmd-users',JSON.stringify(users));
  currentUser=updated;
  localStorage.setItem('cmd-user',JSON.stringify(updated));
  upd();
  toast('Perfil atualizado! &#10003;','success');
  if(btn){btn.textContent='SALVAR';btn.disabled=false;}
}
function doNL(){const em=document.getElementById('nl').value.trim();if(!em||!em.includes('@')){toast('Digite um email valido!','error');return}toast('Inscricao realizada! &#128231;','success');document.getElementById('nl').value=''}