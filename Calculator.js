'use strict';

const text = document.getElementById('text');
let math = 0;
let sing = {
  plus: false,
  minus: false,
  multiply: false,
  divide: false,
};

const EventClick = x => {
  switch (x) {
    case 'plus':
      if (sing.minus === true) {
        math -= Number(text.value);
        text.value = '';
      } else if (sing.multiply === true) {
        math *= Number(text.value);
        text.value = '';
      } else if (sing.divide === true) {
        math /= Number(text.value);
        text.value = '';
      }
      math += Number(text.value);
      sing = {
        plus: true,
        minus: false,
        multiply: false,
        divide: false,
      };
      console.log(math);
      return (text.value = '');

    case 'minus':
      if (text.value === '') {
        return (text.value += '-');
        console.log(text.value);
      }
      if (sing.plus === true) {
        math += Number(text.value);
        text.value = '';
      } else if (sing.multiply === true) {
        math *= Number(text.value);
        text.value = '';
      } else if (sing.divide === true) {
        math /= Number(text.value);
        text.value = '';
      }
      math === 0 ? (math = Number(text.value)) : (math -= Number(text.value));

      sing = {
        plus: false,
        minus: true,
        multiply: false,
        divide: false,
      };
      console.log(math);

      return (text.value = '');

    case 'multiply':
      if (sing.plus === true) {
        math += Number(text.value);
        text.value = '';
      } else if (sing.minus === true) {
        math -= Number(text.value);
        text.value = '';
      } else if (sing.divide === true) {
        math /= Number(text.value);
        text.value = '';
      } else if (math === 0) {
        math = Number(text.value);
      } else {
        math *= Number(text.value);
      }

      sing = {
        plus: false,
        minus: false,
        multiply: true,
        divide: false,
      };
      console.log(math);

      return (text.value = '');

    case 'divide':
      if (sing.plus === true) {
        math += Number(text.value);
        text.value = '';
      } else if (sing.multiply === true) {
        math *= Number(text.value);
        text.value = '';
      } else if (sing.minus === true) {
        math -= Number(text.value);
        text.value = '';
      } else if (math === 0) {
        math = Number(text.value);
      } else {
        math /= Number(text.value);
      }

      sing = {
        plus: false,
        minus: false,
        multiply: false,
        divide: true,
      };

      return (text.value = '');
    case 'equels':
      if (sing.plus === true) {
        math += Number(text.value);
      } else if (sing.minus === true) {
        math -= Number(text.value);
      } else if (sing.multiply === true) {
        math *= Number(text.value);
      } else if (sing.divide === true) {
        math /= Number(text.value);
      }

      return (text.value = math);

    case 'del':
      const text2 = [...document.getElementById('text').value];
      text2.pop();
      return (document.getElementById('text').value = text2.join(''));

    case 'c':
      text.value = '';
      sing = {
        plus: false,
        minus: false,
        multiply: false,
        divide: false,
      };
      return (math = 0);

    default:
      return (text.value = text.value + x);
  }
};

console.log(math);
