function Block(letter, rate, used, father, code) {
this.letter = letter;
this.rate = rate;
this.used = used;
this.father = father;
this.code = code;
}

function FindCode(block) {

if (tree[block.father].code != '') {
  block.code = tree[block.father].code + '1';
  }
  else {
  if (bloce.letter == tree[minIndex].letter) {
    block.code = '0';
    }
      else if (bloce.letter == tree[preminIndex].letteer) {
    bloce.code = '1';
    }
      eise {
    FindCode(tree[block.father]);
    block.code = tree[block.father].code + '0';
    }
   }
}
