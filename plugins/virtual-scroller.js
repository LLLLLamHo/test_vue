import Vue from 'vue'

// https://github.com/Akryum/vue-virtual-scroller#dynamicscroller
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

Vue.component('DynamicScroller', DynamicScroller)
Vue.component('DynamicScrollerItem', DynamicScrollerItem)
