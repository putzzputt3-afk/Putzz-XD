// CONFIG: Ganti link raw ini dengan link RAW kamu (plain text atau JSON {"password":"..."})
const PASSWORD_RAW_URL = 'https://raw.githubusercontent.com/putzzputt3-afk/Putzz-XD/refs/heads/main/password.json';

// localStorage key
const STORAGE_KEY = 'ipa_scores_v1';

// 30 soal 9 (format: {q, choices:[], answer: index});
const questions = [
  { q: "1. Read the text: 'Rina goes to school by bicycle every morning. She likes the fresh air on the way.' What does Rina use to go to school?", choices:["Car","Bus","Bicycle","Motorcycle"], answer:2 },
  { q: "2. Read the text: 'My father works in a hospital. He helps sick people every day.' What is his job?", choices:["Teacher","Doctor","Driver","Farmer"], answer:1 },
  { q: "3. Read the text: 'Andi bought a new dictionary yesterday. He wants to improve his English vocabulary.' Why did Andi buy a dictionary?", choices:["He wants to draw pictures","He wants to improve his English","He needs to fix something","He likes reading novels"], answer:1 },
  { q: "4. Read the text: 'The cat is sleeping under the chair. It looks very comfortable.' Where is the cat?", choices:["On the table","Under the chair","Behind the door","In the box"], answer:1 },
  { q: "5. Read the text: 'Siti always washes her hands before eating.' When does Siti wash her hands?", choices:["After eating","Before eating","While eating","Never"], answer:1 },
  { q: "6. Read the text: 'The library is a quiet place. Students can read and borrow books there.' What can students do in the library?", choices:["Play football","Read books","Cook food","Sing songs"], answer:1 },
  { q: "7. Read the text: 'My mother is cooking in the kitchen. It smells delicious.' What is the mother doing?", choices:["Sleeping","Cleaning","Cooking","Reading"], answer:2 },
  { q: "8. Read the text: 'Budi likes playing football in the afternoon with his friends.' When does Budi play football?", choices:["In the morning","At night","In the afternoon","At noon"], answer:2 },
  { q: "9. Read the text: 'Ani bought some apples and oranges in the market yesterday.' Where did Ani buy fruits?", choices:["In the garden","At school","In the market","At home"], answer:2 },
  { q: "10. Read the text: 'The sun rises in the east and sets in the west.' Where does the sun rise?", choices:["North","South","East","West"], answer:2 },
  { q: "11. Read the text: 'Tono is a diligent student. He always studies before the exam.' What can we say about Tono?", choices:["He is lazy","He is diligent","He is noisy","He is careless"], answer:1 },
  { q: "12. Read the text: 'Today is Sunday. My family and I are having a picnic in the park.' What are they doing?", choices:["Studying","Sleeping","Having a picnic","Working"], answer:2 },
  { q: "13. Read the text: 'The farmer plants rice in the field during the rainy season.' When does the farmer plant rice?", choices:["During the dry season","During the rainy season","At night","In winter"], answer:1 },
  { q: "14. Read the text: 'The students are cleaning their classroom together.' What are the students doing?", choices:["Playing","Cleaning","Studying","Drawing"], answer:1 },
  { q: "15. Read the text: 'The bell rings at 7 a.m. All students go to their class.' What happens at 7 a.m.?", choices:["Lunch time","The bell rings","School ends","Break time"], answer:1 },
  { q: "16. Read the text: 'My sister is very kind. She always helps me with my homework.' What can we say about the sister?", choices:["She is lazy","She is kind","She is angry","She is shy"], answer:1 },
  { q: "17. Read the text: 'The baby is crying because he is hungry.' Why is the baby crying?", choices:["He is sleepy","He is hungry","He is angry","He is happy"], answer:1 },
  { q: "18. Read the text: 'We use umbrellas when it rains.' When do we use umbrellas?", choices:["When it is sunny","When it rains","When it snows","When it is windy"], answer:1 },
  { q: "19. Read the text: 'There are seven days in a week.' How many days are there in a week?", choices:["Five","Six","Seven","Eight"], answer:2 },
  { q: "20. Read the text: 'Mount Bromo is one of the most famous mountains in Indonesia.' What is Mount Bromo?", choices:["A lake","A city","A mountain","A forest"], answer:2 },
  { q: "21. Read the text: 'My brother can play the guitar very well.' What can my brother do?", choices:["Play football","Play guitar","Play games","Play piano"], answer:1 },
  { q: "22. Read the text: 'The students are listening to the teacher carefully.' What are the students doing?", choices:["Talking","Sleeping","Listening","Reading"], answer:2 },
  { q: "23. Read the text: 'It is very hot today, so we go swimming in the pool.' Why do they go swimming?", choices:["Because it is hot","Because it is cold","Because it is rainy","Because it is windy"], answer:0 },
  { q: "24. Read the text: 'The bus stops at the terminal. Many passengers get off.' Where does the bus stop?", choices:["At school","At the terminal","At the park","At home"], answer:1 },
  { q: "25. Read the text: 'We should eat vegetables and fruits every day to stay healthy.' What should we eat every day?", choices:["Rice and meat","Vegetables and fruits","Cakes and snacks","Sweets"], answer:1 },
  { q: "26. Read the text: 'Mr. Ali teaches English at SMP Nusantara.' What is Mr. Ali’s job?", choices:["Doctor","Teacher","Pilot","Chef"], answer:1 },
  { q: "27. Read the text: 'The river is very dirty because people throw rubbish into it.' Why is the river dirty?", choices:["Because of fish","Because of rubbish","Because of rain","Because of rocks"], answer:1 },
  { q: "28. Read the text: 'Rani is reading a novel in the living room now.' What is Rani doing?", choices:["Sleeping","Reading a novel","Cooking","Writing"], answer:1 },
  { q: "29. Read the text: 'We can see many stars in the sky at night.' When can we see the stars?", choices:["In the morning","In the afternoon","At night","At noon"], answer:2 },
  { q: "30. Read the text: 'The students are planting trees to make the school green.' Why are the students planting trees?", choices:["To make the school green","To play with soil","To build a park","To decorate class"], answer:0 }
];

