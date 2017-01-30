import {CashFlowCategory} from './cash-flow-category';

class CategoryController {
  public iconClassMap: any;
  public active: boolean;
  public category: CashFlowCategory;

  constructor(private $element: angular.IAugmentedJQuery) {
    this.iconClassMap = {
      'Charity': 'glyphicon-heart',
      'Savings': 'glyphicon-piggy-bank',
      'Housing': 'glyphicon-home',
      'Utilites': 'glyphicon-cog'
    };

    this.active = false;

    console.log(this.category);
  }

  createNewBudgetItem() {
    let input = this.$element.find('#new-budget-item');
  }
}

export const categoryComponent: angular.IComponentOptions = {
  template: require('./category.component.html'),
  bindings: { category: '=' },
  controller: CategoryController
};
