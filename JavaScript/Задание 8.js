let films = new Map();
    films.set('Alien(1979)','8.1|10');
    films.set('Aliens(1986)','8.1|10');
    films.set('Alien 3(1992)','6.9|10');
    films.set('Alien: Ressurection(1997)','6.7|10');
    films.set('Alien: Covenant(2017)','6.1|10');

for (let film of films.keys()) {
    console.log(film + ' - оценка ' + films.get(film));
}