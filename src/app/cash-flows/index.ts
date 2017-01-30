import * as angular from 'angular';

import {cashFlow} from './cash-flow';
import {ClickEditDirective} from './click-edit';
import {categoryComponent} from './category.component';

export const cashFlowsModule = 'cashFlows';

angular
  .module(cashFlowsModule, [])
  .component('cashFlow', cashFlow)
  .component('category', categoryComponent)
  .directive('clickEdit', () => new ClickEditDirective);
