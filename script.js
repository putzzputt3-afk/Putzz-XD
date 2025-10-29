// CONFIG: Ganti link raw ini dengan link RAW kamu (plain text atau JSON {"password":"..."})
const PASSWORD_RAW_URL = 'https://raw.githubusercontent.com/putzzputt3-afk/Putzz-XD/refs/heads/main/password.json';

// localStorage key
const STORAGE_KEY = 'ipa_scores_v1';

// 30 soal IPA Kelas 9 (format: {q, choices:[], answer: index})
const questions = [
  { q: "1. Fungsi utama sistem reproduksi pria adalah ...", choices:["Menghasilkan ovum","Menghasilkan sperma","Menghasilkan hormon estrogen","Mencerna makanan"], answer:1 },
  { q: "2. Sel telur pada manusia dilepaskan dari ...", choices:["Ovarium (indung telur)","Uterus (rahim)","Tuba falopi","Leher rahim"], answer:0 },
  { q: "3. Alat ukur kuat arus listrik adalah ...", choices:["Voltmeter","Ohmmeter","Amperemeter","Wattmeter"], answer:2 },
  { q: "4. Satu satuan hambatan listrik adalah ...", choices:["Volt","Ampere","Ohm","Watt"], answer:2 },
  { q: "5. Hubungan antara tegangan (V), arus (I) dan hambatan (R) adalah ...", choices:["V = I × R","R = V × I","I = V × R","V = R / I"], answer:0 },
  { q: "6. Magnet permanen biasanya terbuat dari bahan ...", choices:["Besi, nikel atau kobalt","Karet","Kaca","Kertas"], answer:0 },
  { q: "7. Perubahan wujud langsung dari padat ke gas disebut ...", choices:["Menguap","Menyublim","Mencair","Membeku"], answer:1 },
  { q: "8. Energi yang disimpan pada benda karena posisinya disebut ...", choices:["Energi kinetik","Energi potensial","Energi kimia","Energi listrik"], answer:1 },
  { q: "9. Contoh reaksi endotermik adalah ...", choices:["Pembakaran kayu","Pencampuran asam-basa","Fotosintesis","Pembekuan air"], answer:2 },
  { q: "10. Proses fotosintesis menghasilkan ...", choices:["Oksigen dan glukosa","Karbon dioksida","Natrium klorida","Air saja"], answer:0 },
  { q: "11. Unit SI untuk gaya adalah ...", choices:["Joule","Newton","Watt","Pascal"], answer:1 },
  { q: "12. Gelombang bunyi termasuk gelombang ...", choices:["Transversal","Elektromagnetik","Longitudinal","Stasioner"], answer:2 },
  { q: "13. Cahaya putih dapat diuraikan menjadi warna oleh ...", choices:["Lensa cembung","Cermin datar","Prisma","Filter polarisasi"], answer:2 },
  { q: "14. Tekanan pada titik dalam zat cair berbanding lurus dengan ...", choices:["Massa jenis dan kedalaman","Volume","Suhu saja","Warna cairan"], answer:0 },
  { q: "15. Salah satu penyebab gempa bumi adalah ...", choices:["Perubahan cuaca","Pergerakan lempeng tektonik","Pasang surut laut","Rotasi bumi"], answer:1 },
  { q: "16. Lapisan bumi tempat terdapat magma adalah ...", choices:["Kerak (korteks)","Mantel","Inti luar","Inti dalam"], answer:1 },
  { q: "17. Perpindahan panas yang memerlukan medium bergerak disebut ...", choices:["Konduksi","Konveksi","Radiasi","Evaporasi"], answer:1 },
  { q: "18. Reaksi pembakaran sempurna menghasilkan ...", choices:["Karbon monoksida","Karbon dioksida dan air","Asam sulfat","Nitrogen oksida"], answer:1 },
  { q: "19. Dalam pewarisan sifat Mendel, sifat resesif muncul jika ...", choices:["Salah satu alel dominan hadir","Kedua alel resesif hadir","Hanya satu alel resesif hadir","Tidak ada alel"], answer:1 },
  { q: "20. Gen adalah bagian dari ...", choices:["Selulosa","DNA (asam deoksiribonukleat)","Protein","Lipid"], answer:1 },
  { q: "21. Sumber energi terbarukan dari pergerakan air adalah ...", choices:["Minyak bumi","Tenaga hidro","Batu bara","Gas alam"], answer:1 },
  { q: "22. Satuan energi listrik yang sering digunakan pada tagihan rumah tangga adalah ...", choices:["Joule","Watt","Kilowatt-jam (kWh)","Ampere"], answer:2 },
  { q: "23. Pencemaran udara akibat pembakaran bahan bakar fosil menghasilkan gas ...", choices:["Oksigen","Karbon dioksida dan sulfur oksida","Nitrogen murni","Helium"], answer:1 },
  { q: "24. Benda mengapung jika ...", choices:["Massa jenis benda > massa jenis cairan","Massa jenis benda < massa jenis cairan","Volume benda besar","Bentuk benda bulat"], answer:1 },
  { q: "25. Hukum kekekalan massa menyatakan ...", choices:["Massa selalu berubah saat bereaksi","Jumlah massa sebelum dan sesudah reaksi sama","Massa dapat diciptakan","Berat selalu konstan"], answer:1 },
  { q: "26. Penambahan katalis pada reaksi kimia menyebabkan ...", choices:["Reaksi berhenti","Meningkatkan energi aktivasi","Menurunkan energi aktivasi dan mempercepat reaksi","Mengubah hasil reaksi"], answer:2 },
  { q: "27. Sinar yang dibiaskan oleh lensa cembung dapat membuat bayangan ...", choices:["Selalu nyata","Selalu maya","Bisa nyata atau maya tergantung jarak benda","Tidak pernah terbentuk"], answer:2 },
  { q: "28. Pasangan planet yang berupa gas raksasa adalah ...", choices:["Bumi dan Mars","Merkurius dan Venus","Jupiter dan Saturnus","Bulan dan Matahari"], answer:2 },
  { q: "29. Contoh organisme pengurai adalah ...", choices:["Tumbuhan hijau","Hewan herbivora","Bakteri dan jamur","Karnivora"], answer:2 },
  { q: "30. Gas rumah kaca yang paling dikenal dan berkontribusi pada pemanasan global adalah ...", choices:["Oksigen","Karbon dioksida (CO2)","Nitrogen","Helium"], answer:1 }
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
  const input = prompt('Masukkan password admin:');
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
      alert('BERHASIL MENGAMBIL DATABASE 🔓');
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