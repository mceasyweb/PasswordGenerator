"use strict";
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const loverChars = 'abcdefghijklmnopqrstuvwxy';
const numberChars = '0123456789';
const specialChar = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`z{|}~';
const extendedAscii = '¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ';
const qs = document.querySelector.bind(document);
const pwd_ele = qs('#pwd_txt');

function generatePwd(length, chars) {
  if (chars.length === 0) {
    return '';
  }
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

const generator = qs('#generator');
if (generator) {
  generator.addEventListener('click', () => {
    let chars = '';
    if (qs('#upper_char').checked) {
      chars += upperChars;
    }
    if (qs('#lover_char').checked) {
      chars += loverChars;
    }
    if (qs('#numeric_char').checked) {
      chars += numberChars;
    }
    if (qs('#special_char').checked) {
      chars += specialChar;
    }
    if (qs('#extended_ascii').checked) {
      chars += extendedAscii;
    }

    if (pwd_ele) {
      const length = parseInt(qs('#password_length').value);
      const password = generatePwd(length, chars);
      if (password.length <= 0) {
        alert('No char was selected');
      } else {
        pwd_ele.innerText = password;
      }
    }
  });
}

const clipboard = qs('#clipboard');

if (clipboard) {
  clipboard.addEventListener('click', () => {
    if (pwd_ele) {
      navigator.clipboard.writeText(pwd_ele.innerText);
      alert('Password copied to clipboard');
    }
  });
}
