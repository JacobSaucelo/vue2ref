Vue.component("comp-lists", {
  template: `<ul><comp-list v-for="task in tasks">{{ task.title }}</comp-list></ul>`,
  data() {
    return {
      tasks: [
        { title: "task1", isActive: false },
        { title: "task2", isActive: true },
        { title: "task3", isActive: true },
        { title: "task4", isActive: false },
        { title: "task5", isActive: false },
        { title: "task6", isActive: true },
        { title: "task7", isActive: false },
      ],
    };
  },
});

Vue.component("comp-list", {
  data() {
    return {
      isVisible: true,
    };
  },
  template: `<li v-show="isVisible"><slot></slot> <button type="button" @click="handleVisible">hide</button></li>`,
  methods: {
    handleVisible() {
      this.isVisible = false;
    },
  },
});

Vue.component("comp-props", {
  props: ["tae"],
  template: `<div>{{tae}}</div>`,
});

Vue.component("comp-children", {
  template: `<div><slot></slot></div>`,
});

new Vue({
  el: "#root",
  data: {
    message: "why u mad bitch",
  },
});
