const $ = s => document.querySelector(s);

const modal = $('#modal');
const modalTitle = $('#modalTitle');
const modalText = $('#modalText');
const modalEmoji = $('#modalEmoji');

function showModal(title, text, emoji='🎉', action='Awww 🥹') {
  if (!modal) return;
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalEmoji.textContent = emoji;
  const actionBtn = $('#modalAction');
  if (actionBtn) actionBtn.textContent = action;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

$('#closeModal')?.addEventListener('click', closeModal);

modal?.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

function confetti() {
  const box = $('#confetti');
  if (!box) return;

  for (let i = 0; i < 95; i++) {
    const p = document.createElement('i');
    p.className = 'confetti-piece';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = -Math.random() * 30 + '%';
    p.style.background = ['#7b2cbf','#9d4edd','#ff80ab','#f4d6ff','#ffd166'][i % 5];
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    p.style.animationDelay = Math.random() * .9 + 's';
    p.style.animationDuration = 1.8 + Math.random() * 1.7 + 's';
    box.appendChild(p);
    setTimeout(() => p.remove(), 4200);
  }
}

function toast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

$('#openMainSurprise')?.addEventListener('click', () => {
  confetti();
  showModal(
    'REINA!!! 💜',
    'You are officially 19. Your prize is a lifetime supply of blessings, laughter, and Lewy-approved teasing. Also: I love you lots.',
    '🎂',
    'I accept this responsibility'
  );
});

$('#topSurprise')?.addEventListener('click', () => {
  confetti();
  showModal(
    'A tiny birthday fact…',
    'At 19, you are old enough to make excellent decisions. Unfortunately, you are also still young enough for me to blame every questionable decision on being 19. 😂',
    '🪄',
    'Continue the nonsense'
  );
});

$('#nursingBtn')?.addEventListener('click', () => {
  showModal(
    'NURSING PROPHECY 🩺',
    'One day you will walk into a hospital looking confident, helping people, knowing exactly what you are doing… and I will still be saying, Remember when you used to procrastinate? 😂 You can do this, Reina.',
    '🩺',
    'I WILL DO IT'
  );
});

$('#finalBtn')?.addEventListener('click', () => {
  confetti();
  showModal(
    'THE LAST SURPRISE 💌',
    'If you ever doubt yourself, come back to this page. Read the letter. Then go chase that nursing dream again. You are deeply loved, Reina. Happy 19th. 💜',
    '💜',
    'I love you too'
  );
});

$('#modalAction')?.addEventListener('click', () => {
  closeModal();
  toast('Birthday magic successfully activated ✨');
});

$('#scrollStory')?.addEventListener('click', () => {
  document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
});

$('#replayBtn')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(confetti, 600);
});


/* =========================
   QUIZ
========================= */

const quiz = [
  {
    q: 'If purple had a smell, what would it smell like?',
    a: ['Lavender + luxury','Grape soda','Money 😂','Reina’s perfume'],
    r: 'Correct answer: whatever Reina says. We are not brave enough to disagree.'
  },
  {
    q: 'What is Reina most likely to say when told to study?',
    a: ['“I am studying.”','“In a minute.”','“Tomorrow.”','“Who said I wasn’t?”'],
    r: 'Interesting. All four answers have been accepted by the committee.'
  },
  {
    q: 'What should Future Nurse Reina NEVER forget?',
    a: ['Her dreams','Her kindness','Her snacks','All of the above'],
    r: 'ALL OF THE ABOVE. Especially the snacks. Hospital shifts are serious business.'
  },
  {
    q: 'Who is responsible for this ridiculous website?',
    a: ['Reina','The government','Lewy','A mysterious purple fairy'],
    r: 'Correct: Lewy. The evidence is overwhelming.'
  },
  {
    q: 'At 19, what is Reina allowed to do?',
    a: ['Dream bigger','Grow wiser','Be wonderfully herself','All three 💜'],
    r: 'YES. Go be 19. Go be brilliant. Go make your people proud.'
  }
];

let qi = 0;

