let dictionary = new Map();

dictionary.set('for you', 'para tú');
dictionary.set('wedding', 'boda');
dictionary.set('the', 'la');
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
dictionary.set('tahnk you', 'terima kasih');
dictionary.set('of', 'ba');
dictionary.set('and', 'a');
dictionary.set('to', 'ana');
dictionary.set('in', 'bana');
dictionary.set('very', 'banana');
dictionary.set('is', 'anana');
dictionary.set('language','minionese');
dictionary.set('minion','MINION');
dictionary.set('Minion','MINION');
dictionary.set("Minionese","Banananese")


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