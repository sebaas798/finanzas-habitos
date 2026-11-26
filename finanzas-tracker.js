// ═══ CONSTANTS ═══
const USERS_KEY='fh_users',CU_KEY='fh_current_user';
const MONTHS=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DEF_BUDGETS=[{name:'Comida',icon:'🍔',limit:400},{name:'Transporte',icon:'🚗',limit:150},{name:'Salidas',icon:'🎉',limit:200},{name:'Ahorro',icon:'💰',limit:500},{name:'Vivienda',icon:'🏠',limit:700},{name:'Servicios',icon:'💡',limit:100},{name:'Tecnología',icon:'💻',limit:100}];
const DEF_GOALS=[{name:'Ejercicio',icon:'🏃',type:'habit',color:'#22d47a',desc:'30 minutos de actividad física',done:false},{name:'Lectura',icon:'📚',type:'habit',color:'#4f8ef7',desc:'20 minutos al día',done:false},{name:'Agua',icon:'💧',type:'habit',color:'#06b6d4',desc:'Tomar 2 litros',done:false}];
const BUDGET_COLORS=['#4f8ef7','#a78bfa','#22d47a','#fbbf24','#fb923c','#f05252','#06b6d4','#ec4899','#84cc16','#8b5cf6'];
const GOAL_COLORS=['#4f8ef7','#22d47a','#a78bfa','#fbbf24','#fb923c','#f05252','#06b6d4','#ec4899','#22d3ee','#84cc16'];
const EMOJIS=['🏃','💪','📚','💧','🧘','🍎','💤','🎯','💰','✍️','🎨','🏋️','🚴','🎸','🌱','❤️','🧠','💻','🎓','🏊','🥗','☀️','🌙','⭐','🔥','✅','🏆','🎵'];
const CAT_ICONS={'Comida':'🍔','Transporte':'🚗','Salidas':'🎉','Ahorro':'💰','Vivienda':'🏠','Servicios':'💡','Tecnología':'💻','Salud':'🏥','Educación':'📚','Ropa':'👕','Suscripciones':'📱','Otros':'📦'};
const EV_COLORS=['#4f8ef7','#22d47a','#f05252','#fbbf24','#a78bfa','#fb923c','#ec4899','#06b6d4','#84cc16','#64748b'];
const MOODS={great:{emoji:'😄',color:'rgba(34,212,122,.35)',label:'Excelente'},good:{emoji:'😊',color:'rgba(79,142,247,.3)',label:'Bien'},neutral:{emoji:'😐',color:'rgba(251,191,36,.3)',label:'Normal'},bad:{emoji:'😕',color:'rgba(251,146,60,.3)',label:'Mal'},awful:{emoji:'😢',color:'rgba(240,82,82,.35)',label:'Muy mal'}};
const BADGES=[
  {id:'first_step',icon:'👣',name:'Primer paso',desc:'Registraste tu primera transacción',rarity:'common'},
  {id:'first_income',icon:'💸',name:'Primer ingreso',desc:'Registraste tu primer ingreso',rarity:'common'},
  {id:'habit_start',icon:'🌱',name:'Hábito en marcha',desc:'Completaste un hábito por primera vez',rarity:'common'},
  {id:'week_budget',icon:'🛡️',name:'Semana impecable',desc:'Una semana pasada sin exceder presupuesto',rarity:'silver'},
  {id:'perfect_day',icon:'⭐',name:'Día perfecto',desc:'Todos los hábitos en un día (mín. 2)',rarity:'silver'},
  {id:'journal_7',icon:'📖',name:'Escritor constante',desc:'7 días consecutivos con diario',rarity:'silver'},
  {id:'streak_7',icon:'🔥',name:'Racha de fuego',desc:'7 días seguidos con un hábito',rarity:'silver'},
  {id:'saver_20',icon:'💰',name:'Ahorrador',desc:'Ahorraste más del 20% en un mes pasado',rarity:'silver'},
  {id:'income_goal_1',icon:'🎯',name:'Meta cumplida',desc:'Alcanzaste tu meta de ingresos mensual',rarity:'silver'},
  {id:'streak_30',icon:'🔥',name:'Mes de fuego',desc:'30 días seguidos con un hábito',rarity:'gold'},
  {id:'saver_50',icon:'💎',name:'Super ahorrador',desc:'Ahorraste más del 50% en un mes pasado',rarity:'gold'},
  {id:'income_goal_3',icon:'🏆',name:'Tricampeón',desc:'Meta de ingresos 3 meses seguidos',rarity:'gold'},
  {id:'no_exceed_month',icon:'👑',name:'Mes perfecto',desc:'Mes pasado sin exceder presupuesto (mín. 3 gastos)',rarity:'platinum'},
  {id:'streak_100',icon:'💫',name:'Centenario',desc:'100 días seguidos con un hábito',rarity:'platinum'},
];
const BIBLE_VERSES=[
  {text:'Confía en el Señor de todo tu corazón, y no te apoyes en tu propia prudencia; reconócelo en todos tus caminos, y él enderezará tus veredas.',ref:'Proverbios 3:5-6'},
  {text:'El corazón alegre es buena medicina, pero el espíritu triste seca los huesos.',ref:'Proverbios 17:22'},
  {text:'La sabiduría es lo principal; adquiere sabiduría, y sobre todas tus posesiones adquiere entendimiento.',ref:'Proverbios 4:7'},
  {text:'El Señor es mi pastor; nada me faltará.',ref:'Salmos 23:1'},
  {text:'Este es el día que el Señor ha hecho; alegrémonos y regocijémonos en él.',ref:'Salmos 118:24'},
  {text:'Deléitate en el Señor, y él te dará las peticiones de tu corazón.',ref:'Salmos 37:4'},
  {text:'Todo lo puedo en Cristo que me fortalece.',ref:'Filipenses 4:13'},
  {text:'Porque yo sé los pensamientos que tengo acerca de vosotros, dice el Señor, pensamientos de paz y no de mal.',ref:'Jeremías 29:11'},
  {text:'Pero los que esperan en el Señor renovarán sus fuerzas; volarán como las águilas.',ref:'Isaías 40:31'},
  {text:'El temor del Señor es el principio de la sabiduría.',ref:'Proverbios 1:7'},
  {text:'La esperanza que se demora enferma el corazón, pero el deseo cumplido es árbol de vida.',ref:'Proverbios 13:12'},
  {text:'Más vale adquirir sabiduría que oro; más vale adquirir inteligencia que plata.',ref:'Proverbios 16:16'},
  {text:'Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.',ref:'Salmos 46:1'},
  {text:'El hombre propone, pero Dios dispone.',ref:'Proverbios 16:9'},
  {text:'Todo lo que hacéis, hacedlo de corazón, como para el Señor y no para los hombres.',ref:'Colosenses 3:23'},
  {text:'El que trabaja su tierra tendrá abundancia de pan.',ref:'Proverbios 28:19'},
  {text:'No os afanéis por ninguna cosa; antes bien, en todo, mediante oración y súplica con acción de gracias, sean dadas a conocer vuestras peticiones delante de Dios.',ref:'Filipenses 4:6'},
  {text:'El corazón del hombre piensa su camino, pero el Señor dirige sus pasos.',ref:'Proverbios 16:9'},
  {text:'Un amigo ama en todo tiempo, y un hermano nace para el tiempo de angustia.',ref:'Proverbios 17:17'},
  {text:'Encomienda al Señor tu camino, confía en él, y él actuará.',ref:'Salmos 37:5'},
];

// ═══ STATE ═══
let state={user:null,budgets:[],transactions:[],goals:[],dayEntries:{},settings:{},achievements:[],savingsGoals:[]};
let currentUserId=null;
let viewYear=new Date().getFullYear(),viewMonth=new Date().getMonth();
let calYear=new Date().getFullYear(),calMonth=new Date().getMonth();
let viewPeriod='week',txnType='income',currentView='dashboard';
let editingGoalId=null,selectedEmoji='🎯',selectedColor='#4f8ef7',selectedGoalType='habit';
let activeDayDate=null,pendingDate=null,_editingTxnId=null;
let chartMonthly=null,chartDonut=null,chartProjection=null;
let calHeatMode='spending';
let dashCompact=false;
let _confettiGoalShown=false,_confettiHabitsDate=null;
let _hcGoalId=null,_hcYear=new Date().getFullYear(),_hcMonth=new Date().getMonth();
let _editSGId=null,_contribGoalId=null;
let _evColor=EV_COLORS[0];
let setupCurrency={code:'USD',symbol:'$'};

// ═══ UTILITIES ═══
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
function todayStr(){return new Date().toISOString().split('T')[0]}
function getCurrencySymbol(){return state?.settings?.currencySymbol||'$'}
function fmt(n){return getCurrencySymbol()+Math.abs(n).toLocaleString('es',{minimumFractionDigits:0,maximumFractionDigits:2})}
async function hashPw(pw){const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(pw));return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('')}
function getUsers(){try{return JSON.parse(localStorage.getItem(USERS_KEY)||'[]')}catch{return[]}}
function setUsers(u){localStorage.setItem(USERS_KEY,JSON.stringify(u))}
function saveState(){if(currentUserId)localStorage.setItem('fh_data_'+currentUserId,JSON.stringify(state))}
function loadState(id){try{const r=localStorage.getItem('fh_data_'+id);return r?JSON.parse(r):null}catch{return null}}
function toast(msg,ms=3000){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),ms)}
function getDailyVerse(){const s=new Date(new Date().getFullYear(),0,0);const d=Math.floor((new Date()-s)/864e5);return BIBLE_VERSES[d%BIBLE_VERSES.length]}

