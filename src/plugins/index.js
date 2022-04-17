import Vue from "vue";
import Element from './element'

Element.components.forEach(i => Vue.use(i))
