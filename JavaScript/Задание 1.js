let result = prompt('Введите значение');
result = +result;
alert (typeof result);
    if (result% 2 === 0) {
        alert('Чётное');
    }
    else if (result% 1 === 0) {
        alert('Нечётное');
    }
    else {
        alert('Упс, кажется вы ошиблись')
    }

    if (result>0) {
        alert(true)
    }
    else if (result<0) {
        alert(false)
    }
    else {
        alert(false)
    }