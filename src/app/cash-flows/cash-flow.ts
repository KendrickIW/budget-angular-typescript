import {CashFlowCategory} from './cash-flow-category';

let data = {
  categories: [
    {
      title: 'Charity'
    },
    {
      title: 'Savings'
    },
    {
      title: 'Housing'
    },
    {
      title: 'Utilites'
    },
    {
      title: 'Food'
    },
    {
      title: 'Clothing'
    },
    {
      title: 'Transportation'
    },
    {
      title: 'Medical/Health'
    },
    {
      title: 'Insurance'
    },
    {
      title: 'Personal'
    },
    {
      title: 'Recreation'
    },
    {
      title: 'Debts'
    }
  ]
};

class CashFlow {
  constructor(
    public categories: CashFlowCategory[]
  ) {}
};

class CashFlowController {
  public cashFlow: CashFlow;

  constructor() {
    this.cashFlow = data as CashFlow;
    console.log(this.cashFlow);
  }
};

export const cashFlow: angular.IComponentOptions = {
  template: require('./cash-flow.html'),
  controller: CashFlowController
};
