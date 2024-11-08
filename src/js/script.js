const questions = 'zbieg okoliczności-zakres słów-zająć stanowsko-zaciemniony-wyłączyć się, odpłynąć(gdzieś myślami)-wysiąść(z autobusu)-wyraźny(np. dowód)-w szczególności-w kontakcie z-ujednalicający-Twoja kolej-tak samo jak ja, tak i ty-subtelne odcienie-rzucać cień(np. na sprawę)-przestępca-przekazywać, przenieść, transportować-połączenie dwóch słów lub więcej-powszechnie-podobieństwo-podjąć(np.pracę)-parasol przeciwsłoneczny-okruch-odłożyć (np. spotkanie)-odzwierciedlać-niezwykły, warty odnotowania-nieletni-mroczny-królewski(start on re..)-królewski (start on r)-królewski (start on k)-kolejka elektryczna-jelita-jego talent do tworzenia nowych słów ze starych elementów-dokuczać komuś-czynnik jednoczący-czuć się wyniszczonym-cień, klosz, abażur, zasłona-cechy wspólne-brak słów'.split('-');

const answers = 'concidence-range of words-to take sides-shady-to zone out-to alight-articulate-in particular-in touch with-unifying-Over to you-as well as-subtle shades-to shadow-a felon-convey-collocations-commonly-likeness-undertake-sunshade-crumb-put across-to reflect-remarkable-a minor-shadowy-regal-royal-kingly-a train set-intestines-its readiness to coin new words out of old elements-to bug someone-unifying factor-to feel gutted-shade-common feature-at a loss for words'.split('-');

const engMattQuestNov2018Fungus = 'ze względu na sposób działania-przygotuj się na coś-wysysając jego składniki odżywczne-tak więc, a zatem-przejąć kontrolę nad czymś-mógł robić co mu się podoba-na przykład(not for expample)-bezcelowe-chociaż, aczkolwiek-mając to na uwadze-grzyb sprawia, że mrówka wspina się na łodygę pobliskiej rośliny na ściśle określonej wysokości-zarodniki-spaść na kogoś-skuteczny-przerażające-zwłoki, ciało'.split('-');
const engMattAnswNov2018Fungus = 'because of its modus operandi-Brace yourself for something-draining its nutrients-thus-to hijack something-could do as it pleases-for instance-aimless-albeit-with this in mind-fungus makes the ant climb a nearby plant stem at very specific height-spores-to fall on somebody-efficient-creepy-corpse'.split('-');




// console.log(questions, answers);
const boxes = document.querySelectorAll('.boxes');
const questionBoxes = document.querySelectorAll('.questions');
const answerBoxes = document.querySelectorAll('.answers');


const main = () => {
  eviuB2Unit1();
  eviub3();
  
}


const eviuB2Unit1 = () => {
  const box = 0;
  const answerBox = 0;
  questions.forEach(el => creatorWords(box, el))
  answers.forEach(el => createAnswers(answerBox, el))
}



// const eviub3 = () => {
//   const box = 1;
//   engMattQuestNov2018Fungus.forEach(el => creatorWords(box, el));
// }

// questions.forEach(el => );

const creatorWords = (box, el) => {
  
  const wordBox = document.createElement('div');
  wordBox.classList.add('box-exc-quest');
  questionBoxes[box].append(wordBox);
  const word = document.createElement('p');
  word.classList.add('words')
  wordBox.append(word);
  word.textContent = el;
  
  
}

const createAnswers = (answerBox, el) => {
  // const answer = document.createElement('div');
  // answer.classList.add('answers');
  // boxes[box].append(answer);
  const divAnswer = document.createElement('div');
  divAnswer.classList.add('box-exc-answer');
  answerBoxes[answerBox].append(divAnswer);
  const answerInput = document.createElement('input');
  divAnswer.append(answerInput);
  answerInput.placeholder = el;
  
}









document.addEventListener('DOMContentLoaded', main);