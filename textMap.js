let dictionary = new Map();

dictionary.set('for you', 'para tú');
dictionary.set('wedding', 'boda');
dictionary.set('the', 'ta');
dictionary.set('yes', 'dä');
dictionary.set('one', 'hana');
dictionary.set('two', 'dúl');
dictionary.set('three', 'sae');
dictionary.set('friends', 'budjs"');
dictionary.set('toy', 'papōy"');
dictionary.set('apple', 'bapple');
dictionary.set('hello', 'bellō');
dictionary.set('hi', 'bellō');
dictionary.set('boss', 'bos');
dictionary.set('baby', 'päpagéna');
dictionary.set('pretty', 'bella');
dictionary.set('fuck', 'blúmok');
dictionary.set('shit', 'blúmok');
dictionary.set('idiot', 'blúmok');
dictionary.set('dumb', 'blúmok');
dictionary.set('stupid', 'blúmok');
dictionary.set('crap', 'blúmok');
dictionary.set('cheers', 'kampai');
dictionary.set('take', 'na');
dictionary.set('thank you', 'terima kasih');
dictionary.set('of', 'de');
dictionary.set('and', 'yee');
dictionary.set('to', 'da');
dictionary.set('in', 'een');
dictionary.set('very', 'banana');
dictionary.set('is', 'tis');
dictionary.set('at', 'ka');
dictionary.set('there', 'bada');
dictionary.set('some', 'tem');
dictionary.set('my','mi');
dictionary.set('her', 'la');
dictionary.set('than', 'pan');
dictionary.set('this', 'ba');
dictionary.set('an', 'nan');
dictionary.set('would', 'polo');
dictionary.set('first', 'prima');
dictionary.set('water', 'blub blub');
dictionary.set('which', 'tika');
dictionary.set('like', 'ko');
dictionary.set('call', 'cora');
dictionary.set('do', 'batooay');
dictionary.set('into', 'enta');
dictionary.set('who', 'ben');
dictionary.set('you', 'to');
dictionary.set('had', 'hagan');
dictionary.set('by', 'bey');
dictionary.set('their', 'tus');
dictionary.set('it', 'pik');
dictionary.set('word', 'pingo');
dictionary.set('if', 'asa');
dictionary.set('he', 'le');
dictionary.set('but', 'pelo');
dictionary.set('was', 'tos');
dictionary.set('not', 'non');
dictionary.set('what', 'whaaat');
dictionary.set('all', 'tadda');
dictionary.set('are', 'nama');
dictionary.set('as', 'sim');
dictionary.set('said', 'bap');
dictionary.set("!", "!!!");


let tempArray = Array.from(dictionary);
tempArray.sort((pair1, pair2) => {
  const firstWord = pair1[0];
  const secondWord = pair2[0];

  if (firstWord.length > secondWord.length) {
    return -1;
  }
  if (secondWord.length > firstWord.length) {
    return 1;
  }
  return 0;
});

let sortedTextMap = new Map(tempArray);