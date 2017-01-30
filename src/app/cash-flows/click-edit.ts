interface IClickEditScope extends angular.IScope {
  active: boolean;
  value: string;
}

export class ClickEditDirective implements angular.IDirective {
  template = require('./click-edit.html');
  scope = {
    value: '@'
  };

  link(scope: IClickEditScope, element: angular.IAugmentedJQuery) {
    scope.active = false;

    var input = element.find('input');
    var output = element.find('div');

    input.on('keypress', function(event) {
      if(event.which === 13) {
        this.blur();
      }
    });

    output.on('click', function() {
      input[0].focus();
    });
  }
};
