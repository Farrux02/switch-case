for (let i = 0; i <= 4; i++) {
  switch (i) {
    case 1:
      let question = +prompt('Как зовут основателя компании Apple? \n 1)Стив Джобс \n 2)Марк цукерберг \n 3)Джон Ленон \n 4)Билл Гейтс');
      switch (question) {
        case 1:
          alert("Верный ответ!");
          break;

        default:
          alert("Неверный ответ");
          i--;
          break;
      }
      break;
    case 2:
      let question2 = +prompt('Какой переменной не существует в JavaScript? \n 1)Var \n 2)Let \n 3)Const \n 4)Int \n ');
      switch (question2) {
        case 4:
          alert("Верный ответ!");
          break;

        default:
          alert("Неверный ответ");
          i--;
          break;
      }
      break;
    case 3:
      let question3 = +prompt('Какой HTML тэг отвечает за жирный шрифт? \n 1)<i></i> \n 2)<em></em> \n 3)<b></b> \n 4)<p></p>');
      switch (question3) {
        case 3:
          alert("Верный ответ!");
          break;

        default:
          alert("Неверный ответ");
          i--;
          break;
      }
      break;
    case 4:
      alert('Вы ответили на все вопросы!')
      break;
    default:
      break;
  }
}