// ═══ PARTICLES ═══
window.startParticles=function(){};
window.stopParticles=function(){};
(function(){
  const cv=document.getElementById('bg-canvas');if(!cv)return;
  const ctx=cv.getContext('2d');let P=[],raf=null,active=false;
  function resize(){cv.width=window.innerWidth;cv.height=window.innerHeight}
  function init(){P=[];const n=Math.min(90,Math.floor(cv.width*cv.height/14000));for(let i=0;i<n;i++)P.push({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*1.3+.3,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,a:Math.random()*.35+.04})}
  function draw(){ctx.clearRect(0,0,cv.width,cv.height);P.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(96,165,250,${p.a})`;ctx.fill();p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=cv.width;if(p.x>cv.width)p.x=0;if(p.y<0)p.y=cv.height;if(p.y>cv.height)p.y=0});if(active)raf=requestAnimationFrame(draw)}
  window.startParticles=function(){if(active)return;active=true;resize();init();draw();cv.style.opacity='.55'};
  window.stopParticles=function(){active=false;if(raf){cancelAnimationFrame(raf);raf=null}ctx.clearRect(0,0,cv.width,cv.height);cv.style.opacity='0'};
  window.addEventListener('resize',()=>{if(active){resize();init()}});
})();

// ═══ AUTH ═══
function showAuthScreen(){try{['app','setup-screen'].forEach(id=>{const el=document.getElementById(id);if(el){el.classList.add('hidden');el.style.display=''}});['fab'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.add('hidden')});const a=document.getElementById('auth-screen');if(a)a.classList.remove('hidden')}catch(e){console.error(e)}}

(function initAuth(){
  try{
    const cuid=localStorage.getItem(CU_KEY);
    if(cuid){
      let users=[];try{users=getUsers()}catch{}
      const u=users.find(x=>x.id===cuid);
      if(u){
        currentUserId=cuid;
        let saved=null;try{saved=loadState(cuid)}catch{}
        if(saved&&saved.user){state={goals:[],dayEntries:{},settings:{},achievements:[],savingsGoals:[],...saved};showApp();return}
        showSetup();return;
      }
    }
  }catch(e){console.warn('initAuth:',e)}
  showAuthScreen();
})();

function switchAuthTab(tab){
  document.getElementById('tab-login').classList.toggle('active',tab==='login');
  document.getElementById('tab-register').classList.toggle('active',tab==='register');
  document.getElementById('login-form').classList.toggle('hidden',tab!=='login');
  document.getElementById('register-form').classList.toggle('hidden',tab!=='register');
  document.getElementById('login-err').textContent='';
  document.getElementById('register-err').textContent='';
}
async function doLogin(){
  const email=document.getElementById('l-email').value.trim().toLowerCase();
  const pass=document.getElementById('l-pass').value;
  const err=document.getElementById('login-err');
  if(!email||!pass){err.textContent='Completá todos los campos.';return}
  const hash=await hashPw(pass);
  const u=getUsers().find(x=>x.email===email&&x.passwordHash===hash);
  if(!u){err.textContent='Email o contraseña incorrectos.';return}
  currentUserId=u.id;localStorage.setItem(CU_KEY,u.id);
  const saved=loadState(u.id);
  if(saved)state={goals:[],dayEntries:{},settings:{},achievements:[],savingsGoals:[],...saved};
  document.getElementById('auth-screen').classList.add('hidden');
  if(state.user)showApp();else showSetup();
}
async function doRegister(){
  const name=document.getElementById('r-name').value.trim();
  const email=document.getElementById('r-email').value.trim().toLowerCase();
  const pass=document.getElementById('r-pass').value;
  const pass2=document.getElementById('r-pass2').value;
  const err=document.getElementById('register-err');
  if(!name||!email||!pass){err.textContent='Completá todos los campos.';return}
  if(pass.length<6){err.textContent='Mínimo 6 caracteres.';return}
  if(pass!==pass2){err.textContent='Las contraseñas no coinciden.';return}
  const users=getUsers();
  if(users.find(x=>x.email===email)){err.textContent='Ya existe una cuenta con ese email.';return}
  const hash=await hashPw(pass);
  const nu={id:uid(),name,email,passwordHash:hash};
  users.push(nu);setUsers(users);
  currentUserId=nu.id;localStorage.setItem(CU_KEY,nu.id);
  state={user:null,budgets:DEF_BUDGETS.map(b=>({...b,id:uid()})),transactions:[],goals:[],dayEntries:{},settings:{},achievements:[],savingsGoals:[]};
  document.getElementById('auth-screen').classList.add('hidden');
  showSetup();
}
function doLogout(){
  saveState();currentUserId=null;localStorage.removeItem(CU_KEY);
  state={user:null,budgets:[],transactions:[],goals:[],dayEntries:{},settings:{},achievements:[],savingsGoals:[]};
  closeModal('settings-modal');
  document.getElementById('app').classList.add('hidden');
  document.getElementById('fab').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
  switchAuthTab('login');
  document.getElementById('l-email').value='';
  document.getElementById('l-pass').value='';
}

// ═══ SETUP ═══
function selectSetupCur(el){
  document.querySelectorAll('.cur-btn').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected');
  setupCurrency={code:el.dataset.code,symbol:el.dataset.sym};
}
function showSetup(){
  ['auth-screen','app'].forEach(id=>document.getElementById(id).classList.add('hidden'));
  document.getElementById('setup-screen').classList.remove('hidden');
  document.getElementById('fab').classList.add('hidden');
  renderSetupBudgets();
}
function goStep2(){
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
  document.getElementById('pill-1').classList.replace('active','done');
  document.getElementById('pill-2').classList.add('active');
}
function goStep1(){
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
  document.getElementById('pill-2').classList.remove('active');
  document.getElementById('pill-1').classList.replace('done','active');
}
function renderSetupBudgets(){document.getElementById('budget-setup-list').innerHTML=state.budgets.map(b=>budgetRowHTML(b,'setup')).join('')}
function budgetRowHTML(b,ctx){return`<div class="brow" id="brow-${b.id}"><span style="font-size:1.1rem;width:24px;text-align:center;flex-shrink:0">${b.icon||'📦'}</span><input class="brow-name" value="${b.name}" placeholder="Categoría" data-id="${b.id}" data-field="name" oninput="updateBF(this)"/><input class="brow-amt" type="number" value="${b.limit}" min="0" data-id="${b.id}" data-field="limit" oninput="updateBF(this)"/><button class="brow-del" onclick="removeBRow('${b.id}','${ctx}')">✕</button></div>`}
function updateBF(el){const b=state.budgets.find(x=>x.id===el.dataset.id);if(b)b[el.dataset.field]=el.dataset.field==='limit'?(parseFloat(el.value)||0):el.value}
function removeBRow(id,ctx){state.budgets=state.budgets.filter(b=>b.id!==id);ctx==='setup'?renderSetupBudgets():renderEBList()}
function addBudgetRow(ctx='setup'){const b={id:uid(),name:'',icon:'📦',limit:0};state.budgets.push(b);ctx==='setup'?renderSetupBudgets():renderEBList();setTimeout(()=>{const el=document.querySelector(`#brow-${b.id} .brow-name`);if(el)el.focus()},50)}
function finishSetup(){
  const users=getUsers();const u=users.find(x=>x.id===currentUserId);
  state.user={name:u?u.name:'Usuario',email:u?u.email:'',expectedIncome:0};
  state.budgets=state.budgets.filter(b=>b.name.trim());
  if(!state.goals.length)state.goals=DEF_GOALS.map(g=>({...g,id:uid()}));
  state.settings={...(state.settings||{}),currencyCode:setupCurrency.code,currencySymbol:setupCurrency.symbol};
  saveState();
  document.getElementById('setup-screen').classList.add('hidden');
  showApp();
}

// ═══ APP ═══
function showApp(){
  try{
    if(!state.user)throw new Error('no user');
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('app').style.display='flex';
    document.getElementById('fab').classList.remove('hidden');
    document.getElementById('app-name').textContent=state.user.name;
    try{updateAvatarDisplay();updateDrawerUser()}catch{}
    const cfg=state.settings||{};
    try{setTheme(cfg.theme||'dark')}catch{}
    const VALID=['home','dashboard','calendar','goals'];
    const last=localStorage.getItem('fh_view_'+currentUserId)||'home';
    try{switchView(VALID.includes(last)?last:'home',false)}catch(e){console.warn(e)}
    ['auth-screen','setup-screen'].forEach(id=>document.getElementById(id).classList.add('hidden'));
    try{revalidateBadges()}catch{}
  }catch(e){
    console.error('showApp:',e);
    localStorage.removeItem(CU_KEY);currentUserId=null;
    showAuthScreen();
  }
}
function openDrawer(){document.getElementById('drawer').classList.add('open');document.getElementById('drawer-overlay').classList.add('open')}
function closeDrawer(){document.getElementById('drawer').classList.remove('open');document.getElementById('drawer-overlay').classList.remove('open')}
function drawerNav(v){closeDrawer();switchView(v)}
function updateDrawerUser(){
  if(!state.user)return;
  const initials=state.user.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const da=document.getElementById('drawer-avatar');
  if(da)da.innerHTML=state.user.photo?`<img src="${state.user.photo}" alt="foto" style="width:100%;height:100%;object-fit:cover">`:`<span>${initials}</span>`;
  const dn=document.getElementById('drawer-uname');if(dn)dn.textContent=state.user.name;
  const de=document.getElementById('drawer-uemail');if(de)de.textContent=state.user.email||'';
}
function updateAvatarDisplay(){
  if(!state.user)return;
  const initials=state.user.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const av=document.getElementById('app-avatar');
  if(av)av.innerHTML=state.user.photo?`<img src="${state.user.photo}" alt="foto" style="width:100%;height:100%;object-fit:cover">`:`<span>${initials}</span>`;
  const prev=document.getElementById('photo-preview');
  if(prev)prev.innerHTML=state.user.photo?`<img src="${state.user.photo}" alt="foto" style="width:100%;height:100%;object-fit:cover">`:`<span>${initials}</span>`;
}
function switchView(v,scroll=true){
  currentView=v;
  if(currentUserId)localStorage.setItem('fh_view_'+currentUserId,v);
  ['home','dashboard','calendar','goals'].forEach(n=>{
    document.getElementById(`view-${n}`).classList.toggle('hidden',n!==v);
    const drt=document.getElementById('drtab-'+n);if(drt)drt.classList.toggle('active',n===v);
    const tab=document.getElementById('tab-'+n);if(tab)tab.classList.toggle('active',n===v);
  });
  requestAnimationFrame(()=>{
    if(v==='home')renderHomeView();
    if(v==='dashboard')updateAll();
    if(v==='calendar')renderCalendar();
    if(v==='goals')renderGoals();
  });
  if(scroll)window.scrollTo({top:0,behavior:'smooth'});
}
function fabAction(){currentView==='calendar'?openDayModal(todayStr()):openAddModal()}
function toggleCompact(){
  dashCompact=!dashCompact;
  document.getElementById('compact-collapse').classList.toggle('collapsed',dashCompact);
  document.getElementById('compact-btn').textContent=dashCompact?'⊞ Expandir':'⊟ Compacto';
}

// ═══ INCOME GOAL ═══
function openGoalInput(){
  document.getElementById('igb-edit-wrap').style.display='';
  document.getElementById('igb-no-goal').style.display='none';
  document.getElementById('igb-track-wrap').style.display='none';
  document.getElementById('igb-sym').textContent=getCurrencySymbol();
  const inp=document.getElementById('igb-goal-input');
  inp.value=state.user.expectedIncome||'';
  setTimeout(()=>inp.focus(),50);
}
function cancelGoalInput(){document.getElementById('igb-edit-wrap').style.display='none';updateCards()}
function saveGoalInline(){
  const val=parseFloat(document.getElementById('igb-goal-input').value)||0;
  state.user.expectedIncome=val;saveState();
  document.getElementById('igb-edit-wrap').style.display='none';
  updateCards();toast(val>0?`✓ Meta fijada: ${fmt(val)}`:'Meta eliminada');
}

// ═══ DASHBOARD ═══
function updateAll(){updateMonthLabel();updateCards();updateBudgetCards();renderTransactions();renderChartMonthly();renderChartDonut();renderProjectionChart();updateCatSelect();renderSavingsGoals();try{checkAllBadges()}catch{}}
function updateMonthLabel(){document.getElementById('month-label').textContent=`${MONTHS[viewMonth]} ${viewYear}`}
function changeMonth(d){viewMonth+=d;if(viewMonth>11){viewMonth=0;viewYear++}if(viewMonth<0){viewMonth=11;viewYear--}updateAll()}
function getMonthTxns(y,m){const p=`${y}-${String(m+1).padStart(2,'0')}`;return state.transactions.filter(t=>t.date.startsWith(p))}
function getWeekRange(){const d=new Date();const day=d.getDay();const mon=new Date(d);mon.setDate(d.getDate()-(day===0?6:day-1));const sun=new Date(mon);sun.setDate(mon.getDate()+6);const f=x=>x.toISOString().split('T')[0];return{start:f(mon),end:f(sun)}}

function updateCards(){
  const txns=getMonthTxns(viewYear,viewMonth);
  const inc=txns.filter(t=>t.type==='income'),exp=txns.filter(t=>t.type==='expense');
  const tIn=inc.reduce((s,t)=>s+t.amount,0),tOut=exp.reduce((s,t)=>s+t.amount,0);
  const bal=tIn-tOut,sav=tIn>0?Math.round((bal/tIn)*100):0;
  document.getElementById('c-inc').textContent=fmt(tIn);
  document.getElementById('c-inc-n').textContent=`${inc.length} transacción${inc.length!==1?'es':''}`;
  document.getElementById('c-exp').textContent=fmt(tOut);
  document.getElementById('c-exp-n').textContent=`${exp.length} transacción${exp.length!==1?'es':''}`;
  const balEl=document.getElementById('c-bal');
  balEl.textContent=(bal<0?'-':'')+fmt(bal);balEl.style.color=bal>=0?'var(--green)':'var(--red)';
  document.getElementById('c-bal-sub').textContent=`Ahorro: ${sav}%`;
  const goal=state.user.expectedIncome||0,pct=goal>0?Math.min(100,Math.round((tIn/goal)*100)):0;
  document.getElementById('igb-recv').textContent=fmt(tIn);
  document.getElementById('igb-of').textContent=goal>0?`de ${fmt(goal)}`:'';
  const ew=document.getElementById('igb-edit-wrap');
  if(ew&&ew.style.display!=='none')return;
  const tw=document.getElementById('igb-track-wrap');
  const ng=document.getElementById('igb-no-goal');
  if(goal>0){
    if(tw)tw.style.display='';if(ng)ng.style.display='none';
    document.getElementById('igb-fill').style.width=pct+'%';
    document.getElementById('igb-note').textContent=pct>=100?'¡Meta cumplida! 🎉':`Faltan ${fmt(goal-tIn)} para tu meta (${pct}%)`;
    if(pct>=100)maybeConfettiGoal(tIn,goal);
  }else{if(tw)tw.style.display='none';if(ng)ng.style.display=''}
}

function radialSVG(pct,color){
  const r=20,circ=2*Math.PI*r;
  const filled=Math.min(pct,100)/100*circ,gap=circ-filled;
  return`<svg width="60" height="60" viewBox="0 0 50 50" style="transform:rotate(-90deg)"><circle cx="25" cy="25" r="${r}" fill="none" stroke="var(--border)" stroke-width="5"/><circle cx="25" cy="25" r="${r}" fill="none" stroke="${color}" stroke-width="5" stroke-dasharray="${filled.toFixed(1)} ${gap.toFixed(1)}" stroke-linecap="round" style="transition:stroke-dasharray .6s ease"/></svg>`;
}
function updateBudgetCards(){
  const mExp=getMonthTxns(viewYear,viewMonth).filter(t=>t.type==='expense');
  const c=document.getElementById('budget-cards');
  if(!state.budgets.length){c.innerHTML=`<div style="color:var(--muted);font-size:.84rem;padding:10px 0">Sin categorías. <span style="color:var(--blue);cursor:pointer" onclick="openEditBudgets()">Agregar →</span></div>`;return}
  c.innerHTML=state.budgets.map((b,i)=>{
    const spent=mExp.filter(t=>(t.category||'').toLowerCase()===b.name.toLowerCase()).reduce((s,t)=>s+t.amount,0);
    const pct=b.limit>0?Math.min(100,Math.round((spent/b.limit)*100)):0;
    const rawColor=pct>=90?'#f05252':pct>=65?'#fbbf24':BUDGET_COLORS[i%BUDGET_COLORS.length];
    if(pct>=100&&Notification.permission==='granted'&&state.settings?.notifBrowser)new Notification('⚠ Presupuesto excedido',{body:`${b.icon} ${b.name}: superaste ${fmt(b.limit)}`});
    const rem=b.limit-spent;
    return`<div class="bcard bcard-radial"><div class="bcard-ring">${radialSVG(pct,rawColor)}<div class="bcard-ring-pct" style="color:${rawColor}">${pct}%</div></div><div class="bcard-body"><div class="bcard-name"><span>${b.icon||'📦'}</span><span>${b.name}</span></div><div class="bcard-spent-val" style="color:${rawColor}">${fmt(spent)}</div><div class="bcard-limit">de ${fmt(b.limit)}</div><div class="bcard-rem" style="color:${rem>=0?'var(--green)':'var(--red)'}">${rem>=0?fmt(rem)+' disponible':fmt(-rem)+' excedido'}</div></div></div>`;
  }).join('');
}
function setPeriod(p,btn){viewPeriod=p;document.querySelectorAll('.ptab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderTransactions()}
function switchPeriod(p){viewPeriod=p;document.querySelectorAll('.ptab').forEach(b=>b.classList.toggle('active',b.textContent.trim()==='Todo'&&p==='all'));renderTransactions()}
function renderTransactions(){
  const q=(document.getElementById('txn-search')?.value||'').toLowerCase().trim();
  let txns;
  if(q){txns=[...state.transactions].filter(t=>{const lbl=t.type==='income'?(t.source||''):(t.category||'');return(t.description||'').toLowerCase().includes(q)||lbl.toLowerCase().includes(q)||String(t.amount).includes(q)})}
  else{txns=viewPeriod==='month'?getMonthTxns(viewYear,viewMonth):viewPeriod==='week'?(()=>{const{start,end}=getWeekRange();return state.transactions.filter(t=>t.date>=start&&t.date<=end)})():[...state.transactions]}
  txns=txns.sort((a,b)=>b.date.localeCompare(a.date));
  const list=document.getElementById('txn-list');
  if(!txns.length){
    const lbs={week:'esta semana',month:'este mes',all:'ninguna transacción aún'};
    const msg=q?`Sin resultados para "<strong>${q}</strong>"`:`Sin movimientos ${lbs[viewPeriod]}.`;
    const hint=(!q&&viewPeriod!=='all'&&state.transactions.length>0)?`<br><span style="font-size:.78rem;color:var(--muted)">Usá <strong>Todo</strong> o la búsqueda para ver otros períodos.</span>`:'';
    list.innerHTML=`<div class="empty-state"><div class="ei">💸</div><p>${msg}${hint}</p></div>`;return;
  }
  const hidden=state.transactions.length-txns.length;
  const banner=(hidden>0&&!q&&viewPeriod!=='all')?`<div style="font-size:.77rem;color:var(--muted);text-align:center;padding:8px 0 4px">${hidden} transacción${hidden!==1?'es':''} en otros períodos — <span style="color:var(--blue);cursor:pointer;font-weight:700" onclick="switchPeriod('all')">Ver todas →</span></div>`:'';
  list.innerHTML=banner+txns.map(t=>{
    const isIn=t.type==='income';const lbl=isIn?(t.source||'Ingreso'):(t.category||'Gasto');
    const icon=isIn?'📈':(CAT_ICONS[t.category]||'📦');
    const ds=new Date(t.date+'T12:00:00').toLocaleDateString('es',{day:'numeric',month:'short',year:'numeric'});
    const ri=t.receipt?`<span class="txn-receipt-icon" onclick="openLightbox('${t.id}')">🧾</span>`:'';
    return`<div class="txn-item"><div class="txn-ico ${t.type}">${icon}</div><div class="txn-inf"><div class="txn-desc">${t.description||lbl}</div><div class="txn-meta">${ds} · ${lbl}</div></div><div class="txn-amt ${t.type}">${isIn?'+':'−'}${fmt(t.amount)}</div>${ri}<button class="txn-edit" onclick="editTxn('${t.id}')" title="Editar">✎</button><button class="txn-del" onclick="deleteTxn('${t.id}')" title="Eliminar">✕</button></div>`;
  }).join('');
}
function deleteTxn(id){state.transactions=state.transactions.filter(t=>t.id!==id);saveState();updateAll()}
function editTxn(id){
  const t=state.transactions.find(x=>x.id===id);if(!t)return;
  _editingTxnId=id;
  document.getElementById('add-modal-title').textContent='Editar transacción';
  updateCatSelect();setTxnType(t.type);
  if(t.type==='income')document.getElementById('m-src').value=t.source||'';
  else document.getElementById('m-cat').value=t.category||'';
  document.getElementById('m-amt').value=t.amount;
  document.getElementById('m-desc').value=t.description||'';
  document.getElementById('m-date').value=t.date;
  const prev=document.getElementById('m-receipt-preview');
  const rm=document.getElementById('m-receipt-remove');
  if(t.receipt&&prev){prev.src=t.receipt;prev.classList.remove('hidden');if(rm)rm.style.display=''}
  else removeReceiptPreview();
  document.getElementById('add-modal').classList.add('open');
}
function renderChartMonthly(){
  const now=new Date(),months=[];
  for(let i=5;i>=0;i--){let m=now.getMonth()-i,y=now.getFullYear();while(m<0){m+=12;y--}months.push({y,m})}
  const labels=months.map(({m})=>MONTHS[m].slice(0,3));
  const incs=months.map(({y,m})=>getMonthTxns(y,m).filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0));
  const exps=months.map(({y,m})=>getMonthTxns(y,m).filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0));
  if(chartMonthly)chartMonthly.destroy();
  chartMonthly=new Chart(document.getElementById('chart-monthly'),{type:'bar',data:{labels,datasets:[{label:'Ingresos',data:incs,backgroundColor:'rgba(34,212,122,.7)',borderColor:'#22d47a',borderWidth:1,borderRadius:5},{label:'Gastos',data:exps,backgroundColor:'rgba(240,82,82,.65)',borderColor:'#f05252',borderWidth:1,borderRadius:5}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{labels:{color:'#7a90b0',font:{size:11}}}},scales:{x:{ticks:{color:'#4a6080'},grid:{color:'var(--surface)'}},y:{ticks:{color:'#4a6080'},grid:{color:'var(--surface)'},beginAtZero:true}}}});
}
function renderChartDonut(){
  const txns=getMonthTxns(viewYear,viewMonth).filter(t=>t.type==='expense');
  const map={};txns.forEach(t=>{const c=t.category||'Otros';map[c]=(map[c]||0)+t.amount});
  const labels=Object.keys(map),data=Object.values(map);
  if(chartDonut)chartDonut.destroy();
  const CC=['#4f8ef7','#a78bfa','#22d47a','#fbbf24','#fb923c','#f05252','#06b6d4','#ec4899','#84cc16','#8b5cf6'];
  chartDonut=new Chart(document.getElementById('chart-donut'),{type:'doughnut',data:{labels:labels.length?labels:['Sin gastos'],datasets:[{data:data.length?data:[1],backgroundColor:data.length?CC.slice(0,labels.length):['var(--surface2)'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:true,cutout:'65%',plugins:{legend:{position:'right',labels:{color:'#7a90b0',font:{size:11},boxWidth:12,padding:10}},tooltip:{callbacks:{label:ctx=>` ${ctx.label}: ${fmt(ctx.raw)}`}}}}});
}
function renderProjectionChart(){
  const daysInMonth=new Date(viewYear,viewMonth+1,0).getDate();
  const today=new Date();const isCurrentMonth=today.getFullYear()===viewYear&&today.getMonth()===viewMonth;
  const todayDay=isCurrentMonth?today.getDate():daysInMonth;
  const pfx=`${viewYear}-${String(viewMonth+1).padStart(2,'0')}`;
  const mExp=state.transactions.filter(t=>t.date.startsWith(pfx)&&t.type==='expense');
  const budgetTotal=state.budgets.reduce((s,b)=>s+b.limit,0);
  let cum=0;const actual=[];
  for(let d=1;d<=daysInMonth;d++){const ds=`${pfx}-${String(d).padStart(2,'0')}`;cum+=mExp.filter(t=>t.date===ds).reduce((s,t)=>s+t.amount,0);actual.push(d<=todayDay?cum:null)}
  const avg=todayDay>0?cum/todayDay:0;let projCum=cum;
  const proj=Array.from({length:daysInMonth},(_,i)=>{const d=i+1;if(d<todayDay)return null;if(d===todayDay)return cum;projCum+=avg;return Math.round(projCum)});
  const labels=Array.from({length:daysInMonth},(_,i)=>i+1);
  const projectedTotal=cum+avg*(daysInMonth-todayDay);
  const badgesEl=document.getElementById('proj-badges');
  if(badgesEl){
    let html=`<span class="proj-badge actual">Actual: ${fmt(cum)}</span>`;
    if(isCurrentMonth&&avg>0)html+=`<span class="proj-badge actual">Proyección: ${fmt(Math.round(projectedTotal))}</span>`;
    if(budgetTotal>0){const diff=projectedTotal-budgetTotal;html+=diff>0?`<span class="proj-badge over">Excede en ${fmt(Math.round(diff))}</span>`:`<span class="proj-badge ok">Dentro del presupuesto</span>`}
    badgesEl.innerHTML=html;
  }
  if(chartProjection)chartProjection.destroy();
  const datasets=[{label:'Gasto real',data:actual,borderColor:'#4f8ef7',backgroundColor:'rgba(79,142,247,.08)',fill:true,tension:.35,pointRadius:2},{label:'Proyección',data:proj,borderColor:'#fb923c',backgroundColor:'rgba(251,146,60,.06)',fill:true,tension:.35,borderDash:[6,4],pointRadius:1,spanGaps:false}];
  if(budgetTotal>0)datasets.push({label:'Presupuesto',data:new Array(daysInMonth).fill(budgetTotal),borderColor:'rgba(240,82,82,.5)',borderDash:[3,3],pointRadius:0,borderWidth:1.5,fill:false});
  chartProjection=new Chart(document.getElementById('chart-projection'),{type:'line',data:{labels,datasets},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{labels:{color:'#7a90b0',font:{size:11}}}},scales:{x:{ticks:{color:'#4a6080',maxTicksLimit:10},grid:{color:'var(--surface)'}},y:{ticks:{color:'#4a6080',callback:v=>fmt(v)},grid:{color:'var(--surface)'},beginAtZero:true}}}});
}
function updateCatSelect(){
  const cats=state.budgets.map(b=>b.name).filter(Boolean);
  const extra=['Alimentación','Transporte','Salidas','Vivienda','Servicios','Tecnología','Salud','Educación','Ropa','Suscripciones','Otros'];
  const all=[...new Set([...cats,...extra])];
  document.getElementById('m-cat').innerHTML=all.map(c=>`<option value="${c}">${CAT_ICONS[c]||'📦'} ${c}</option>`).join('');
}
function openAddModal(preset=null){
  _editingTxnId=null;
  document.getElementById('add-modal-title').textContent='Nueva transacción';
  setTxnType('income');
  document.getElementById('m-src').value='';document.getElementById('m-amt').value='';document.getElementById('m-desc').value='';
  document.getElementById('m-date').value=preset||todayStr();
  removeReceiptPreview();updateCatSelect();
  document.getElementById('add-modal').classList.add('open');
}
function setTxnType(t){txnType=t;document.getElementById('ttype-income').className='ttype'+(t==='income'?' ai':'');document.getElementById('ttype-expense').className='ttype'+(t==='expense'?' ae':'');document.getElementById('grp-src').classList.toggle('hidden',t!=='income');document.getElementById('grp-cat').classList.toggle('hidden',t!=='expense')}
function saveTransaction(){
  const amt=parseFloat(document.getElementById('m-amt').value);if(!amt||amt<=0){document.getElementById('m-amt').focus();return}
  const date=document.getElementById('m-date').value||todayStr();
  const desc=document.getElementById('m-desc').value.trim();
  const prev=document.getElementById('m-receipt-preview');
  const receipt=(prev&&!prev.classList.contains('hidden')&&prev.src&&prev.src!==location.href)?prev.src:undefined;
  if(_editingTxnId){
    const t=state.transactions.find(x=>x.id===_editingTxnId);
    if(t){t.type=txnType;t.amount=amt;t.description=desc;t.date=date;if(txnType==='income'){t.source=document.getElementById('m-src').value.trim()||'Sin fuente';delete t.category}else{t.category=document.getElementById('m-cat').value;delete t.source}if(receipt)t.receipt=receipt;else delete t.receipt}
    _editingTxnId=null;
  }else{
    const t={id:uid(),type:txnType,amount:amt,description:desc,date};
    if(txnType==='income')t.source=document.getElementById('m-src').value.trim()||'Sin fuente';
    else t.category=document.getElementById('m-cat').value;
    if(receipt)t.receipt=receipt;
    state.transactions.push(t);
  }
  saveState();closeModal('add-modal');
  const d=new Date(date+'T12:00:00');viewYear=d.getFullYear();viewMonth=d.getMonth();
  if(pendingDate){const pd=pendingDate;pendingDate=null;setTimeout(()=>openDayModal(pd),100)}
  else if(currentView==='dashboard')updateAll();else if(currentView==='calendar')renderCalendar();
}
function openEditBudgets(){renderEBList();document.getElementById('edit-budgets-modal').classList.add('open')}
function renderEBList(){document.getElementById('eb-list').innerHTML=state.budgets.map(b=>budgetRowHTML(b,'eb')).join('')}
function addEBRow(){addBudgetRow('eb')}
function saveBudgets(){state.budgets=state.budgets.filter(b=>b.name.trim());saveState();closeModal('edit-budgets-modal');updateAll()}
function openProfileModal(){document.getElementById('ep-name').value=state.user.name;document.getElementById('ep-email').value=state.user.email||'';document.getElementById('ep-income').value=state.user.expectedIncome||'';document.getElementById('edit-profile-modal').classList.add('open')}
function saveProfile(){const n=document.getElementById('ep-name').value.trim();if(!n){document.getElementById('ep-name').focus();return}state.user.name=n;state.user.email=document.getElementById('ep-email').value.trim();state.user.expectedIncome=parseFloat(document.getElementById('ep-income').value)||0;saveState();closeModal('edit-profile-modal');showApp()}
function previewReceipt(e){const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=ev=>{const prev=document.getElementById('m-receipt-preview');prev.src=ev.target.result;prev.classList.remove('hidden');document.getElementById('m-receipt-remove').style.display=''};reader.readAsDataURL(file);e.target.value=''}
function removeReceiptPreview(){const p=document.getElementById('m-receipt-preview');if(p){p.src='';p.classList.add('hidden')}const r=document.getElementById('m-receipt-remove');if(r)r.style.display='none';const i=document.getElementById('receipt-input');if(i)i.value=''}
function openLightbox(src){let url=src;if(!src.startsWith('data:')){const t=state.transactions.find(x=>x.id===src);if(!t||!t.receipt)return;url=t.receipt}document.getElementById('receipt-lightbox-img').src=url;document.getElementById('receipt-lightbox').style.display='flex'}

// ═══ SAVINGS GOALS ═══
function getSGTotal(g){return(g.contributions||[]).reduce((s,c)=>s+c.amount,0)}
function renderSavingsGoals(){
  if(!state.savingsGoals)state.savingsGoals=[];
  const section=document.getElementById('savings-section');const head=document.getElementById('sg-head');
  if(!section)return;
  if(!state.savingsGoals.length){if(head)head.style.display='flex';section.innerHTML=`<div style="color:var(--muted);font-size:.84rem;padding:10px 0">Sin metas de ahorro aún. <span style="color:var(--blue);cursor:pointer" onclick="openSavingsGoalModal()">Crear una →</span></div>`;return}
  if(head)head.style.display='flex';
  section.innerHTML=state.savingsGoals.map(g=>{
    const total=getSGTotal(g);const pct=g.target>0?Math.min(100,Math.round(total/g.target*100)):0;
    const done=total>=g.target;const color=done?'#22d47a':(g.color||'#4f8ef7');
    const pi=pct>=100?'🎉':pct>=75?'🔥':pct>=50?'💪':pct>=25?'🌱':'🐷';
    return`<div class="sg-card ${done?'sg-done':''}"><div class="sg-top"><span class="sg-icon">${g.icon||'🐷'}</span><div class="sg-info"><div class="sg-name">${g.name}${done?' ✓':''}</div><div class="sg-sub">${done?'¡Meta alcanzada! 🎉':`Faltan ${fmt(Math.max(0,g.target-total))}`}</div></div><span class="sg-pct-badge" style="color:${color}">${pct}% ${pi}</span></div><div class="sg-track"><div class="sg-fill" style="width:${pct}%;background:${color}"></div></div><div class="sg-amounts"><span class="sg-cur" style="color:${color}">${fmt(total)}</span><span>de ${fmt(g.target)}</span></div><div class="sg-actions">${!done?`<button class="sg-add-btn" onclick="openContribModal('${g.id}')">+ Agregar</button>`:''}<button class="sg-sm-btn" onclick="openSavingsGoalModal('${g.id}')">✎</button><button class="sg-sm-btn" onclick="deleteSavingsGoal('${g.id}')">✕</button></div></div>`;
  }).join('');
}
function openSavingsGoalModal(editId=null){
  _editSGId=editId;
  document.getElementById('sg-modal-title').textContent=editId?'Editar meta':'Nueva meta de ahorro';
  const g=editId?(state.savingsGoals||[]).find(x=>x.id===editId):null;
  document.getElementById('sg-name').value=g?.name||'';
  document.getElementById('sg-target').value=g?.target||'';
  document.getElementById('sg-icon-input').value=g?.icon||'🐷';
  document.getElementById('sg-sym').textContent=getCurrencySymbol();
  document.getElementById('sg-modal').classList.add('open');
}
function saveSavingsGoal(){
  const name=document.getElementById('sg-name').value.trim();
  const target=parseFloat(document.getElementById('sg-target').value);
  const icon=document.getElementById('sg-icon-input').value.trim()||'🐷';
  if(!name||!target||target<=0){toast('⚠ Completá nombre y monto');return}
  if(!state.savingsGoals)state.savingsGoals=[];
  if(_editSGId){const g=state.savingsGoals.find(x=>x.id===_editSGId);if(g){g.name=name;g.target=target;g.icon=icon}}
  else state.savingsGoals.push({id:uid(),name,icon,color:'#4f8ef7',target,contributions:[]});
  saveState();closeModal('sg-modal');renderSavingsGoals();
}
function deleteSavingsGoal(id){state.savingsGoals=(state.savingsGoals||[]).filter(g=>g.id!==id);saveState();renderSavingsGoals()}
function openContribModal(goalId){
  _contribGoalId=goalId;
  const g=(state.savingsGoals||[]).find(x=>x.id===goalId);
  document.getElementById('contrib-goal-name').textContent=g?.name||'';
  document.getElementById('contrib-amount').value='';document.getElementById('contrib-note').value='';
  document.getElementById('contrib-modal').classList.add('open');
}
function saveContribution(){
  const amount=parseFloat(document.getElementById('contrib-amount').value);
  if(!amount||amount<=0){document.getElementById('contrib-amount').focus();return}
  const g=(state.savingsGoals||[]).find(x=>x.id===_contribGoalId);if(!g)return;
  if(!g.contributions)g.contributions=[];
  g.contributions.push({id:uid(),amount,date:todayStr(),note:document.getElementById('contrib-note').value.trim()});
  saveState();closeModal('contrib-modal');renderSavingsGoals();
  toast(`✓ ${fmt(amount)} agregado a "${g.name}"`);
  if(getSGTotal(g)>=g.target){fireConfetti();setTimeout(()=>toast(`🎉 ¡Alcanzaste tu meta "${g.name}"!`),500)}
}

// ═══ CALENDAR ═══
function changeCalMonth(d){calMonth+=d;if(calMonth>11){calMonth=0;calYear++}if(calMonth<0){calMonth=11;calYear--}renderCalendar()}
function setCalHeatMode(mode){calHeatMode=mode;document.querySelectorAll('.cal-heat-btn').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));renderCalendar()}
function heatBg(value,max,mode){
  if(mode==='mood')return value&&MOODS[value]?MOODS[value].color:'transparent';
  if(!value||!max)return 'transparent';
  const t=Math.min(value/max,1);const a=(0.12+t*0.7).toFixed(2);
  return mode==='spending'?`rgba(240,82,82,${a})`:`rgba(34,212,122,${a})`;
}
function renderCalendar(){
  document.getElementById('cal-month-lbl').textContent=`${MONTHS[calMonth]} ${calYear}`;
  const ts=todayStr(),pfx=`${calYear}-${String(calMonth+1).padStart(2,'0')}`;
  const mExp=state.transactions.filter(t=>t.date.startsWith(pfx)&&t.type==='expense');
  const first=new Date(calYear,calMonth,1),days=new Date(calYear,calMonth+1,0).getDate();
  const startDow=(first.getDay()+6)%7;
  const totalHabits=state.goals.filter(g=>g.type==='habit').length;
  const dailyVals={};
  for(let day=1;day<=days;day++){
    const ds=`${pfx}-${String(day).padStart(2,'0')}`;
    if(calHeatMode==='spending')dailyVals[ds]=mExp.filter(t=>t.date===ds).reduce((s,t)=>s+t.amount,0);
    else if(calHeatMode==='mood')dailyVals[ds]=(state.dayEntries[ds]||{}).mood||null;
    else{const e=state.dayEntries[ds]||{};dailyVals[ds]=(e.habits||[]).length}
  }
  const maxVal=calHeatMode==='mood'?1:Math.max(...Object.values(dailyVals).filter(v=>v!=null),1);
  let cells='';
  for(let i=0;i<startDow;i++)cells+=`<div class="cal-cell other"></div>`;
  for(let day=1;day<=days;day++){
    const ds=`${pfx}-${String(day).padStart(2,'0')}`;
    const entry=state.dayEntries[ds]||{};
    const hasJ=entry.journal&&entry.journal.trim();
    const doneH=(entry.habits||[]).length>0;
    const evList=entry.events||[];
    const isToday=ds===ts;
    const bg=heatBg(dailyVals[ds],maxVal,calHeatMode);
    const evChips=evList.slice(0,2).map(ev=>{const c=ev.color||'#4f8ef7';return`<div class="cal-event-chip" style="background:${c}22;color:${c};border-left-color:${c}">● ${ev.title}</div>`}).join('');
    const evMore=evList.length>2?`<div class="cal-event-chip cal-event-more">+${evList.length-2} más</div>`:'';
    const moodDot=entry.mood&&MOODS[entry.mood]?`<div class="cal-mood-dot">${MOODS[entry.mood].emoji}</div>`:'';
    let dots='';
    if(hasJ)dots+=`<div class="cdot" style="background:#a78bfa"></div>`;
    if(doneH&&calHeatMode==='spending')dots+=`<div class="cdot" style="background:var(--green)"></div>`;
    const cls=['cal-cell',isToday&&'today',(hasJ||doneH||evList.length>0||entry.mood)&&'has-entry'].filter(Boolean).join(' ');
    cells+=`<div class="${cls}" onclick="openDayModal('${ds}')" onmouseenter="showCalTip(event,'${ds}')" onmouseleave="hideCalTip()" style="background:${isToday?'':bg}"><div class="cal-num">${day}</div>${evChips}${evMore}${calHeatMode==='habits'&&totalHabits>0?`<div class="cal-habit-mini">${(entry.habits||[]).length}/${totalHabits}</div>`:''}${moodDot}<div class="cal-dots">${dots}</div></div>`;
  }
  const rem=(startDow+days)%7;if(rem)for(let i=0;i<7-rem;i++)cells+=`<div class="cal-cell other"></div>`;
  document.getElementById('cal-cells').innerHTML=cells;
}
function showCalTip(e,dateStr){
  const tip=document.getElementById('cal-tooltip');
  const entry=state.dayEntries[dateStr]||{};
  const evList=entry.events||[];
  const habitGoals=state.goals.filter(g=>g.type==='habit');
  const dayExp=state.transactions.filter(t=>t.date===dateStr&&t.type==='expense');
  const dayInc=state.transactions.filter(t=>t.date===dateStr&&t.type==='income');
  const d=new Date(dateStr+'T12:00:00');
  document.getElementById('tip-date').textContent=d.toLocaleDateString('es',{weekday:'long',day:'numeric',month:'long'}).replace(/^\w/,c=>c.toUpperCase());
  let rows='';
  if(entry.mood&&MOODS[entry.mood]){const m=MOODS[entry.mood];rows+=`<div class="tip-row"><span class="tip-icon">${m.emoji}</span><span class="tip-text">${m.label}</span></div>`}
  evList.forEach(ev=>{rows+=`<div class="tip-row"><span class="tip-icon">📅</span><span class="tip-text"><strong>${ev.title}</strong>${ev.time?' · '+ev.time:''}</span></div>`});
  const doneH=habitGoals.filter(g=>(entry.habits||[]).includes(g.id));
  const pendH=habitGoals.filter(g=>!(entry.habits||[]).includes(g.id));
  if(doneH.length>0)rows+=`<div class="tip-row"><span class="tip-icon">✅</span><span class="tip-text">${doneH.map(g=>g.icon+' '+g.name).join(', ')}</span></div>`;
  if(pendH.length>0&&doneH.length>0)rows+=`<div class="tip-row"><span class="tip-icon">⬜</span><span class="tip-text" style="opacity:.45;text-decoration:line-through">${pendH.map(g=>g.name).join(', ')}</span></div>`;
  if(entry.journal&&entry.journal.trim()){const prev=entry.journal.trim().slice(0,70)+(entry.journal.length>70?'…':'');rows+=`<div class="tip-row"><span class="tip-icon">📝</span><span class="tip-text">${prev}</span></div>`}
  if(dayInc.length>0)rows+=`<div class="tip-row"><span class="tip-icon">📈</span><span class="tip-text"><strong>${fmt(dayInc.reduce((s,t)=>s+t.amount,0))}</strong> en ingresos</span></div>`;
  if(dayExp.length>0)rows+=`<div class="tip-row"><span class="tip-icon">💸</span><span class="tip-text">${dayExp.length} gasto${dayExp.length!==1?'s':''} · <strong>${fmt(dayExp.reduce((s,t)=>s+t.amount,0))}</strong></span></div>`;
  if(!rows)rows=`<div style="font-size:.74rem;color:var(--muted)">Sin actividad registrada</div>`;
  document.getElementById('tip-body').innerHTML=rows;
  tip.classList.remove('hidden');
  const tw=tip.offsetWidth,th=tip.offsetHeight;
  const rect=e.currentTarget.getBoundingClientRect();
  let left=rect.right+10,top=rect.top;
  if(left+tw>window.innerWidth-8)left=rect.left-tw-10;
  if(top+th>window.innerHeight-8)top=window.innerHeight-th-8;
  if(top<8)top=8;
  tip.style.left=left+'px';tip.style.top=top+'px';
}
function hideCalTip(){document.getElementById('cal-tooltip').classList.add('hidden')}

// ── DAY MODAL ──
function openDayModal(dateStr){
  activeDayDate=dateStr;
  const d=new Date(dateStr+'T12:00:00');
  const lbl=d.toLocaleDateString('es',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  document.getElementById('day-modal-title').textContent=lbl.charAt(0).toUpperCase()+lbl.slice(1);
  const entry=state.dayEntries[dateStr]||{journal:'',habits:[],events:[],habitNotes:{}};
  document.getElementById('day-journal').value=entry.journal||'';
  loadMoodSelector(entry);
  const hGoals=state.goals.filter(g=>g.type==='habit');
  if(hGoals.length){
    document.getElementById('day-habits-sec').classList.remove('hidden');
    const habitNotes=entry.habitNotes||{};
    document.getElementById('day-habits-list').innerHTML=hGoals.map(g=>{
      const done=(entry.habits||[]).includes(g.id);
      const note=(habitNotes[g.id]||'').replace(/"/g,'&quot;');
      return`<div class="habit-row ${done?'done':''}" id="hrow-${g.id}" onclick="toggleDayHabit('${g.id}',this)"><div class="hcheck">${done?'✓':''}</div><span>${g.icon}</span><span class="hcheck-lbl">${g.name}</span></div><div class="habit-note-expand ${done?'open':''}" id="hnote-${g.id}"><input class="fi habit-note-input" type="text" placeholder="¿Qué hiciste específicamente?" value="${note}" onclick="event.stopPropagation()" oninput="saveHabitNoteNow('${g.id}',this.value)"/></div>`;
    }).join('');
  }else document.getElementById('day-habits-sec').classList.add('hidden');
  renderDayEvents(entry.events||[]);
  const dayExp=state.transactions.filter(t=>t.date===dateStr&&t.type==='expense');
  document.getElementById('day-exp-list').innerHTML=dayExp.length?dayExp.map(t=>`<div class="day-exp-item"><div><div>${t.description||t.category}</div><div class="day-exp-cat">${CAT_ICONS[t.category]||'📦'} ${t.category}</div></div><div class="day-exp-amt">−${fmt(t.amount)}</div></div>`).join(''):`<div style="font-size:.8rem;color:var(--muted);margin-bottom:8px">Sin gastos este día.</div>`;
  toggleEventForm(false);
  document.getElementById('ev-date').value=dateStr;
  document.getElementById('day-modal').classList.add('open');
}
function setDayMood(mood,btn){
  const entry=state.dayEntries[activeDayDate]||{journal:'',habits:[],events:[],habitNotes:{}};
  entry.mood=entry.mood===mood?null:mood;
  state.dayEntries[activeDayDate]=entry;saveState();
  document.querySelectorAll('.mood-btn').forEach(b=>b.classList.toggle('selected',b.dataset.mood===entry.mood));
}
function loadMoodSelector(entry){document.querySelectorAll('.mood-btn').forEach(b=>b.classList.toggle('selected',b.dataset.mood===(entry?.mood||null)))}
function renderDayEvents(events){
  const el=document.getElementById('day-events-list');
  if(!events.length){el.innerHTML='';return}
  el.innerHTML=events.map(ev=>`<div class="event-list-item"><div class="event-item-info" style="display:flex;align-items:center;gap:8px"><span style="width:12px;height:12px;border-radius:50%;background:${ev.color||'#4f8ef7'};flex-shrink:0;display:block"></span><div><div class="event-item-title">${ev.time?ev.time+' — ':''} ${ev.title}</div><div class="event-item-meta">${ev.desc||''}</div></div></div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0">${ev.confirmationSent?'<span class="event-badge sent">✉ Enviado</span>':''}${ev.remindSet?'<span class="event-badge pending">⏰ Recordatorio</span>':''}</div></div>`).join('');
}
const EV_COLORS_LIST=['#4f8ef7','#22d47a','#f05252','#fbbf24','#a78bfa','#fb923c','#ec4899','#06b6d4','#84cc16','#64748b'];
function initEvColorPicker(sel){
  _evColor=sel||EV_COLORS_LIST[0];
  const row=document.getElementById('ev-color-row');if(!row)return;
  row.innerHTML=EV_COLORS_LIST.map(c=>`<div class="ev-color-swatch ${c===_evColor?'selected':''}" style="background:${c}" data-color="${c}" onclick="pickEvColor('${c}',this)"></div>`).join('');
}
function pickEvColor(c,el){_evColor=c;document.querySelectorAll('.ev-color-swatch').forEach(s=>s.classList.toggle('selected',s.dataset.color===c))}
function toggleEventForm(show){
  document.getElementById('event-form').style.display=show?'block':'none';
  document.getElementById('btn-add-event').style.display=show?'none':'flex';
  if(show){document.getElementById('ev-title').value='';document.getElementById('ev-time').value='';document.getElementById('ev-desc').value='';document.getElementById('ev-confirm').checked=true;document.getElementById('ev-remind').checked=true;initEvColorPicker(EV_COLORS_LIST[0])}
}
async function saveEvent(){
  const title=document.getElementById('ev-title').value.trim();if(!title){document.getElementById('ev-title').focus();return}
  const evDate=document.getElementById('ev-date').value||activeDayDate;
  const time=document.getElementById('ev-time').value;
  const desc=document.getElementById('ev-desc').value.trim();
  const sendConfirm=document.getElementById('ev-confirm').checked;
  const sendRemind=document.getElementById('ev-remind').checked;
  const ev={id:uid(),title,date:evDate,time,desc,color:_evColor,confirmationSent:false,remindSet:false};
  const entry=state.dayEntries[activeDayDate]||{journal:'',habits:[],events:[],habitNotes:{}};
  if(!entry.events)entry.events=[];
  entry.events.push(ev);state.dayEntries[activeDayDate]=entry;saveState();
  const cfg=state.settings||{};const remUrl=cfg.n8nReminderUrl||'';
  if(remUrl&&(sendConfirm||sendRemind)){
    const db=new Date(evDate+'T09:00:00');db.setDate(db.getDate()-1);
    const payload={user:{name:state.user.name,email:cfg.notifEmail||state.user.email},event:{title,date:evDate,time,description:desc},actions:{sendConfirmation:sendConfirm,sendReminder:sendRemind,reminderDate:db.toISOString()}};
    try{await fetch(remUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});ev.confirmationSent=sendConfirm;ev.remindSet=sendRemind;saveState();toast('✓ Webhook enviado a n8n')}
    catch{toast('⚠ No se pudo contactar n8n')}
  }else if(sendConfirm||sendRemind)toast('ℹ Configura la URL de n8n en Ajustes para emails');
  renderDayEvents(entry.events);toggleEventForm(false);
  if(currentView==='calendar')renderCalendar();
}
function toggleDayHabit(goalId,row){
  const entry=state.dayEntries[activeDayDate]||{journal:'',habits:[],events:[],habitNotes:{}};
  if(!entry.habits)entry.habits=[];
  const wasDone=entry.habits.includes(goalId);
  if(wasDone)entry.habits=entry.habits.filter(id=>id!==goalId);
  else entry.habits.push(goalId);
  state.dayEntries[activeDayDate]=entry;saveState();
  row.classList.toggle('done',!wasDone);row.querySelector('.hcheck').textContent=wasDone?'':'✓';
  const noteEl=document.getElementById('hnote-'+goalId);
  if(noteEl){noteEl.classList.toggle('open',!wasDone);if(!wasDone){const inp=noteEl.querySelector('input');if(inp)setTimeout(()=>inp.focus(),300)}}
  if(!wasDone)setTimeout(()=>{maybeConfettiHabits();checkAllBadges()},300);
}
function saveHabitNoteNow(goalId,text){
  const entry=state.dayEntries[activeDayDate]||{journal:'',habits:[],events:[],habitNotes:{}};
  if(!entry.habitNotes)entry.habitNotes={};
  if(text.trim())entry.habitNotes[goalId]=text;else delete entry.habitNotes[goalId];
  state.dayEntries[activeDayDate]=entry;saveState();
}
function saveDayEntry(){
  const entry=state.dayEntries[activeDayDate]||{habits:[],events:[]};
  entry.journal=document.getElementById('day-journal').value;
  state.dayEntries[activeDayDate]=entry;saveState();closeModal('day-modal');
  if(currentView==='calendar')renderCalendar();
}
function addExpForDay(){pendingDate=activeDayDate;closeModal('day-modal');setTxnType('expense');openAddModal(activeDayDate)}

// ── HABIT CALENDAR ──
function openHabitCalModal(goalId){
  _hcGoalId=goalId;_hcYear=new Date().getFullYear();_hcMonth=new Date().getMonth();
  const g=state.goals.find(x=>x.id===goalId);if(!g)return;
  document.getElementById('hcm-title').textContent=`${g.icon} ${g.name} — Historial`;
  renderHabitCal();document.getElementById('habit-cal-modal').classList.add('open');
}
function changeHabitCalMonth(d){_hcMonth+=d;if(_hcMonth>11){_hcMonth=0;_hcYear++}if(_hcMonth<0){_hcMonth=11;_hcYear--}renderHabitCal()}
function renderHabitCal(){
  const g=state.goals.find(x=>x.id===_hcGoalId);if(!g)return;
  const ts=todayStr();const first=new Date(_hcYear,_hcMonth,1);
  const days=new Date(_hcYear,_hcMonth+1,0).getDate();const startDow=(first.getDay()+6)%7;
  let doneCount=0,cells='';
  for(let i=0;i<startDow;i++)cells+=`<div class="hcal-cell hcal-other"></div>`;
  for(let day=1;day<=days;day++){
    const ds=`${_hcYear}-${String(_hcMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const done=(state.dayEntries[ds]?.habits||[]).includes(_hcGoalId);
    const isToday=ds===ts;const isFuture=ds>ts;
    if(done)doneCount++;
    const cls=['hcal-cell',done&&'hcal-done',isToday&&'hcal-today',isFuture&&'hcal-other'].filter(Boolean).join(' ');
    const bg=done?`background:${g.color||'var(--green)'}`:'';
    cells+=`<div class="${cls}" style="${bg}" onclick="${isFuture?'':` toggleHabitDay('${_hcGoalId}','${ds}',this)`}">${done?'✓':day}</div>`;
  }
  const rem=(startDow+days)%7;if(rem)for(let i=0;i<7-rem;i++)cells+=`<div class="hcal-cell hcal-other"></div>`;
  const streak=calcStreak(g.id);const pct=Math.round(doneCount/days*100);
  document.getElementById('hcm-body').innerHTML=`${g.desc?`<div style="font-size:.78rem;color:var(--muted);margin-bottom:8px">${g.desc}</div>`:''}<div class="hcal-nav"><button class="cal-nav-btn" onclick="changeHabitCalMonth(-1)">‹</button><strong>${MONTHS[_hcMonth]} ${_hcYear}</strong><button class="cal-nav-btn" onclick="changeHabitCalMonth(1)">›</button></div><div class="hcal-grid">${['L','M','X','J','V','S','D'].map(d=>`<div class="hcal-dayh">${d}</div>`).join('')}${cells}</div><div class="hcal-stats"><span>✅ <strong>${doneCount}/${days}</strong> días</span><span>📊 <strong>${pct}%</strong></span>${streak>0?`<span>🔥 Racha: <strong>${streak} día${streak!==1?'s':''}</strong></span>`:''}</div>`;
}
function toggleHabitDay(goalId,dateStr,cell){
  const entry=state.dayEntries[dateStr]||{journal:'',habits:[],events:[],habitNotes:{}};
  if(!entry.habits)entry.habits=[];
  const done=entry.habits.includes(goalId);
  if(done)entry.habits=entry.habits.filter(id=>id!==goalId);else entry.habits.push(goalId);
  state.dayEntries[dateStr]=entry;saveState();
  const g=state.goals.find(x=>x.id===goalId);
  const day=new Date(dateStr+'T12:00:00').getDate();
  cell.classList.toggle('hcal-done',!done);cell.style.background=!done?(g?.color||'var(--green)'):'';
  cell.textContent=!done?'✓':day;
  renderHabitCal();
}

// ═══ GOALS ═══
function renderGoals(){
  const grid=document.getElementById('goals-grid');
  if(!state.goals.length){grid.innerHTML=`<div class="empty-state" style="grid-column:1/-1"><div class="ei">🎯</div><p>Sin objetivos aún.<br>Pulsá <strong>+ Nuevo objetivo</strong>.</p></div>`;return}
  grid.innerHTML=state.goals.map(g=>goalCardHTML(g)).join('');
}
function goalCardHTML(g){
  const badge=g.type==='habit'?'<span class="goal-badge badge-habit">Hábito</span>':g.type==='goal'?'<span class="goal-badge badge-goal">Meta</span>':'<span class="goal-badge badge-personal">Personal</span>';
  const histBtn=g.type==='habit'?`<button class="goal-act" onclick="openHabitCalModal('${g.id}')" title="Ver historial">📅</button>`:'';
  let extra='';
  if(g.type==='habit'){
    const s=calcStreak(g.id);
    extra=`<div class="streak-row">Racha: <span class="streak-n">${s>0?'🔥':''} ${s} día${s!==1?'s':''}</span></div>${renderHMG(g.id,g.color)}`;
  }else{
    extra=`<div class="goal-toggle" onclick="toggleGoalDone('${g.id}')"><div class="toggle-circle ${g.done?'complete':''}">${g.done?'✓':''}</div><span class="toggle-lbl">${g.done?'Completado ✓':'Marcar como completado'}</span></div>`;
  }
  return`<div class="goal-card"><div class="goal-card-top"><div class="goal-icon-wrap" style="background:${g.color}22">${g.icon}</div><div class="goal-info"><div class="goal-name">${g.name}</div><div class="goal-desc">${g.desc||''}</div>${badge}</div><div class="goal-actions">${histBtn}<button class="goal-act" onclick="openGoalModal('${g.id}')">✎</button><button class="goal-act del" onclick="deleteGoal('${g.id}')">✕</button></div></div>${extra}</div>`;
}
function renderHMG(goalId,color){
  const ts=todayStr();
  const cells=Array.from({length:21},(_,i)=>{const d=new Date();d.setDate(d.getDate()-20+i);const ds=d.toISOString().split('T')[0];const done=(state.dayEntries[ds]?.habits||[]).includes(goalId);const isT=ds===ts;return`<div class="hmg-cell ${isT?'today-cell':''}" style="${done?`background:${color}`:''}"></div>`}).join('');
  return`<div class="hmg">${cells}</div>`;
}
function calcStreak(goalId){let s=0,d=new Date();while(true){const ds=d.toISOString().split('T')[0];const e=state.dayEntries[ds];if(e&&e.habits&&e.habits.includes(goalId)){s++;d.setDate(d.getDate()-1)}else break;if(s>365)break}return s}
function toggleGoalDone(id){const g=state.goals.find(x=>x.id===id);if(g){g.done=!g.done;saveState();renderGoals()}}
function deleteGoal(id){state.goals=state.goals.filter(g=>g.id!==id);saveState();renderGoals()}
function openGoalModal(editId=null){
  editingGoalId=editId;
  document.getElementById('goal-modal-title').textContent=editId?'Editar objetivo':'Nuevo objetivo';
  if(editId){const g=state.goals.find(x=>x.id===editId);selectedEmoji=g.icon;selectedColor=g.color;selectedGoalType=g.type;document.getElementById('g-name').value=g.name;document.getElementById('g-desc').value=g.desc||''}
  else{selectedEmoji='🎯';selectedColor='#4f8ef7';selectedGoalType='habit';document.getElementById('g-name').value='';document.getElementById('g-desc').value=''}
  document.getElementById('emoji-row').innerHTML=EMOJIS.map(e=>`<div class="emoji-opt ${e===selectedEmoji?'selected':''}" onclick="selEmoji('${e}',this)">${e}</div>`).join('');
  document.getElementById('color-row').innerHTML=GOAL_COLORS.map(c=>`<div class="cswatch ${c===selectedColor?'selected':''}" style="background:${c}" onclick="selColor('${c}',this)"></div>`).join('');
  document.querySelectorAll('.gtype-btn').forEach(b=>b.classList.toggle('active',b.dataset.type===selectedGoalType));
  document.getElementById('goal-modal').classList.add('open');
}
function selEmoji(e,el){selectedEmoji=e;document.querySelectorAll('.emoji-opt').forEach(x=>x.classList.remove('selected'));el.classList.add('selected')}
function selColor(c,el){selectedColor=c;document.querySelectorAll('.cswatch').forEach(x=>x.classList.remove('selected'));el.classList.add('selected')}
function setGoalType(t,btn){selectedGoalType=t;document.querySelectorAll('.gtype-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active')}
function saveGoal(){
  const name=document.getElementById('g-name').value.trim();if(!name){document.getElementById('g-name').focus();return}
  if(editingGoalId){const g=state.goals.find(x=>x.id===editingGoalId);g.name=name;g.icon=selectedEmoji;g.color=selectedColor;g.type=selectedGoalType;g.desc=document.getElementById('g-desc').value.trim()}
  else state.goals.push({id:uid(),name,icon:selectedEmoji,color:selectedColor,type:selectedGoalType,desc:document.getElementById('g-desc').value.trim(),done:false});
  saveState();closeModal('goal-modal');renderGoals();
}

// ═══ HOME VIEW ═══
function renderHomeView(){
  const now=new Date();const h=now.getHours();
  const g=h<12?'Buenos días':h<19?'Buenas tardes':'Buenas noches';
  const gEl=document.getElementById('home-greeting-text');if(gEl)gEl.textContent=`${g}, ${state.user.name.split(' ')[0]} 👋`;
  const verse=getDailyVerse();
  const vt=document.getElementById('home-verse-text');const vr=document.getElementById('home-verse-ref');
  if(vt)vt.textContent=`"${verse.text}"`;if(vr)vr.textContent=`— ${verse.ref}`;
  try{renderHealthScore()}catch{}
  try{checkAllBadges()}catch{}
  const mTxns=getMonthTxns(now.getFullYear(),now.getMonth());
  const mInc=mTxns.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const mExp=mTxns.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const bal=mInc-mExp;
  const fEl=document.getElementById('home-stat-finance');
  if(fEl){fEl.textContent=(bal>=0?'+':'')+fmt(bal)+' este mes';fEl.style.color=bal>=0?'var(--green)':'var(--red)'}
  const te=state.dayEntries[todayStr()]||{};
  const evN=(te.events||[]).length;
  const cEl=document.getElementById('home-stat-calendar');
  if(cEl)cEl.textContent=evN>0?`${evN} evento${evN>1?'s':''} hoy`:te.journal?'Diario escrito ✓':'Sin actividad hoy';
  const hGoals=state.goals.filter(g=>g.type==='habit');
  const doneN=(te.habits||[]).length;
  const goEl=document.getElementById('home-stat-goals');
  if(goEl)goEl.textContent=hGoals.length>0?`${doneN}/${hGoals.length} hábitos hoy`:`${state.goals.length} objetivo${state.goals.length!==1?'s':''}`;
  const hl=document.getElementById('home-habits-list');
  if(hl){
    if(!hGoals.length){hl.innerHTML='<div style="color:var(--muted);font-size:.84rem;padding:10px 0">Sin hábitos. <span style="color:var(--blue);cursor:pointer;font-weight:700" onclick="switchView(\'goals\')">Agregar →</span></div>'}
    else hl.innerHTML=hGoals.map(g=>{const done=(te.habits||[]).includes(g.id);const s=calcStreak(g.id);return`<div class="hh-row" onclick="toggleHomeHabit('${g.id}',this)"><div class="hh-check ${done?'done':''}">${done?'✓':''}</div><span style="font-size:1rem">${g.icon}</span><span class="hh-name">${g.name}</span>${s>1?`<span class="hh-streak">🔥 ${s}</span>`:''}</div>`}).join('');
  }
  const tip=document.getElementById('home-welcome-tip');
  if(tip)tip.style.display=state.transactions.length?'none':'';
}
function toggleHomeHabit(goalId,row){
  const ts=todayStr();const entry=state.dayEntries[ts]||{journal:'',habits:[],events:[]};
  if(!entry.habits)entry.habits=[];
  const done=entry.habits.includes(goalId);
  if(done)entry.habits=entry.habits.filter(id=>id!==goalId);else entry.habits.push(goalId);
  state.dayEntries[ts]=entry;saveState();
  row.classList.toggle('done',!done);row.querySelector('.hh-check').textContent=done?'':'✓';row.querySelector('.hh-check').classList.toggle('done',!done);
  if(!done)setTimeout(()=>{maybeConfettiHabits();checkAllBadges()},300);
  renderHomeView();
}

// ═══ HEALTH SCORE ═══
function calcHealthScore(){
  const now=new Date(),y=now.getFullYear(),m=now.getMonth();
  const txns=getMonthTxns(y,m);
  const inc=txns.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=txns.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const goal=state.user?.expectedIncome||0;
  const{start}=getWeekRange();const hg=state.goals.filter(g=>g.type==='habit');
  const savPts=Math.min(25,Math.max(0,Math.round(inc>0?(inc-exp)/inc*50:0)));
  const over=state.budgets.filter(b=>{const s=txns.filter(t=>t.type==='expense'&&(t.category||'').toLowerCase()===b.name.toLowerCase()).reduce((s,t)=>s+t.amount,0);return b.limit>0&&s>b.limit}).length;
  const budPts=state.budgets.length?Math.round(30*(1-over/state.budgets.length)):15;
  let tot=0,done=0;for(let i=0;i<7;i++){const d=new Date(start);d.setDate(d.getDate()+i);const ds=d.toISOString().split('T')[0];const e=state.dayEntries[ds]||{};tot+=hg.length;done+=(e.habits||[]).length}
  const habPts=tot>0?Math.round(20*done/tot):0;
  const incPts=goal>0?Math.min(15,Math.round(15*inc/goal)):7;
  const maxS=hg.length?Math.max(...hg.map(g=>calcStreak(g.id))):0;
  const strPts=Math.min(10,Math.floor(maxS/3));
  return{score:savPts+budPts+habPts+incPts+strPts,breakdown:[{emoji:'💰',lbl:'Ahorro',pts:savPts,max:25,color:'#22d47a'},{emoji:'📊',lbl:'Presupuesto',pts:budPts,max:30,color:'#4f8ef7'},{emoji:'✅',lbl:'Hábitos',pts:habPts,max:20,color:'#a78bfa'},{emoji:'🎯',lbl:'Ingresos',pts:incPts,max:15,color:'#fbbf24'},{emoji:'🔥',lbl:'Racha',pts:strPts,max:10,color:'#fb923c'}]};
}
function renderHealthScore(){
  const{score,breakdown}=calcHealthScore();
  const color=score>=70?'var(--green)':score>=40?'var(--yellow)':'var(--red)';
  const arc=document.getElementById('hs-arc');const num=document.getElementById('hs-num');
  if(arc){const d=score/100*251;arc.setAttribute('stroke-dasharray',`${d} ${251-d}`);arc.setAttribute('stroke',score>=70?'#22d47a':score>=40?'#fbbf24':'#f05252')}
  if(num){num.textContent=score;num.style.color=color}
  const bd=document.getElementById('hs-breakdown');
  if(bd)bd.innerHTML=breakdown.map(b=>`<div class="hb-row"><span>${b.emoji}</span><span class="hb-lbl">${b.lbl}</span><div class="hb-bar-track"><div class="hb-bar-fill" style="width:${Math.round(b.pts/b.max*100)}%;background:${b.color}"></div></div><span class="hb-pts">${b.pts}/${b.max}</span></div>`).join('');
}

// ═══ GAMIFICATION ═══
function fireConfetti(){
  const cv=document.createElement('canvas');
  cv.style.cssText='position:fixed;inset:0;z-index:9998;pointer-events:none;';
  cv.width=window.innerWidth;cv.height=window.innerHeight;
  document.body.appendChild(cv);
  const ctx=cv.getContext('2d');
  const colors=['#4f8ef7','#22d47a','#f05252','#fbbf24','#a78bfa','#fb923c','#06b6d4','#ec4899'];
  const P=Array.from({length:180},()=>({x:Math.random()*cv.width,y:-20-Math.random()*100,size:Math.random()*7+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-.5)*5,vy:Math.random()*4+2,rot:Math.random()*360,rs:(Math.random()-.5)*8,alpha:1,rect:Math.random()>.4}));
  let frame=0;const run=()=>{ctx.clearRect(0,0,cv.width,cv.height);let alive=false;P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.12;p.rot+=p.rs;if(frame>100)p.alpha=Math.max(0,p.alpha-.018);if(p.alpha>0&&p.y<cv.height+20){alive=true;ctx.save();ctx.globalAlpha=p.alpha;ctx.fillStyle=p.color;ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);if(p.rect)ctx.fillRect(-p.size/2,-p.size/3,p.size,p.size/1.5);else{ctx.beginPath();ctx.arc(0,0,p.size/2,0,Math.PI*2);ctx.fill()}ctx.restore()}});frame++;if(alive&&frame<280)requestAnimationFrame(run);else cv.remove()};run();
}
function maybeConfettiGoal(income,goal){if(!goal||income<goal)return;if(_confettiGoalShown)return;_confettiGoalShown=true;fireConfetti();toast('🎉 ¡Meta de ingresos alcanzada!')}
function maybeConfettiHabits(){const ts=todayStr();if(_confettiHabitsDate===ts)return;const hg=state.goals.filter(g=>g.type==='habit');if(!hg.length)return;const e=state.dayEntries[ts]||{};if(hg.every(g=>(e.habits||[]).includes(g.id))){_confettiHabitsDate=ts;fireConfetti();toast('⭐ ¡Todos los hábitos del día completados!')}}

// ── BADGES ──
function getBadgeCheck(id){
  const now=new Date();
  switch(id){
    case'first_step':return state.transactions.length>0;
    case'first_income':return state.transactions.some(t=>t.type==='income');
    case'habit_start':return Object.values(state.dayEntries).some(e=>(e.habits||[]).length>0);
    case'week_budget':return checkWeekBudget();
    case'perfect_day':return checkPerfectDay();
    case'journal_7':return checkJournalStreak7();
    case'streak_7':return state.goals.filter(g=>g.type==='habit').some(g=>calcStreak(g.id)>=7);
    case'streak_30':return state.goals.filter(g=>g.type==='habit').some(g=>calcStreak(g.id)>=30);
    case'streak_100':return state.goals.filter(g=>g.type==='habit').some(g=>calcStreak(g.id)>=100);
    case'saver_20':return checkSaverMonth(20);
    case'saver_50':return checkSaverMonth(50);
    case'income_goal_1':return checkIncomeGoalMonths(1);
    case'income_goal_3':return checkIncomeGoalMonths(3);
    case'no_exceed_month':return checkMonthNoBudget();
    default:return false;
  }
}
function checkWeekBudget(){if(!state.budgets.length)return false;const now=new Date();const dow=(now.getDay()+6)%7;const lm=new Date(now);lm.setDate(now.getDate()-dow-7);const ls=new Date(lm);ls.setDate(lm.getDate()+6);const start=lm.toISOString().split('T')[0];const end=ls.toISOString().split('T')[0];const w=state.transactions.filter(t=>t.date>=start&&t.date<=end&&t.type==='expense');if(w.length<2)return false;return state.budgets.every(b=>b.limit<=0||w.filter(t=>(t.category||'').toLowerCase()===b.name.toLowerCase()).reduce((s,t)=>s+t.amount,0)<=b.limit)}
function checkPerfectDay(){const hg=state.goals.filter(g=>g.type==='habit');if(hg.length<2)return false;return Object.entries(state.dayEntries).some(([ds,e])=>{if(ds>=todayStr())return false;return e.habits&&hg.every(g=>e.habits.includes(g.id))})}
function checkJournalStreak7(){let streak=0;for(let i=1;i<=30;i++){const ds=new Date(Date.now()-i*864e5).toISOString().split('T')[0];if(state.dayEntries[ds]?.journal?.trim()){streak++;if(streak>=7)return true}else streak=0}return false}
function checkSaverMonth(pct){const now=new Date();for(let i=1;i<=6;i++){let m=now.getMonth()-i,y=now.getFullYear();while(m<0){m+=12;y--}const txns=getMonthTxns(y,m);const inc=txns.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);const exp=txns.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);if(inc>0&&exp>0&&(inc-exp)/inc*100>=pct)return true}return false}
function checkIncomeGoalMonths(target){const goal=state.user?.expectedIncome||0;if(!goal)return false;const now=new Date();let consec=0;for(let i=1;i<=12;i++){let m=now.getMonth()-i,y=now.getFullYear();while(m<0){m+=12;y--}const inc=getMonthTxns(y,m).filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);if(inc>=goal){consec++;if(consec>=target)return true}else consec=0}return false}
function checkMonthNoBudget(){if(!state.budgets.length)return false;const now=new Date();let m=now.getMonth()-1,y=now.getFullYear();if(m<0){m=11;y--}const txns=getMonthTxns(y,m).filter(t=>t.type==='expense');if(txns.length<3)return false;return state.budgets.every(b=>b.limit<=0||txns.filter(t=>(t.category||'').toLowerCase()===b.name.toLowerCase()).reduce((s,t)=>s+t.amount,0)<=b.limit)}
function revalidateBadges(){if(!state.achievements)return;const before=state.achievements.length;state.achievements=state.achievements.filter(a=>{try{return getBadgeCheck(a.id)}catch{return false}});if(state.achievements.length!==before)saveState()}
function checkAllBadges(){
  if(!state.user)return;if(!state.achievements)state.achievements=[];
  const earned=new Set(state.achievements.map(a=>a.id));let newOnes=[];
  BADGES.forEach(b=>{try{if(!earned.has(b.id)&&getBadgeCheck(b.id)){state.achievements.push({id:b.id,unlockedAt:new Date().toISOString()});newOnes.push(b)}}catch{}});
  if(newOnes.length){saveState();newOnes.forEach((b,i)=>setTimeout(()=>showBadgePopup(b),i*2200))}
  renderDrawerBadges();
}
function showBadgePopup(badge){
  const p=document.getElementById('badge-popup');if(!p)return;
  document.getElementById('bp-icon').textContent=badge.icon;
  document.getElementById('bp-name').textContent=badge.name;
  document.getElementById('bp-desc').textContent=badge.desc;
  p.classList.add('show');setTimeout(()=>p.classList.remove('show'),3500);
}
function renderDrawerBadges(){
  if(!state.achievements)return;
  const wrap=document.getElementById('drawer-badges-wrap');const grid=document.getElementById('drawer-badges-grid');if(!wrap||!grid)return;
  const earned=new Set(state.achievements.map(a=>a.id));
  if(!earned.size){wrap.style.display='none';return}
  wrap.style.display='';
  grid.innerHTML=BADGES.filter(b=>earned.has(b.id)).map(b=>`<div class="bdg ${b.rarity}" title="${b.name}: ${b.desc}">${b.icon}</div>`).join('');
}

// ═══ SETTINGS ═══
function setTheme(theme){
  if(theme==='dark')document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme',theme);
  document.querySelectorAll('.theme-opt').forEach(el=>el.classList.toggle('selected',el.dataset.themeVal===theme));
  if(state.settings){state.settings.theme=theme;saveState()}
  if(theme==='midnight')startParticles();else stopParticles();
}
function applyLang(lang){/* basic i18n placeholder */}
async function resizeImage(file,maxSize=200){
  return new Promise(resolve=>{const img=new Image();img.onload=()=>{const canvas=document.createElement('canvas');canvas.width=maxSize;canvas.height=maxSize;const ctx=canvas.getContext('2d');const size=Math.min(img.width,img.height);const ox=(img.width-size)/2,oy=(img.height-size)/2;ctx.drawImage(img,ox,oy,size,size,0,0,maxSize,maxSize);resolve(canvas.toDataURL('image/jpeg',.82))};img.src=URL.createObjectURL(file)});
}
async function handlePhotoUpload(e){const file=e.target.files[0];if(!file)return;const b64=await resizeImage(file);state.user.photo=b64;saveState();updateAvatarDisplay();toast('✓ Foto actualizada');e.target.value=''}
function removePhoto(){state.user.photo=null;saveState();updateAvatarDisplay();toast('Foto eliminada')}
async function toggleBrowserNotif(enabled){
  if(!enabled){if(state.settings)state.settings.notifBrowser=false;saveState();return}
  if(!('Notification'in window)){toast('Este navegador no soporta notificaciones');document.getElementById('cfg-notif-browser').checked=false;return}
  const p=await Notification.requestPermission();
  if(p!=='granted'){toast('⚠ Permiso denegado');document.getElementById('cfg-notif-browser').checked=false;return}
  if(state.settings)state.settings.notifBrowser=true;saveState();
  new Notification('✓ Notificaciones activadas',{body:'Recibirás alertas de Finanzas & Hábitos'});
}
function openSettings(){
  const cfg=state.settings||{};
  document.getElementById('cfg-weekly-url').value=cfg.n8nWeeklyUrl||'';
  document.getElementById('cfg-reminder-url').value=cfg.n8nReminderUrl||'';
  document.getElementById('cfg-notif-email').value=cfg.notifEmail||state.user.email||'';
  document.getElementById('cfg-lang').value=cfg.lang||'es';
  document.getElementById('cfg-notif-browser').checked=!!(cfg.notifBrowser&&Notification.permission==='granted');
  document.getElementById('cfg-notif-weekly').checked=!!cfg.notifWeekly;
  document.getElementById('cfg-habit-time').value=cfg.habitReminderTime||'08:00';
  const cc=cfg.currencyCode||'USD';const sel=document.getElementById('cfg-currency');
  for(const opt of sel.options){if(opt.value.startsWith(cc+'|')){sel.value=opt.value;break}}
  document.querySelectorAll('.theme-opt').forEach(el=>el.classList.toggle('selected',el.dataset.themeVal===(cfg.theme||'dark')));
  updateAvatarDisplay();
  document.getElementById('settings-modal').classList.add('open');
}
function saveSettings(){
  const lang=document.getElementById('cfg-lang').value;
  const currVal=document.getElementById('cfg-currency').value;
  const[currencyCode,currencySymbol]=(currVal||'USD|$').split('|');
  state.settings={...state.settings,n8nWeeklyUrl:document.getElementById('cfg-weekly-url').value.trim(),n8nReminderUrl:document.getElementById('cfg-reminder-url').value.trim(),notifEmail:document.getElementById('cfg-notif-email').value.trim(),notifBrowser:document.getElementById('cfg-notif-browser').checked,notifWeekly:document.getElementById('cfg-notif-weekly').checked,habitReminderTime:document.getElementById('cfg-habit-time').value||'08:00',lang,currencyCode,currencySymbol};
  saveState();closeModal('settings-modal');updateAll();toast('✓ Ajustes guardados');
}
async function sendWeeklyReport(){
  const url=(state.settings||{}).n8nWeeklyUrl||'';
  if(!url){toast('⚠ Configura la URL del webhook en Ajustes');return}
  const{start,end}=getWeekRange();
  const wTxns=state.transactions.filter(t=>t.date>=start&&t.date<=end);
  const inc=wTxns.filter(t=>t.type==='income'),exp=wTxns.filter(t=>t.type==='expense');
  const byCat={};exp.forEach(t=>{const c=t.category||'Otros';byCat[c]=(byCat[c]||0)+t.amount});
  const hGoals=state.goals.filter(g=>g.type==='habit');
  const habits=hGoals.map(g=>{let done=0;for(let i=0;i<7;i++){const d=new Date(start);d.setDate(d.getDate()+i);const ds=d.toISOString().split('T')[0];const e=state.dayEntries[ds];if(e&&e.habits&&e.habits.includes(g.id))done++}return{name:g.name,icon:g.icon,completed:done,total:7}});
  const fmtD=ds=>new Date(ds+'T12:00:00').toLocaleDateString('es',{day:'numeric',month:'short'});
  const payload={user:{name:state.user.name,email:(state.settings||{}).notifEmail||state.user.email},week:{start,end,label:`${fmtD(start)} - ${fmtD(end)}`},finances:{income:{total:inc.reduce((s,t)=>s+t.amount,0),count:inc.length},expenses:{total:exp.reduce((s,t)=>s+t.amount,0),byCategory:byCat},balance:inc.reduce((s,t)=>s+t.amount,0)-exp.reduce((s,t)=>s+t.amount,0)},habits};
  try{await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});toast('✓ Reporte enviado a n8n')}
  catch{toast('⚠ Error al contactar n8n')}
}

// ═══ EXPORT / IMPORT ═══
function dlFile(content,filename,type){const blob=new Blob([content],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();document.body.removeChild(a);setTimeout(()=>URL.revokeObjectURL(url),1000)}
function exportJSON(){dlFile(JSON.stringify({...state,_exportedAt:new Date().toISOString(),_version:2},null,2),`finanzas-backup-${todayStr()}.json`,'application/json');toast('✓ Backup JSON descargado')}
function exportCSV(){const BOM='﻿';const headers=['Fecha','Tipo','Descripción','Fuente / Categoría','Monto'];const rows=state.transactions.sort((a,b)=>a.date.localeCompare(b.date)).map(t=>[t.date,t.type==='income'?'Ingreso':'Gasto',t.description||'',t.type==='income'?(t.source||''):(t.category||''),t.amount]);const csv=BOM+[headers,...rows].map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');dlFile(csv,`transacciones-${todayStr()}.csv`,'text/csv;charset=utf-8;');toast('✓ CSV descargado')}
function importFromJSON(e){const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=ev=>{try{const data=JSON.parse(ev.target.result);if(!data.transactions&&!data.user){toast('⚠ Archivo no válido');return}if(!confirm(`¿Importar datos de "${data.user?.name||'archivo'}"?\nEsto reemplazará tus datos actuales.`))return;state={goals:[],dayEntries:{},settings:{},achievements:[],savingsGoals:[],...data};delete state._exportedAt;delete state._version;saveState();closeModal('settings-modal');showApp();toast('✓ Datos importados')}catch{toast('⚠ Error al leer el archivo')}};reader.readAsText(file);e.target.value=''}

// ═══ N8N WORKFLOWS ═══
function downloadN8nWorkflow(type){
  const json=type==='weekly'?buildWeeklyWorkflow():buildReminderWorkflow();
  dlFile(JSON.stringify(json,null,2),type==='weekly'?'workflow-reporte-semanal.json':'workflow-recordatorios.json','application/json');
  toast('✓ Workflow descargado — importá en n8n');
}
function buildWeeklyWorkflow(){
  const jsCode=`const d=$input.first().json;const{user,week,finances,habits}=d;const hRows=habits.map(h=>{const p=h.total>0?Math.round(h.completed/h.total*100):0;const c=p>=70?'#16a34a':p>=40?'#ca8a04':'#dc2626';return'<tr><td>'+h.icon+' '+h.name+'</td><td>'+h.completed+'/'+h.total+'</td><td style="color:'+c+'">'+p+'%</td></tr>';}).join('');const cRows=Object.entries(finances.expenses.byCategory||{}).sort((a,b)=>b[1]-a[1]).map(([c,v])=>'<tr><td>'+c+'</td><td style="color:#dc2626">-$'+v.toLocaleString()+'</td></tr>').join('');const bal=finances.balance;const bc=bal>=0?'#16a34a':'#dc2626';const html='<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f1f5f9"><div style="max-width:580px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)"><div style="background:linear-gradient(135deg,#1e3a5f,#3b82f6);padding:32px;text-align:center;color:#fff"><div style="font-size:2rem">💰</div><h1 style="margin:8px 0">Reporte Semanal</h1><p style="opacity:.8">'+week.label+' · Hola, '+user.name+'!</p></div><div style="padding:28px"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px"><div style="background:#f0fdf4;border-radius:12px;padding:16px;text-align:center"><div style="font-size:.7rem;color:#16a34a;font-weight:700">INGRESOS</div><div style="font-size:1.4rem;font-weight:800;color:#16a34a">$'+finances.income.total.toLocaleString()+'</div></div><div style="background:#fef2f2;border-radius:12px;padding:16px;text-align:center"><div style="font-size:.7rem;color:#dc2626;font-weight:700">GASTOS</div><div style="font-size:1.4rem;font-weight:800;color:#dc2626">$'+finances.expenses.total.toLocaleString()+'</div></div><div style="background:'+( bal>=0?'#eff6ff':'#fef2f2')+';border-radius:12px;padding:16px;text-align:center"><div style="font-size:.7rem;color:'+bc+';font-weight:700">BALANCE</div><div style="font-size:1.4rem;font-weight:800;color:'+bc+'">'+(bal>=0?'+':'-')+'$'+Math.abs(bal).toLocaleString()+'</div></div></div>'+(cRows?'<h3 style="font-size:.78rem;color:#94a3b8;margin:0 0 10px">GASTOS POR CATEGORÍA</h3><table style="width:100%;border-collapse:collapse;font-size:.9rem;margin-bottom:24px">'+cRows+'</table>':'')+(hRows?'<h3 style="font-size:.78rem;color:#94a3b8;margin:0 0 10px">HÁBITOS</h3><table style="width:100%;border-collapse:collapse;font-size:.88rem"><tr style="background:#f8fafc"><th style="padding:8px;text-align:left">Hábito</th><th style="padding:8px;text-align:center">Días</th><th style="padding:8px;text-align:center">%</th></tr>'+hRows+'</table>':'')+'</div><div style="background:#f8fafc;padding:16px;text-align:center;font-size:.75rem;color:#94a3b8">Finanzas &amp; Hábitos</div></div></body></html>';return[{json:{to:user.email,subject:'📊 Tu reporte semanal — '+week.label,html}}];`;
  return{name:"Finanzas & Hábitos — Reporte Semanal",nodes:[{id:"wh1",name:"Recibir Reporte",type:"n8n-nodes-base.webhook",typeVersion:2,position:[240,300],webhookId:"finanzas-reporte",parameters:{httpMethod:"POST",path:"finanzas-reporte-semanal",responseMode:"onReceived",responseCode:"200",responseData:""}},{id:"co1",name:"Crear Email HTML",type:"n8n-nodes-base.code",typeVersion:2,position:[480,300],parameters:{mode:"runOnceForAllItems",jsCode}},{id:"em1",name:"Enviar Email",type:"n8n-nodes-base.emailSend",typeVersion:2.1,position:[720,300],parameters:{fromEmail:"={{ $json.to }}",toEmail:"={{ $json.to }}",subject:"={{ $json.subject }}",emailType:"html",html:"={{ $json.html }}",options:{}}}],connections:{"Recibir Reporte":{main:[[{node:"Crear Email HTML",type:"main",index:0}]]},"Crear Email HTML":{main:[[{node:"Enviar Email",type:"main",index:0}]]}},active:false,settings:{executionOrder:"v1"},meta:{templateCredsSetupCompleted:false}};
}
function buildReminderWorkflow(){
  const jsCode=`const d=$input.first().json;const{user,event,actions}=d;const confirmHtml='<div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:20px"><div style="background:linear-gradient(135deg,#16a34a,#22c55e);padding:24px;border-radius:12px;text-align:center;color:#fff"><div style="font-size:2rem">✅</div><h2 style="margin:0">Evento registrado</h2></div><div style="padding:20px"><p>Hola <b>'+user.name+'</b>, tu evento fue guardado.</p><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px;margin:16px 0"><div style="font-size:.8rem;color:#16a34a;font-weight:700">EVENTO</div><div style="font-size:1.1rem;font-weight:800">'+event.title+'</div><div style="color:#64748b;margin-top:4px">'+(event.time?event.time+' · ':'')+event.date+'</div></div></div></div>';const reminderHtml='<div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:20px"><div style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);padding:24px;border-radius:12px;text-align:center;color:#fff"><div style="font-size:2rem">⏰</div><h2 style="margin:0">Recordatorio</h2></div><div style="padding:20px"><p>Hola <b>'+user.name+'</b>, mañana tenés:</p><div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:16px;margin:16px 0"><div style="font-size:.8rem;color:#2563eb;font-weight:700">MAÑANA</div><div style="font-size:1.1rem;font-weight:800">'+event.title+'</div><div style="color:#64748b;margin-top:4px">'+(event.time?event.time+' · ':'')+event.date+'</div></div></div></div>';return[{json:{to:user.email,sendConfirmation:actions.sendConfirmation,sendReminder:actions.sendReminder,reminderDate:actions.reminderDate,confirmSubject:'✅ Evento registrado: '+event.title,confirmHtml,reminderSubject:'⏰ Mañana: '+event.title,reminderHtml}}];`;
  return{name:"Finanzas & Hábitos — Recordatorios",nodes:[{id:"rn1",name:"Recibir Evento",type:"n8n-nodes-base.webhook",typeVersion:2,position:[240,300],webhookId:"finanzas-recordatorio",parameters:{httpMethod:"POST",path:"finanzas-recordatorio",responseMode:"onReceived",responseCode:"200",responseData:""}},{id:"rn2",name:"Preparar Emails",type:"n8n-nodes-base.code",typeVersion:2,position:[460,300],parameters:{mode:"runOnceForAllItems",jsCode}},{id:"rn3",name:"Confirmacion?",type:"n8n-nodes-base.if",typeVersion:2,position:[680,300],parameters:{conditions:{conditions:[{id:"c1",leftValue:"={{ $json.sendConfirmation }}",rightValue:true,operator:{type:"boolean",operation:"equals"}}],combinator:"and"}}},{id:"rn4",name:"Email Confirmacion",type:"n8n-nodes-base.emailSend",typeVersion:2.1,position:[900,200],parameters:{fromEmail:"={{ $json.to }}",toEmail:"={{ $json.to }}",subject:"={{ $json.confirmSubject }}",emailType:"html",html:"={{ $json.confirmHtml }}",options:{}}},{id:"rn5",name:"Merge",type:"n8n-nodes-base.merge",typeVersion:3,position:[1100,300],parameters:{mode:"passThrough",output:"input1"}},{id:"rn6",name:"Recordatorio?",type:"n8n-nodes-base.if",typeVersion:2,position:[1300,300],parameters:{conditions:{conditions:[{id:"c2",leftValue:"={{ $json.sendReminder }}",rightValue:true,operator:{type:"boolean",operation:"equals"}}],combinator:"and"}}},{id:"rn7",name:"Esperar Fecha",type:"n8n-nodes-base.wait",typeVersion:1.1,position:[1520,200],parameters:{resume:"specificTime",dateTime:"={{ $json.reminderDate }}"}},{id:"rn8",name:"Email Recordatorio",type:"n8n-nodes-base.emailSend",typeVersion:2.1,position:[1740,200],parameters:{fromEmail:"={{ $json.to }}",toEmail:"={{ $json.to }}",subject:"={{ $json.reminderSubject }}",emailType:"html",html:"={{ $json.reminderHtml }}",options:{}}}],connections:{"Recibir Evento":{main:[[{node:"Preparar Emails",type:"main",index:0}]]},"Preparar Emails":{main:[[{node:"Confirmacion?",type:"main",index:0}]]},"Confirmacion?":{main:[[{node:"Email Confirmacion",type:"main",index:0}],[{node:"Merge",type:"main",index:1}]]},"Email Confirmacion":{main:[[{node:"Merge",type:"main",index:0}]]},"Merge":{main:[[{node:"Recordatorio?",type:"main",index:0}]]},"Recordatorio?":{main:[[{node:"Esperar Fecha",type:"main",index:0}],[]]},"Esperar Fecha":{main:[[{node:"Email Recordatorio",type:"main",index:0}]]}},active:false,settings:{executionOrder:"v1"},meta:{templateCredsSetupCompleted:false}};
}

// ═══ PWA ═══
let _swReg=null;
async function installPWA(){if(!window._pwaPrompt){toast('Abrí desde un servidor HTTP para instalar');return}window._pwaPrompt.prompt();const{outcome}=await window._pwaPrompt.userChoice;if(outcome==='accepted')toast('✓ Instalando app…');window._pwaPrompt=null;document.getElementById('pwa-install-btn').style.display='none'}
async function registerSW(){if(!('serviceWorker'in navigator))return;try{_swReg=await navigator.serviceWorker.register('./sw.js',{scope:'./'});console.log('[PWA] SW registrado')}catch(e){console.log('[PWA] SW no disponible (necesita HTTP):',e.message)}}
window.addEventListener('load',()=>{
  registerSW();
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();window._pwaPrompt=e;const btn=document.getElementById('pwa-install-btn');if(btn)btn.style.display='flex'});
  window.addEventListener('appinstalled',()=>{const btn=document.getElementById('pwa-install-btn');if(btn)btn.style.display='none';toast('✓ App instalada')});
});

// ═══ SWIPE GESTURES ═══
(function(){
  const VIEWS=['home','dashboard','calendar','goals'];
  let tx=0,ty=0;
  document.addEventListener('touchstart',e=>{if(document.getElementById('app').classList.contains('hidden'))return;if(e.target.closest('.overlay,.drawer,.modal'))return;tx=e.changedTouches[0].clientX;ty=e.changedTouches[0].clientY},{passive:true});
  document.addEventListener('touchend',e=>{if(document.getElementById('app').classList.contains('hidden'))return;if(e.target.closest('.overlay,.drawer,.modal'))return;const dx=e.changedTouches[0].clientX-tx;const dy=e.changedTouches[0].clientY-ty;if(Math.abs(dx)>72&&Math.abs(dx)>Math.abs(dy)*1.4){const i=VIEWS.indexOf(currentView);if(dx<0&&i<VIEWS.length-1)switchView(VIEWS[i+1]);else if(dx>0&&i>0)switchView(VIEWS[i-1])}},{passive:true});
})();

// ═══ MODAL HELPERS ═══
function closeModal(id){document.getElementById(id).classList.remove('open')}
function closeIfOutside(e,id){if(e.target===document.getElementById(id))closeModal(id)}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeDrawer();
    ['add-modal','edit-budgets-modal','edit-profile-modal','day-modal','goal-modal','settings-modal','sg-modal','contrib-modal','habit-cal-modal'].forEach(id=>closeModal(id));
  }
});
