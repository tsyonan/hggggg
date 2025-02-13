let tg = window.Telegram.WebApp;
let send_reg = document.querySelector('[name="send_reg"]'),
  buy_item = document.querySelectorAll('[name="buy_item"]'); //

send_reg.addEventListener('click', () => {
  let user_name =
document.querySelector('[name="user_full_name"]').value,
  user_email =
document.querySelector('[name="user_email"]').value,
  user_tel = document.querySelector('[name="user_tel"]').value;
 let user_data = {
   data_type: 'user_sub',
   data_name: user_name,
   data_email: user_email,
   data_tel: user_tel
 }
 tg.sendData(JSON.stringify(user_data));
 tg.close();
})
buy_item.forEach(item => { // перебираем все кнопки Купить
  item.addEventListener('click', () => { // перехватываем событие

    let button_block_info = item.parentNode; // создаем переменную

    let article_name = button_block_info.parentNode.getAttribute('name'); // создаем
переменную с тазванием карточки товара, в которой находится любая
кнопка Купить

   let article_data = { 
     data_type: 'buy_item', // вид/обозначение передаваемой
  
     data_name: article_name // название товара
   }
   tg.sendData(JSON.stringify(article_data)); // преобразуем
  объект с передаваемой инфомацией в JSON-строку

   tg.close(); // закрываем веб-приложение
  })
})
