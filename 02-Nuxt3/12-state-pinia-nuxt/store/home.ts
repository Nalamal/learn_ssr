import { defineStore } from "pinia";

export interface IState {
  counter: number;
  homeInfo: any;
}

export const useHomeStore = defineStore("home", {
  state: (): IState => {
    return {
      counter: 0,
      homeInfo: {},
    };
  },
  actions: {
    increment() {
      this.counter++;
    },
    async fetchHomeData() {
      const url = "http://codercba.com:9060/juanpi/api/homeInfo";
      const { data } = await useFetch<any>(url);
      this.homeInfo = data.value.data;
      console.log(data.value.data);
    },
  },
});
