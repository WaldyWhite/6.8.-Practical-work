const TextField = document.querySelector('#testTextField');
TextField.onclick = (evt) => {
    // Предотвращение поведения по умолчанию
    evt.preventDefault();
    // тело обработчика
    TextField.textContent = prompt('Введите текст');
    // конец тела обработчика
}

