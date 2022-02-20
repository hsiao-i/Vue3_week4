//   import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.min.js";

const app = Vue.createApp({
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const url = `${this.apiUrl}/admin/signin`;
      axios
        .post(url, this.user)
        .then((res) => {
          console.log(res.data);
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(
            expired
          )}; path=/`;
          window.location = "index.html";
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
  },
});
app.mount("#app");