function renderQ() {
  const x = quiz[qi];
  const qNumber = $('#qNumber');
  const progress = $('#progress');
  const question = $('#question');
  const answers = $('#answers');
  const result = $('#quizResult');

  if (!x || !answers) return;

  if (qNumber) qNumber.textContent = `Question ${qi + 1}/${quiz.length}`;
  if (progress) progress.style.width = ((qi + 1) / quiz.length * 100) + '%';
  if (question) question.textContent = x.q;

  answers.innerHTML = '';

  x.a.forEach((ans, i) => {
    const b = document.createElement('button');
    b.className = 'answer';
    b.textContent = ans;

    b.addEventListener('click', () => {
      if (result) result.textContent = x.r;

      setTimeout(() => {
        qi = (qi + 1) % quiz.length;
        renderQ();
      }, 1400);
    });

    answers.appendChild(b);
  });

  if (result) result.textContent = '';
}

renderQ();


/* =========================
   BUTTON LAB
========================= */

$('#complimentBtn')?.addEventListener('click', () => {
  const arr = [
    'You are genuinely precious. 💜',
    '19 has never looked this cute.',
    'Your smile is a public service.',
    'Future nurse + kind heart = dangerous combination.'
  ];

  $('#labOutput').textContent =
    arr[Math.floor(Math.random() * arr.length)];
});

$('#roastBtn')?.addEventListener('click', () => {
  const arr = [
    'Nineteen years and still no instruction manual? 😭',
    'Your procrastination deserves its own degree.',
    'Future nurse, current professional button-presser.',
    'I would roast you more, but today you are birthday-protected.'
  ];

  $('#labOutput').textContent =
    arr[Math.floor(Math.random() * arr.length)];
});

$('#secretBtn')?.addEventListener('click', () => {
  confetti();

  showModal(
    'YOU FOUND IT 🤫',
    'This was never actually a secret. But congratulations on clicking a suspicious button anyway. That is very Reina of you. 😂',
    '🔐',
    'Worth it'
  );
});


/* =========================
   ESCAPE BUTTON
========================= */

const escapeBtn = $('#escapeBtn');

function moveEscape() {
  if (!escapeBtn) return;

  const maxX = Math.max(0, window.innerWidth - 180);
  const maxY = Math.max(100, window.innerHeight - 160);

  escapeBtn.style.position = 'fixed';
  escapeBtn.style.left = Math.random() * maxX + 'px';
  escapeBtn.style.top =
    100 + Math.random() * Math.max(30, maxY - 100) + 'px';
  escapeBtn.style.zIndex = '70';

  toast('Nice try 😂');
}

escapeBtn?.addEventListener('mouseenter', moveEscape);

escapeBtn?.addEventListener(
  'touchstart',
  e => {
    e.preventDefault();
    moveEscape();
  },
  { passive: false }
);

escapeBtn?.addEventListener('click', e => {
  e.preventDefault();
  moveEscape();
});


/* =========================
   REVEAL ANIMATIONS
   IMPORTANT: elements are
   visible even if observer fails
========================= */

document.querySelectorAll('.reveal').forEach(el => {
  el.classList.add('visible');
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* =========================
   CURSOR GLOW
========================= */

document.addEventListener('mousemove', e => {
  const g = $('.cursor-glow');
  if (!g) return;

  g.style.left = e.clientX + 'px';
  g.style.top = e.clientY + 'px';
});


/* =========================
   19 REASONS
========================= */

const cards = document.querySelectorAll('.reason-card');

if ('IntersectionObserver' in window) {
  const reasonObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach(card => reasonObserver.observe(card));
} else {
  cards.forEach(card => card.classList.add('show'));
}

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.background = '#fff7d6';

    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  });
});


/* =========================
   CERTIFICATE
========================= */

const certBtn = $('#certBtn');
const certModal = $('#certModal');
const closeCert = $('#closeCert');

certBtn?.addEventListener('click', () => {
  if (certModal) {
    certModal.style.display = 'flex';
    confetti();
  }
});

closeCert?.addEventListener('click', () => {
  if (certModal) certModal.style.display = 'none';
});

certModal?.addEventListener('click', e => {
  if (e.target === certModal) {
    certModal.style.display = 'none';
  }
});


/* =========================
   VIDEO
========================= */

const playVideoButton = $('#playBtn');
const videoModal = $('#videoModal');
const reinaVideo = $('#reinaVideo');
const closeVideo = $('#closeVideo');
const gameArea = $('#game-area');
const videoMessage = $('#message');

let videoAttempts = 0;
const maxVideoAttempts = 7;

