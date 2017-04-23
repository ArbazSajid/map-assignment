(function() {
  "use strict";
  angular.module("spa-demo.tags")
  .component("sdTags", {
      templateUrl: templateUrl,
      controller: TagsController
    });

  templateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.tags_html;
  }

  TagsController.$inject = ['$scope', "spa-demo.tags.Tag", "spa-demo.tags.ThingTag", "spa-demo.subjects.Thing", "spa-demo.tags.SelectedThing"];
  function TagsController($scope, Tag, ThingTag, Thing, SelectedThing) {
    var vm = this;
    vm.tags = [];
    vm.things = [];
    vm.selectedTag = null;
    vm.clickThing = selectThing;
    $scope.changeSelectedTag = selectedTagChanged;
    activate();
    return;

    function activate() {
      loadTags();
    }

    function loadTags(){
      Tag.query().$promise
        .then(function(response){
          vm.tags = response;
          vm.selectedTag=vm.tags[0]
          find_things(vm.selectedTag);
        }).catch(function(error){
          console.log("tags error: " + error);
        });
    }

    function selectedTagChanged(selected){
      vm.selectedTag=selected;
      find_things(selected);
    }

    function find_things(tag){
      var params = {tag_id: tag.id};
      ThingTag.query(params).$promise
        .then(function(response){
          vm.things = response;
          selectThing(vm.things[0])
        }).catch(function(error){
          console.log("things error: ", error);
        });
    }

    function selectThing(thing){
      Thing.get({id:thing.id}).$promise
        .then(function(response){
          console.log("selectThing: ", response.images);
          SelectedThing.setSelectedThing(response);
        }).catch(function(error){
          console.log("selectThing error: ", error);
        });
    }

  }
})();