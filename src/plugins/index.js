import Vue from "vue";
import Element from "./element";
import { Message, MessageBox } from "element-ui";

// 将弹框实例挂载到vue的原型中
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

Element.components.forEach((i) => Vue.use(i));
