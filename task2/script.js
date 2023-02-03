const consLog = document.querySelector('#consoleLog');
consLog.addEventListener('click', ()=> {
    alert('Это метод, предназначенный для печати в консоль браузера.')
});
const ale = document.querySelector('#alert');
ale.addEventListener('click', ()=> {
    alert('Это метод, выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК».')
});
const prom = document.querySelector('#prompt');
prom.addEventListener('click', ()=> {
    alert('Она выводит модальное окно с заголовком title, полем для ввода текста, заполненным строкой по умолчанию default и кнопками OK/CANCEL.')
});



