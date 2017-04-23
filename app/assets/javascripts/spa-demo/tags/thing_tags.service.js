(function() {
  "use strict";
  angular.module("spa-demo.tags").service("spa-demo.tags.ThingTag", ThingTagService);
  ThingTagService.$inject = ["$resource","spa-demo.config.APP_CONFIG"];
  function ThingTagService($resource, APP_CONFIG) {
    var service = $resource(APP_CONFIG.server_url + "/api/tagable_things",{},{
      query: { cache:false, isArray:true }
    });
    return service;}
})();