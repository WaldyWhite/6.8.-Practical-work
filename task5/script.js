// ввод текста
const textInput = document.querySelector('#in');
const textParagr = document.querySelector('#duplicateField');

// текст дублируется  в текстовый блок
textInput.addEventListener('input', function (e) {
	textParagr.textContent = textInput.value;
});

//удаление из input и добавление текста в console.log
document.querySelector('button').addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log(textInput.value)
    textInput.value = '';
    textParagr.textContent = textInput.value;
});
