document.addEventListener("DOMContentLoaded", () => {

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  /* =========================
     MODAL
  ========================= */

  const modal = $("#modal");
  const modalTitle = $("#modalTitle");
  const modalText = $("#modalText");
  const modalEmoji = $("#modalEmoji");
  const modalAction = $("#modalAction");
  const closeModalBtn = $("#closeModal");

  function showModal(title, text, emoji = "🎉", action = "Awww 🥹") {
    if (!modal) return;

    modalTitle.textContent = title;
    modalText.textContent = text;
    modalEmoji.textContent = emoji;
    modalAction.textContent = action;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }

  closeModalBtn?.addEventListener("click", closeModal);

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  /* =========================
     TOAST
  ========================= */

  function toast(message) {
    const t = $("#toast");
    if (!t) return;

    t.textContent = message;
    t.classList.add("show");

    setTimeout(() => {
      t.classList.remove("show");
    }, 2500);
  }

  /* =========================
     CONFETTI
  ========================= */

  function confetti() {
    const box = $("#confetti");
    if (!box) return;

    for (let i = 0; i < 95; i++) {
      const piece = document.createElement("i");

      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "%";
      piece.style.top = -Math.random() * 30 + "%";
      piece.style.background = [
        "#7b2cbf",
        "#9d4edd",
        "#ff80ab",
        "#f4d6ff",
        "#ffd166"
      ][i % 5];

      piece.style.transform =
        `rotate(${Math.random() * 360}deg)`;

      piece.style.animationDelay =
        Math.random() * 0.9 + "s";

      piece.style.animationDuration =
        1.8 + Math.random() * 1.7 + "s";

      box.appendChild(piece);

      setTimeout(() => piece.remove(), 4200);
    }
  }

  /* =========================
     MAIN SURPRISES
  ========================= */

  $("#openMainSurprise")?.addEventListener("click", () => {
    confetti();

    showModal(
      "REINA!!! 💜",
      "You are officially 19. Your prize is a lifetime supply of blessings, laughter, and Lewy-approved teasing. Also: I love you lots.",
      "🎂",
      "I accept this responsibility"
    );
  });

  $("#topSurprise")?.addEventListener("click", () => {
    confetti();

    showModal(
      "A tiny birthday fact…",
      "At 19, you are old enough to make excellent decisions. Unfortunately, you are also still young enough for me to blame every questionable decision on being 19. 😂",
      "🪄",
      "Continue the nonsense"
    );
  });

  $("#nursingBtn")?.addEventListener("click", () => {
    showModal(
      "NURSING PROPHECY 🩺",
      "One day you will walk into a hospital looking confident, helping people, knowing exactly what you are doing… and I will still be saying, Remember when you used to procrastinate? 😂 You can do this, Reina.",
      "🩺",
      "I WILL DO IT"
    );
  });

  $("#finalBtn")?.addEventListener("click", () => {
    confetti();

    showModal(
      "THE LAST SURPRISE 💌",
      "If you ever doubt yourself, come back to this page. Read the letter. Then go chase that nursing dream again. You are deeply loved, Reina. Happy 19th. 💜",
      "💜",
      "I love you too"
    );
  });

  modalAction?.addEventListener("click", () => {
    closeModal();
    toast("Birthday magic successfully activated ✨");
  });

  /* =========================
     SCROLL BUTTONS
  ========================= */

  $("#scrollStory")?.addEventListener("click", () => {
    $("#story")?.scrollIntoView({
      behavior: "smooth"
    });
  });

  $("#replayBtn")?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(confetti, 600);
  });

  /* =========================
     QUIZ
  ========================= */

  const quiz = [
    {
      q: "If purple had a smell, what would it smell like?",
      a: [
        "Lavender + luxury",
        "Grape soda",
        "Money 😂",
        "Reina’s perfume"
      ],
      r: "Correct answer: whatever Reina says. We are not brave enough to disagree."
    },
    {
      q: "What is Reina most likely to say when told to study?",
      a: [
        "“I am studying.”",
        "“In a minute.”",
        "“Tomorrow.”",
        "“Who said I wasn’t?”"
      ],
      r: "Interesting. All four answers have been accepted by the committee."
    },
    {
      q: "What should Future Nurse Reina NEVER forget?",
      a: [
        "Her dreams",
        "Her kindness",
        "Her snacks",
        "All of the above"
      ],
      r: "ALL OF THE ABOVE. Especially the snacks. Hospital shifts are serious business."
    },
    {
      q: "Who is responsible for this ridiculous website?",
      a: [
        "Reina",
        "The government",
        "Lewy",
        "A mysterious purple fairy"
      ],
      r: "Correct: Lewy. The evidence is overwhelming."
    },
    {
      q: "At 19, what is Reina allowed to do?",
      a: [
        "Dream bigger",
        "Grow wiser",
        "Be wonderfully herself",
        "All three 💜"
      ],
      r: "YES. Go be 19. Go be brilliant. Go make your people proud."
    }
  ];

  let questionIndex = 0;

  function renderQuestion() {
    const question = quiz[questionIndex];

    const number = $("#qNumber");
    const progress = $("#progress");
    const questionText = $("#question");
    const answers = $("#answers");
    const result = $("#quizResult");

    if (!number || !progress || !questionText || !answers) return;

    number.textContent =
      `Question ${questionIndex + 1}/${quiz.length}`;

    progress.style.width =
      ((questionIndex + 1) / quiz.length * 100) + "%";

    questionText.textContent = question.q;

    answers.innerHTML = "";

    question.a.forEach((answerText, index) => {
      const button = document.createElement("button");

      button.className = "answer";
      button.textContent = answerText;

      button.addEventListener("click", () => {
        if (result) result.textContent = question.r;

        setTimeout(() => {
          questionIndex =
            (questionIndex + 1) % quiz.length;

          renderQuestion();
        }, 1400);
      });

      answers.appendChild(button);
    });

    if (result) result.textContent = "";
  }

  renderQuestion();

  /* =========================
     BUTTON LAB
  ========================= */

  $("#complimentBtn")?.addEventListener("click", () => {
    const messages = [
      "You are genuinely precious. 💜",
      "19 has never looked this cute.",
      "Your smile is a public service.",
      "Future nurse + kind heart = dangerous combination."
    ];

    $("#labOutput").textContent =
      messages[Math.floor(Math.random() * messages.length)];
  });

  $("#roastBtn")?.addEventListener("click", () => {
    const messages = [
      "Nineteen years and still no instruction manual? 😭",
      "Your procrastination deserves its own degree.",
      "Future nurse, current professional button-presser.",
      "I would roast you more, but today you are birthday-protected."
    ];

    $("#labOutput").textContent =
      messages[Math.floor(Math.random() * messages.length)];
  });

  const labSecret = document.querySelector(
    ".button-lab #secretBtn"
  );

  labSecret?.addEventListener("click", () => {
    confetti();

    showModal(
      "YOU FOUND IT 🤫",
      "This was never actually a secret. But congratulations on clicking a suspicious button anyway. That is very Reina of you. 😂",
      "🔐",
      "Worth it"
    );
  });

  /* =========================
     ESCAPE BUTTON
  ========================= */

  const escapeBtn = $("#escapeBtn");

  function moveEscape() {
    if (!escapeBtn) return;

    const maxX = Math.max(
      0,
      window.innerWidth - 180
    );

    const maxY = Math.max(
      100,
      window.innerHeight - 160
    );

    escapeBtn.style.position = "fixed";
    escapeBtn.style.left =
      Math.random() * maxX + "px";

    escapeBtn.style.top =
      100 +
      Math.random() *
      Math.max(30, maxY - 100) +
      "px";

    escapeBtn.style.zIndex = "70";

    toast("Nice try 😂");
  }

  escapeBtn?.addEventListener(
    "mouseenter",
    moveEscape
  );

  escapeBtn?.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      moveEscape();
    },
    { passive: false }
  );

  escapeBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    moveEscape();
  });

  /* =========================
     REVEAL ANIMATIONS
  ========================= */

  const revealElements = $$(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  /* =========================
     CURSOR GLOW
  ========================= */

  document.addEventListener("mousemove", (e) => {
    const glow = $(".cursor-glow");

    if (glow) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    }
  });

  /* =========================
     PLAY ME VIDEO GAME
  ========================= */

  const playBtn = $("#playBtn");
  const gameArea = $("#game-area");
  const message = $("#message");
  const videoModal = $("#videoModal");
  const reinaVideo = $("#reinaVideo");
  const closeVideo = $("#closeVideo");

  let attempts = 0;
  const maxAttempts = 7;

  const gameMessages = [
    "Can you catch the button? 😏",
    "Oops too slow! 😝",
    "Haha not that easy!",
    "You almost got me!",
    "Why so slow Reina? 😂",
    "Okay okay... almost!",
    "Awww fine you win! 🥺💖",
    "Playing your surprise... 🎬"
  ];

  function makePlayable() {
    if (!playBtn) return;

    playBtn.textContent = "Okay Play! ▶️";
    playBtn.style.left = "50%";
    playBtn.style.top = "50%";
    playBtn.style.transform =
      "translate(-50%, -50%)";
    playBtn.style.scale = "1.15";
    playBtn.style.background = "#2ec4b6";
  }

  function movePlayButton() {
    if (!playBtn || !gameArea) return;

    attempts++;

    if (attempts < maxAttempts) {
      if (message) {
        message.textContent =
          gameMessages[attempts] ||
          "Almost! 😂";
      }

      const maxX =
        Math.max(
          10,
          gameArea.clientWidth -
          playBtn.offsetWidth -
          12
        );

      const maxY =
        Math.max(
          10,
          gameArea.clientHeight -
          playBtn.offsetHeight -
          12
        );

      playBtn.style.left =
        Math.random() * maxX + "px";

      playBtn.style.top =
        Math.random() * maxY + "px";

      playBtn.style.transform = "none";
      playBtn.style.scale =
        Math.max(
          0.65,
          1 - attempts * 0.05
        );
    } else {
      if (message) {
        message.textContent =
          gameMessages[7];
      }

      makePlayable();
    }
  }

  function openVideo() {
    if (!videoModal || !reinaVideo) return;

    videoModal.classList.add("show");

    reinaVideo.currentTime = 0;

    const playPromise = reinaVideo.play();

    if (playPromise) {
      playPromise.catch(() => {
        toast("Tap the video to play ▶️");
      });
    }
  }

  function closeVideoModal() {
    if (!videoModal || !reinaVideo) return;

    videoModal.classList.remove("show");
    reinaVideo.pause();
  }

  if (playBtn) {
    playBtn.addEventListener("mouseenter", () => {
      if (attempts < maxAttempts) {
        movePlayButton();
      }
    });

    playBtn.addEventListener(
      "touchstart",
      (e) => {
        if (attempts < maxAttempts) {
          e.preventDefault();
          movePlayButton();
        }
      },
      { passive: false }
    );

    playBtn.addEventListener("click", (e) => {
      if (attempts < maxAttempts) {
        e.preventDefault();
        movePlayButton();
      } else {
        openVideo();
      }
    });
  }

  closeVideo?.addEventListener(
    "click",
    closeVideoModal
  );

  videoModal?.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      closeVideoModal();
    }
  });

  /* =========================
     19 REASONS
  ========================= */

  const reasonCards = $$(".reason-card");
  const secretFinal = $("#secret-final");

  let openedReasons = new Set();

  if ("IntersectionObserver" in window) {
    const reasonsObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("show");
              }, index * 70);

              reasonsObserver.unobserve(
                entry.target
              );
            }
          });
        },
        { threshold: 0.1 }
      );

    reasonCards.forEach((card) => {
      reasonsObserver.observe(card);
    });
  } else {
    reasonCards.forEach((card) => {
      card.classList.add("show");
    });
  }

  reasonCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      openedReasons.add(index);

      card.style.background = "#fff7d6";

      if (navigator.vibrate) {
        navigator.vibrate(30);
      }

      if (
        openedReasons.size ===
        reasonCards.length
      ) {
        if (secretFinal) {
          secretFinal.style.display = "block";

          setTimeout(() => {
            secretFinal.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          }, 100);

          if (navigator.vibrate) {
            navigator.vibrate([
              30,
              50,
              30
            ]);
          }
        }
      }
    });
  });

  /* =========================
     CERTIFICATE
  ========================= */

  const certificateButton =
    $("#certBtn");

  const certificateModal =
    $("#certModal");

  const closeCertificate =
    $("#closeCert");

  certificateButton?.addEventListener(
    "click",
    () => {
      if (!certificateModal) return;

      certificateModal.style.display =
        "flex";

      confetti();
    }
  );

  closeCertificate?.addEventListener(
    "click",
    () => {
      if (certificateModal) {
        certificateModal.style.display =
          "none";
      }
    }
  );

  certificateModal?.addEventListener(
    "click",
    (e) => {
      if (e.target === certificateModal) {
        certificateModal.style.display =
          "none";
      }
    }
  );

  const finalSecretButton =
    document.querySelector(
      "#secret-final button"
    );

  finalSecretButton?.addEventListener(
    "click",
    () => {
      certificateButton?.click();
    }
  );

});
