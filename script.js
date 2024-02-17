const form = document.querySelector(".form");
const nameUser = document.querySelector("#name");
const secondNameUser = document.querySelector("#secondName");
const emailUser = document.querySelector("#email");
const phoneUser = document.querySelector("#phone");
const agreeUser = document.querySelector("#agree");





form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();
  const userData = {};
  userData.name = nameUser.value;
  userData.secondName = secondNameUser.value;
  userData.phone = phoneUser.value;
  userData.email = emailUser.value;
  userData.agree = true;

  if (agreeUser.checked === true) {
    fetch(`https://polinashneider.space/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: valyusha1999'
      },
      body: JSON.stringify(userData),
    })
    .then((result) => {
      return result.json()
    })
    .then(function (data) {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
        alert("ОШИБКА!!! Проверьте корректность введённых данных!")
      });
  } else {
    alert("Для отправки анкеты нужно согласиться с обработкой персональных данных");
  };
  
  // Здесь твой код
});
