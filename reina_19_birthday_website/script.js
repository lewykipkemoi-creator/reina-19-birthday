const $ = s => document.querySelector(s);
const modal = $('#modal'), modalTitle = $('#modalTitle'), modalText = $('#modalText'), modalEmoji = $('#modalEmoji');

function showModal(title, text, emoji='🎉', action='Awww 🥹'){
  modalTitle.textContent = title; modalText.textContent = text; modalEmoji.textContent = emoji;
  $('#modalAction').textContent = action; modal.classList.add('show'); modal.setAttribute('aria-hidden','false');
}
function closeModal(){modal.classList.remove('show'); modal.setAttribute('aria-hidden','true')}
$('#closeModal').onclick=closeModal;
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});

function confetti(){
  const box=$('#confetti');
  for(let i=0;i<95;i++){
    const p=document.createElement('i'); p.className='confetti-piece';
    p.style.left=Math.random()*100+'%'; p.style.top=(-Math.random()*30)+'%';
    p.style.background=['#7b2cbf','#9d4edd','#ff80ab','#f4d6ff','#ffd166'][i%5];
    p.style.transform=`rotate(${Math.random()*360}deg)`;
    p.style.animationDelay=(Math.random()*.9)+'s';
    p.style.animationDuration=(1.8+Math.random()*1.7)+'s';
    box.appendChild(p); setTimeout(()=>p.remove(),4200);
  }
}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500)}

$('#openMainSurprise').onclick=()=>{confetti();showModal('REINA!!! 💜','You are officially 19. Your prize is a lifetime supply of blessings, laughter, and Lewy-approved teasing. Also: I love you lots.','🎂','I accept this responsibility')};
$('#topSurprise').onclick=()=>{confetti();showModal('A tiny birthday fact…','At 19, you are old enough to make excellent decisions. Unfortunately, you are also still young enough for me to blame every questionable decision on “being 19.” 😂','🪄','Continue the nonsense')};
$('#nursingBtn').onclick=()=>showModal('NURSING PROPHECY 🩺','One day you will walk into a hospital looking confident, helping people, knowing exactly what you are doing… and I will still be saying, “Remember when you used to procrastinate?” 😂 You can do this, Reina.','🩺','I WILL DO IT');
$('#finalBtn').onclick=()=>{confetti();showModal('THE LAST SURPRISE 💌','If you ever doubt yourself, come back to this page. Read the letter. Then go chase that nursing dream again. You are deeply loved, Reina. Happy 19th. 💜','💜','I love you too')};

$('#modalAction').onclick=()=>{closeModal();toast('Birthday magic successfully activated ✨')};
$('#scrollStory').onclick=()=>document.querySelector('#story').scrollIntoView({behavior:'smooth'});
$('#replayBtn').onclick=()=>{window.scrollTo({top:0,behavior:'smooth'});setTimeout(confetti,600)};

const quiz=[
 {q:'If purple had a smell, what would it smell like?',a:['Lavender + luxury','Grape soda','Money 😂','Reina’s perfume'],r:'Correct answer: whatever Reina says. We are not brave enough to disagree.'},
 {q:'What is Reina most likely to say when told to study?',a:['“I am studying.”','“In a minute.”','“Tomorrow.”','“Who said I wasn’t?”'],r:'Interesting. All four answers have been accepted by the committee.'},
 {q:'What should Future Nurse Reina NEVER forget?',a:['Her dreams','Her kindness','Her snacks','All of the above'],r:'ALL OF THE ABOVE. Especially the snacks. Hospital shifts are serious business.'},
 {q:'Who is responsible for this ridiculous website?',a:['Reina','The government','Lewy','A mysterious purple fairy'],r:'Correct: Lewy. The evidence is overwhelming.'},
 {q:'At 19, what is Reina allowed to do?',a:['Dream bigger','Grow wiser','Be wonderfully herself','All three 💜'],r:'YES. Go be 19. Go be brilliant. Go make your people proud.'}
];
let qi=0;
function renderQ(){
 const x=quiz[qi]; $('#qNumber').textContent=`Question ${qi+1}/${quiz.length}`;
 $('#progress').style.width=((qi+1)/quiz.length*100)+'%'; $('#question').textContent=x.q;
 const box=$('#answers');box.innerHTML='';
 x.a.forEach((ans,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=ans;b.onclick=()=>answer(i);box.appendChild(b)});
 $('#quizResult').textContent='';
}
function answer(i){
 $('#quizResult').textContent=quiz[qi].r;
 setTimeout(()=>{qi=(qi+1)%quiz.length;renderQ()},1400);
}
renderQ();

$('#complimentBtn').onclick=()=>{const arr=['You are genuinely precious. 💜','19 has never looked this cute.','Your smile is a public service.','Future nurse + kind heart = dangerous combination.'];$('#labOutput').textContent=arr[Math.floor(Math.random()*arr.length)]};
$('#roastBtn').onclick=()=>{const arr=['Nineteen years and still no instruction manual? 😭','Your procrastination deserves its own degree.','Future nurse, current professional button-presser.','I would roast you more, but today you are birthday-protected.'];$('#labOutput').textContent=arr[Math.floor(Math.random()*arr.length)]};
$('#secretBtn').onclick=()=>{confetti();showModal('YOU FOUND IT 🤫','This was never actually a secret. But congratulations on clicking a suspicious button anyway. That is very Reina of you. 😂','🔐','Worth it')};

const escapeBtn=$('#escapeBtn');
function moveEscape(){
 const maxX=Math.max(0,window.innerWidth-180), maxY=Math.max(100,window.innerHeight-160);
 escapeBtn.style.position='fixed'; escapeBtn.style.left=Math.random()*maxX+'px'; escapeBtn.style.top=(100+Math.random()*Math.max(30,maxY-100))+'px'; escapeBtn.style.zIndex=70;
 toast('Nice try 😂');
}
escapeBtn.addEventListener('mouseenter',moveEscape);
escapeBtn.addEventListener('touchstart',e=>{e.preventDefault();moveEscape()},{passive:false});
escapeBtn.addEventListener('click',e=>{e.preventDefault();moveEscape()});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.addEventListener('mousemove',e=>{
 const g=$('.cursor-glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';
});
