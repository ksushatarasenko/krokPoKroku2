
const wordData = {
    "arena": {
        "word": "arena/areny",
        "translation": "арена",
        "image": "https://cdn1.e-polish.eu/4e8b0fa7/o31d7spx8mnppvsh/arena.jpeg",
        "sentence": "Klaun występuje na cyrkowej arenie.",
        "p1": "им.п. - arena / areny",
        "p2": "род.п. — areny / aren",
        "p3": "дат.п. — arenie / arenom",
        "p4": "вин.п. — arenę / areny",
        "p5": "твор.п. — areną / arenami",
        "p6": "предл.п. — arenie / arenach",
        "p7": "зват.п. — areno / areny",
        "audio": "./audio/04B/arena.mp3"
    },
    "bieg na krótkim dystansie": {
        "word": "bieg na krótkim dystansie",
        "translation": "бег на короткое расстояние",
        "image": "https://cdn1.e-polish.eu/709e371d/ha8doqswfky9kffz/bieg_na_krotkim_dystansie.jpg",
        "sentence": "Zawsze zwyciężam w biegu na krótkim dystansie. ",
        "p1": "фраза ",
        "p2": "",
        "p3": "",
        "p4": "",
        "p5": "",
        "p6": "",
        "p7": "",
        "audio": "./audio/04B/bieg na krótkim dystansie.mp3"
    },
    "boisko": {
        "word": "boisko",
        "translation": "спортивная площадка",
        "image": "https://cdn1.e-polish.eu/4e8b0fa7/q6m4hutprcvxzrvq/boisko.jpeg",
        "sentence": "Na boisku rozegrano mecz.",
        "p1": "существительное, средний род",
        "p2": "им.п. - boisko / boiska",
        "p3": "род.п. — boiska / boisk",
        "p4": "дат.п. — boisku / boiskom",
        "p5": "вин.п. — boisko / boiska",
        "p6": "твор.п. — boiskiem / boiskami",
        "p7": "предл.п. — boisku / boiskach",
        "p8": "зват.п. — boisko / boiska",
        "audio": "./audio/04B/boisko.mp3"
    },
    "bramka": {
        "word": "bramka",
        "translation": "футбольные ворота",
        "image": "https://cdn1.e-polish.eu/709e371d/1pgypchr4ihkqhui/bramka.jpg",
        "sentence": "Piłkarz nie trafił piłką do bramki. ",
        "p1": "существительное, женский род",
        "p2": "им.п. - bramka / bramki",
        "p3": "род.п. — bramki / bramek",
        "p4": "дат.п. — bramce / bramkom",
        "p5": "вин.п. — bramkę / bramki",
        "p6": "твор.п. — bramką / bramkami",
        "p7": "предл.п. — bramce / bramkach",
        "p8": "зват.п. — bramko / bramki",
        "audio": "./audio/04B/bramka.mp3"
    },
    "bramkarz": {
        "word": "bramkarz ",
        "translation": "вратарь",
        "image": "https://cdn1.e-polish.eu/4e8b0fa7/ow36h174o01cvn5i/bramkarz.jpeg",
        "sentence": "Bramkarz tej drużyny jest dobry, nie wpuścił żadnego gola. ",
        "p1": "существительное, мужской род",
        "p2": "им.п. - bramkarz / bramkarze",
        "p3": "род.п. — bramkarza / bramkarzy",
        "p4": "дат.п. — bramkarzowi / bramkarzom",
        "p5": "вин.п. — bramkarza / bramkarzy",
        "p6": "твор.п. — bramkarzem / bramkarzami",
        "p7": "предл.п. — bramkarzu / bramkarzach",
        "p8": "зват.п. — bramkarzu / bramkarze",
        "audio": "./audio/04B/bramkarz.mp3"
    },
    "cel": {
        "word": "cel",
        "translation": "мишень",
        "image": "https://cdn1.e-polish.eu/4e8b0fa7/1tzmhovrdwzgb4hg/cel.jpeg",
        "sentence": "Mój życiowy cel to zrobienie kariery.",
        "p1": "существительное, мужской род",
        "p2": "им.п. - cel / cele",
        "p3": "род.п. — celu / celów",
        "p4": "дат.п. — celowi / celom",
        "p5": "вин.п. — cel / cele",
        "p6": "твор.п. — celem / celami",
        "p7": "предл.п. — celu / celach",
        "p8": "зват.п. — celu / cele",
        "audio": "./audio/04B/cel.mp3"
    },
    "kondycja fizyczna": {
        "word": "kondycja fizyczna ",
        "translation": "физическая кондиция",
        "image": "https://cdn1.e-polish.eu/709e371d/81lfw7as79icwote/kondycja_fizyczna.jpg",
        "sentence": "Mało ćwiczę, więc mam kiepską kondycję fizyczną. ",
        "p1": "фраза ",
        "p2": "",
        "audio": "./audio/04B/kondycja fizyczna.mp3"
    },
    "odbicie": {
        "word": "odbicie/odbicia",
        "translation": "отображение",
        "image": "https://cdn1.e-polish.eu/4e8b0fa7/lzd7bdcu9snrgb2i/odbicie.jpeg",
        "sentence": "Codziennie rano przyglądam się swojemu odbiciu w lustrze.",
        "p1": "odbicie — единственное число, именительный падеж",
        "p2": "odbicia — множественное число, именительный падеж",
        "audio": "./audio/04B/odbicie.mp3"
    },
};


function showPopup(el) {
  if (!el || !el.dataset || !el.dataset.id) return;
  const id = el.dataset.id;
  const data = wordData[id];
  if (!data) return;

  document.getElementById('popupWord').textContent = data.word;
  document.getElementById('popupTranslation').textContent = data.translation;
  document.getElementById('popupDetails').innerHTML = `${data.p1}<br>${data.p2}<br>${data.p3}<br>${data.p4}<br>${data.p5}<br>${data.p6}<br>${data.p7}<br>${data.p8}`;
  document.getElementById('popupSentence').textContent = data.sentence;
  document.getElementById('popupImage').src = data.image;

  const audio = document.getElementById('popupAudio');
  audio.pause();
  audio.src = data.audio;
  audio.currentTime = 0;
  audio.onloadeddata = () => audio.play().catch(e => console.error('Аудио ошибка:', e));

  document.getElementById('popupOverlay').style.display = 'flex';
}

function hidePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
  const audio = document.getElementById('popupAudio');
  if (audio) audio.pause();
}