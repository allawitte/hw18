'use strict';

pokemonApp.controller('PokemonListCtrl', function ($scope, PokemonsService, BerriesService, $q) {
    $scope.pokemons = [];
    var page = 10;
    var offset = 1;
    $scope.dataLoading = true;
    /*
     PokemonsService.getPokemons(page, offset).then(function (pokemonsData) {

     $scope.pokemons = $scope.pokemons.concat(pokemonsData.data.data);
     console.log($scope.pokemons);
     if (offset < 830) {
     offset += 10;
     console.log('call');
     PokemonsService.getPokemons(page, offset);
     }
     });

     BerriesService.getBerries().then(function (berriesData){
     $scope.berries = berriesData.data.data;
     console.log($scope.berries);
     });
     */

    var request1 = PokemonsService.getPokemons(page, offset);
    var request2 = BerriesService.getBerries();

    $q.all({
        obj1: PokemonsService.getPokemons(page, offset),
        obj2: BerriesService.getBerries()
    }).then(function (values) {
        $scope.pokemons = values.obj1.data.data;
        $scope.berries = values.obj2.data.data;
        $scope.dataLoading = false;
    });

    $scope.myOrderProperty = 'weight';

});