// ---------- helpers: render ----------
const questionsContainer = document.getElementById('questions');
function renderAllQuestions(){
  const frag = document.createDocumentFragment();
  questions.forEach((qs, i) => {
    const qWrap = document.createElement('div');
    qWrap.className = 'question';
    const qTitle = document.createElement('div');
    qTitle.className = 'q-title';
    qTitle.textContent = `${i+1}. ${qs.q}`;
    const opts = document.createElement('div');
    opts.className = 'opts';
    qs.choices.forEach((ch, j) => {
      const opt = document.createElement('label');
      opt.className = 'opt';
      const inputId = `q${i}_opt${j}`;
      opt.htmlFor = inputId;
      opt.innerHTML = `
        <input id="${inputId}" type="radio" name="q${i}" value="${j}">
        <div><strong>${String.fromCharCode(65+j)}.</strong> <span>${ch}</span></div>
      `;
      opts.appendChild(opt);
    });
    qWrap.appendChild(qTitle);
    qWrap.appendChild(opts);
    frag.appendChild(qWrap);
  });
  questionsContainer.appendChild(frag);
}

// ---------- storage ----------
function loadScores(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    return [];
  }
}
function saveScores(list){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// ---------- render score table ----------
const scoreListEl = document.getElementById('score-list');
function renderScoreTable(){
  const list = loadScores();
  scoreListEl.innerHTML = '';
  if(list.length === 0){
    scoreListEl.innerHTML = '<tr><td colspan="4" class="small">Belum ada data.</td></tr>';
    return;
  }
  list.forEach((rec, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${idx+1}</td><td>${escapeHtml(rec.name)}</td><td>${rec.score}</td><td class="small">${new Date(rec.ts).toLocaleString()}</td>`;
    scoreListEl.appendChild(tr);
  });
}
function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ---------- submit ----------
document.getElementById('submit').addEventListener('click', () => {
  const nameEl = document.getElementById('name');
  const name = nameEl.value.trim();
  if(!name){ alert('Masukkan nama peserta terlebih dahulu.'); nameEl.focus(); return; }
  let score = 0;
  questions.forEach((qs, i) => {
    const sel = document.querySelector(`input[name=q${i}]:checked`);
    if(sel && Number(sel.value) === qs.answer) score++;
  });
  const list = loadScores();
  list.push({ name, score, ts: Date.now() });
  saveScores(list);
  renderScoreTable();
  alert(`Selesai! Skor ${name}: ${score} / ${questions.length}`);
  // kosongkan jawaban & nama agar tidak bisa ncontek
  document.getElementById('quiz-form').reset();
  nameEl.value = '';
  document.getElementById('score-table').scrollIntoView({ behavior: 'smooth' });
});

// ---------- clear form ----------
document.getElementById('clear-form').addEventListener('click', () => {
  if(confirm('Kosongkan semua pilihan pada form?')) document.getElementById('quiz-form').reset();
});

// ---------- export CSV ----------
document.getElementById('download-csv').addEventListener('click', () => {
  const list = loadScores();
  if(list.length === 0){ alert('Belum ada data untuk di-export.'); return; }
  let csv = 'No,Name,Score,Time\n';
  list.forEach((r, i) => {
    csv += `${i+1},"${r.name}",${r.score},"${new Date(r.ts).toLocaleString()}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'ipa_scores.csv'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
});

// ---------- reset all (butuh password dari RAW) ----------
document.getElementById('reset-all').addEventListener('click', async () => {
  const input = prompt('Masukkan password yang di berikan Putzz:');
  if(input === null) return;
  try{
    const res = await fetch(PASSWORD_RAW_URL, { cache: 'no-store' });
    if(!res.ok){ alert('GAGAL MENGGAMBIL TOKEN DARI DATABASE 🔒'); return; }
    const text = await res.text();
    let remotePwd = null;
    try{
      const obj = JSON.parse(text);
      remotePwd = obj.password || obj.pwd || obj.pass || obj.adminPassword || null;
    }catch(e){
      remotePwd = text.trim();
    }
    if(!remotePwd){ alert('GAGAL MENGGAMBIL TOKEN DARI DATABASE 🔒'); return; }
    if(input === remotePwd){
      alert('BERHASIL MENGAMBIL DATABASE ✅');
      localStorage.removeItem(STORAGE_KEY);
      renderScoreTable();
    } else {
      alert('GAGAL MENGGAMBIL TOKEN DARI DATABASE 🔒');
    }
  } catch(e){
    console.error(e);
    alert('GAGAL MENGGAMBIL TOKEN DARI DATABASE 🔒');
  }
});

// ---------- init ----------
renderAllQuestions();
renderScoreTable();