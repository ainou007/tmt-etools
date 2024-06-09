import { toHex } from '@/lib/utils';
import { deleteTags } from './deleteTags';
import { TEmailError } from '@/hooks/useEmailValidation';
import { characters } from '@/constants/chars';

export type unCodedChar = {
  char: string;
  code: string;
  howMany: number;
};

export const getUncodedChars = (email: string) => {
  let unCodedLetters: unCodedChar[] = [];

  // Ajouter les characters non codé a la list "unCodedLetters" d'une façon organise pour eviter la repetition
  const addToUncodedLettersArray = (char: unCodedChar): void => {
    const obj = unCodedLetters.find((obj: unCodedChar) => obj.char === char.char);
    if (obj != undefined) {
      unCodedLetters = unCodedLetters.map((item) => {
        if (obj.char === item.char) {
          item.howMany += 1;
        }
        return item;
      });
    } else {
      unCodedLetters.push(char);
    }
  };

  const checkListHasUncodedChar = (list: string[]): void => {
    list.forEach((item) => {
      characters.forEach((character) => {
        if (toHex(item) == character.name) {
          addToUncodedLettersArray({
            code: character.code,
            char: item,
            howMany: 1,
          });
        }
      });
    });
  };

  //Delete Tags
  let codeHtml: string = deleteTags(email);

  // Convert the text to array of letters
  let allLetters: string[] = codeHtml.split('');

  // Check if the array contains an uncoded letter and push it in the unCodedLetters array
  checkListHasUncodedChar(allLetters);

  if (unCodedLetters.length == 0) {
    return null;
  }

  let message = `<ul>
    ${unCodedLetters
      .map((char) => {
        return `<li>
          <b>${char.char} [exists ${char.howMany} ${char.howMany === 1 ? 'time' : 'times'}] </b>
      </li>`;
      })
      .join('')}
  </ul>`;

  const a: TEmailError = { title: 'Uncoder Characters', message };

  return a;
};
