// CONFIG: Ganti link raw ini dengan link RAW kamu (plain text atau JSON {"password":"..."})
const PASSWORD_RAW_URL = 'https://raw.githubusercontent.com/putzzputt3-afk/Putzz-XD/refs/heads/main/password.json';

// localStorage key
const STORAGE_KEY = 'ipa_scores_v1';

// 30 soal IPA Kelas 9 (format: {q, choices:[], answer: index})
const questions = [
  { q: "1. Pancasila sebagai dasar negara tercantum dalam ...", choices:["Pembukaan UUD 1945 alinea keempat","Batang tubuh UUD 1945","Ketetapan MPR No. XX/MPR/1966","Undang-Undang Nomor 12 Tahun 2011"], answer:0 },
  { q: "2. Sila pertama Pancasila mengandung nilai ...", choices:["Persatuan dan kesatuan","Kemanusiaan yang adil dan beradab","Ketuhanan Yang Maha Esa","Kerakyatan yang dipimpin oleh hikmat kebijaksanaan"], answer:2 },
  { q: "3. Tujuan negara Indonesia tercantum dalam ...", choices:["Pembukaan UUD 1945 alinea keempat","Pasal 1 ayat (2) UUD 1945","Proklamasi Kemerdekaan","Ketetapan MPR"], answer:0 },
  { q: "4. Bentuk negara Indonesia adalah ...", choices:["Kerajaan","Republik","Monarki konstitusional","Federasi"], answer:1 },
  { q: "5. Makna kedaulatan rakyat adalah ...", choices:["Rakyat memiliki kekuasaan tertinggi dalam negara","Rakyat tunduk kepada pemerintah","Rakyat tidak mempunyai hak politik","Pemerintah lebih berkuasa dari rakyat"], answer:0 },
  { q: "6. Lembaga yang berwenang mengubah dan menetapkan UUD adalah ...", choices:["DPR","Presiden","MPR","MA"], answer:2 },
  { q: "7. Hak asasi manusia (HAM) merupakan ...", choices:["Pemberian pemerintah","Hak dasar yang dimiliki setiap manusia sejak lahir","Hadiah dari negara","Hak yang berlaku di negara demokrasi saja"], answer:1 },
  { q: "8. Contoh pelaksanaan kewajiban warga negara adalah ...", choices:["Menagih pajak","Membayar pajak","Menerima bantuan sosial","Menolak aturan pemerintah"], answer:1 },
  { q: "9. Salah satu kewajiban warga negara menurut UUD 1945 adalah ...", choices:["Menjadi pegawai negeri","Mendapat pendidikan","Menjaga ketertiban umum","Ikut serta dalam usaha pertahanan dan keamanan negara"], answer:3 },
  { q: "10. Arti penting norma dalam kehidupan bermasyarakat adalah ...", choices:["Membatasi kebebasan masyarakat","Sebagai pedoman dalam berperilaku","Menentukan status sosial seseorang","Menentukan kekuasaan pemerintah"], answer:1 },
  { q: "11. Sumber hukum tertinggi di Indonesia adalah ...", choices:["Pancasila","UUD 1945","Ketetapan MPR","Undang-undang"], answer:0 },
  { q: "12. Nilai-nilai yang terkandung dalam sila kedua Pancasila adalah ...", choices:["Gotong royong dan kekeluargaan","Kemanusiaan, keadilan, dan tenggang rasa","Musyawarah dan mufakat","Ketuhanan dan keimanan"], answer:1 },
  { q: "13. Musyawarah untuk mufakat merupakan perwujudan dari sila ...", choices:["Ketuhanan Yang Maha Esa","Kemanusiaan yang adil dan beradab","Kerakyatan yang dipimpin oleh hikmat kebijaksanaan","Keadilan sosial bagi seluruh rakyat Indonesia"], answer:2 },
  { q: "14. Pemerintahan daerah diatur dalam UUD 1945 pasal ...", choices:["Pasal 18","Pasal 27","Pasal 30","Pasal 33"], answer:0 },
  { q: "15. Globalisasi dapat diartikan sebagai ...", choices:["Proses mendunia dalam berbagai bidang kehidupan","Persaingan antarnegara berkembang","Penyatuan budaya nasional","Kebijakan pemerintah terhadap luar negeri"], answer:0 },
  { q: "16. Dampak positif globalisasi adalah ...", choices:["Hilangnya identitas bangsa","Meningkatnya persaingan tidak sehat","Perkembangan ilmu pengetahuan dan teknologi","Masuknya budaya asing tanpa filter"], answer:2 },
  { q: "17. Demokrasi Pancasila berasaskan ...", choices:["Kekuasaan rakyat tanpa batas","Kebebasan mutlak individu","Kedaulatan rakyat yang berlandaskan moral Pancasila","Kekuasaan tunggal presiden"], answer:2 },
  { q: "18. Salah satu ciri negara hukum adalah ...", choices:["Pemerintah bertindak sewenang-wenang","Adanya perlindungan hukum bagi warga negara","Kekuasaan tidak terbatas","Hukum dibuat oleh satu orang"], answer:1 },
  { q: "19. Pasal 27 ayat (1) UUD 1945 berbunyi ...", choices:["Setiap warga negara berhak atas pekerjaan dan penghidupan yang layak","Segala warga negara bersamaan kedudukannya di dalam hukum dan pemerintahan","Setiap orang berhak atas kebebasan beragama","Negara berdasarkan atas hukum"], answer:1 },
  { q: "20. Tugas utama TNI adalah ...", choices:["Menjalankan pemerintahan daerah","Menjaga pertahanan dan kedaulatan negara","Menegakkan hukum","Mengatur perekonomian"], answer:1 },
  { q: "21. Upaya bela negara dapat dilakukan melalui ...", choices:["Perang saja","Pendidikan kewarganegaraan","Demonstrasi","Pemogokan"], answer:1 },
  { q: "22. Contoh perilaku yang mencerminkan sila kelima Pancasila adalah ...", choices:["Bekerja keras dan menghargai hak orang lain","Beribadah sesuai agama masing-masing","Menghormati pendapat orang lain","Menolong sesama manusia"], answer:0 },
  { q: "23. Arti penting persatuan dan kesatuan bangsa adalah ...", choices:["Meningkatkan ego daerah","Menumbuhkan sikap individualis","Menjaga keutuhan NKRI","Memperlemah negara"], answer:2 },
  { q: "24. Peraturan perundang-undangan dibuat berdasarkan ...", choices:["Kepentingan golongan tertentu","Nilai-nilai Pancasila","Kepentingan partai politik","Tekanan internasional"], answer:1 },
  { q: "25. Salah satu bentuk partisipasi warga negara dalam kehidupan berbangsa dan bernegara adalah ...", choices:["Golput dalam pemilu","Ikut serta dalam pemilu","Menolak keputusan pemerintah","Tidak peduli terhadap aturan"], answer:1 },
  { q: "26. Pancasila disebut ideologi terbuka karena ...", choices:["Dapat disesuaikan dengan perkembangan zaman tanpa mengubah nilai dasarnya","Mudah diganti ideologi lain","Tidak memiliki dasar hukum","Hanya berlaku di masa tertentu"], answer:0 },
  { q: "27. Ketetapan MPR berada pada hierarki peraturan perundang-undangan di bawah ...", choices:["UUD 1945","Undang-Undang","Peraturan Pemerintah","Peraturan Presiden"], answer:0 },
  { q: "28. Lembaga yang mengawasi pelaksanaan undang-undang di Indonesia adalah ...", choices:["BPK","MA","DPR","Presiden"], answer:1 },
  { q: "29. Hak untuk menyampaikan pendapat diatur dalam UUD 1945 pasal ...", choices:["Pasal 28","Pasal 30","Pasal 34","Pasal 33"], answer:0 },
  { q: "30. Tanggung jawab warga negara terhadap lingkungan sosial adalah ...", choices:["Membuang sampah sembarangan","Ikut menjaga kebersihan dan ketertiban","Mengabaikan kegiatan masyarakat","Menutup diri dari tetangga"], answer:1 }
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