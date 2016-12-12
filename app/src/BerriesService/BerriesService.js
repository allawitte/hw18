angular
    .module('PokemonApp')
    .factory('BerriesService', function ($http) {
        var self = this;
        $http.defaults.useXDomain = true;
        return {

            getBerries: function() {
                return $http({
                    method: 'GET',
                    url: 'https://api.backendless.com/v1/data/berries'
                });

            }
        }
    });
/**
 * Created by HP on 11/25/2016.
 */
