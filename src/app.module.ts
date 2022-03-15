import { Module } from 'nefbl'

// 组件
import AppComponent from './App/index'

// 指令
import uiBind from 'sprout-ui/nefbl/directive/ui-bind'
import uiModel from 'sprout-ui/nefbl/directive/ui-model'
import uiOn from 'sprout-ui/nefbl/directive/ui-on'
import uiRumors from './directives/ui-rumors'

@Module({
    declarations: [
        AppComponent,
        uiBind, uiModel, uiOn, uiRumors
    ],
    imports: [],
    exports: [],
    bootstrap: AppComponent
})
export default class {

}
