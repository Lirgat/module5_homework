let x;
if ((typeof(x) == 'number')&&(!isNaN(x))) {
    alert('x = число');
}
else if (typeof(x) == "string") {
    alert('x = строка');
}
else if (typeof(x) == 'boolean') {
    alert('x = логический тип');
}
else {
    alert('Тип x не определён');
}
