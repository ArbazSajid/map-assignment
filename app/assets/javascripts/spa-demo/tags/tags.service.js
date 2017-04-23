(function() {
  "use strict";
  angular.module("spa-demo.tags").service("spa-demo.tags.Tag", TagService);
  TagService.$inject = ["$resource","spa-demo.config.APP_CONFIG"];
  function TagService($resource, APP_CONFIG) {
    var service = $resource(APP_CONFIG.server_url + "/api/tags",{},{
      query: { cache:false, isArray:true }
    });
    return service;}
})();