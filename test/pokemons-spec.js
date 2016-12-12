describe('Pokemons Project title', function() {
    it('should reflect title: Фреймворк AngularJS / Нетология', function() {
        browser.get('http://localhost:8000/app/#!/');

        var defaultTitle = browser.getTitle();
        expect(defaultTitle).toEqual('Фреймворк AngularJS / Нетология');
    });
});
describe('Pokemons Project menu', function() {

    it('should go to #!/pokemons', function() {
        browser.get('http://localhost:8000/app/#!/');
        var pokemons = element(by.linkText('Покемоны'));
        pokemons.click();

        expect(browser.getLocationAbsUrl())
            .toBe('/pokemons');
    });
    it('should go to #!/', function() {
        browser.get('http://localhost:8000/app/#!/');
        var home = element(by.linkText('Главная'));
        home.click();

        expect(browser.getLocationAbsUrl())
            .toBe('/');
    });
    it('should go to #!/create', function() {
        browser.get('http://localhost:8000/app/#!/');
        var create = element(by.linkText('Добавить нового'));
        create.click();

        expect(browser.getLocationAbsUrl())
            .toBe('/create');
    });
});

describe('Pokemons list', function(){
    it('should contain a singlePokemon.name', function(){
        browser.get('http://localhost:8000/app/#!/pokemons');
        expect(element(by.binding('singlePokemon.name')).isPresent()).toBe(true);
    });
})
/**
 * Created by HP on 12/11/2016.
 */

/**
 * Created by HP on 12/12/2016.
 */