function moveVideoButton() {
  if (!playVideoButton || !gameArea) return;

  videoAttempts++;

  if (videoAttempts < maxVideoAttempts) {
    if (videoMessage) {
      videoMessage.textContent =
        [
          'Can you catch the button? 😏',
          'Oops too slow! 😝',
          'Haha not that easy!',
          'You almost got me!',
          'Why so slow Reina? 😂',
          'Okay okay... one more try!',
          'Awww fine! 🥺💖'
        ][Math.min(videoAttempts, 6)];
    }

    const maxX =
      Math.max(10, gameArea.clientWidth - playVideoButton.offsetWidth - 10);

    const maxY =
      Math.max(10, gameArea.clientHeight - playVideoButton.offsetHeight - 10);

    playVideoButton.style.left = Math.random() * maxX + 'px';
    playVideoButton.style.top = Math.random() * maxY + 'px';
    playVideoButton.style.transform = 'none';
  } else {
    if (videoMessage) {
      videoMessage.textContent = 'Playing your surprise... 🎬';
    }

    playVideoButton.textContent = 'Play Your Video ▶️';
    playVideoButton.style.left = '50%';
    playVideoButton.style.top = '50%';
    playVideoButton.style.transform = 'translate(-50%, -50%)';
    playVideoButton.style.background = '#2ec4b6';
  }
}

function openVideo() {
  if (!videoModal || !reinaVideo) return;

  videoModal.classList.add('show');

  reinaVideo.currentTime = 0;

  const promise = reinaVideo.play();

  if (promise) {
    promise.catch(() => {
      toast('Tap the video to start ▶️');
    });
  }
}

playVideoButton?.addEventListener('mouseenter', () => {
  if (videoAttempts < maxVideoAttempts) moveVideoButton();
});

playVideoButton?.addEventListener(
  'touchstart',
  e => {
    if (videoAttempts < maxVideoAttempts) {
      e.preventDefault();
      moveVideoButton();
    }
  },
  { passive: false }
);

playVideoButton?.addEventListener('click', e => {
  if (videoAttempts < maxVideoAttempts) {
    e.preventDefault();
    moveVideoButton();
  } else {
    openVideo();
  }
});

closeVideo?.addEventListener('click', () => {
  videoModal?.classList.remove('show');
  reinaVideo?.pause();
});

videoModal?.addEventListener('click', e => {
  if (e.target === videoModal) {
    videoModal.classList.remove('show');
    reinaVideo?.pause();
  }
});


/* =========================
   BACKGROUND MUSIC
========================= */

const musicFloat = $('#music-float');
const musicIcon = $('#music-icon');
const musicText = $('#music-text');
const nextMusic = $('#next-btn');
const bgAudio = $('#bg-audio');

const tracks = [
  { file: '/aha.mp3', name: 'Aha' },
  { file: '/jcole.mp3', name: 'J Cole' },
  { file: '/songo.mp3', name: 'Drake' }
];

let currentTrack = 0;
let musicPlaying = false;

function loadTrack(index) {
  if (!bgAudio || !tracks.length) return;

  currentTrack =
    ((index % tracks.length) + tracks.length) % tracks.length;

  bgAudio.src = tracks[currentTrack].file;
  bgAudio.load();

  if (musicText) {
    musicText.textContent = tracks[currentTrack].name;
  }
}

async function playMusic() {
  if (!bgAudio) return;

  try {
    await bgAudio.play();

    musicPlaying = true;

    musicFloat?.classList.add('playing');

    if (musicIcon) musicIcon.textContent = '♫';
  } catch (error) {
    musicPlaying = false;

    if (musicText) {
      musicText.textContent = 'Tap Play';
    }
  }
}

function pauseMusic() {
  if (!bgAudio) return;

  bgAudio.pause();
  musicPlaying = false;

  musicFloat?.classList.remove('playing');

  if (musicIcon) musicIcon.textContent = '♪';
}

musicFloat?.addEventListener('click', e => {
  if (e.target === nextMusic) return;

  if (musicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

nextMusic?.addEventListener('click', async e => {
  e.stopPropagation();

  currentTrack = (currentTrack + 1) % tracks.length;

  loadTrack(currentTrack);

  musicPlaying = true;

  musicFloat?.classList.add('playing');

  if (musicIcon) musicIcon.textContent = '♫';

  await playMusic();
});

bgAudio?.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  playMusic();
});

bgAudio?.addEventListener('error', () => {
  if (musicText) {
    musicText.textContent = 'Song unavailable';
  }
});

loadTrack(0);


/* =========================
   SAFETY: NEVER LEAVE PAGE BLANK
========================= */

window.addEventListener('load', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('visible');
  });
});
