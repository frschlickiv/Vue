const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Bitch",
      url: "https://google.com",
      raw_url: '<a href="https:google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      console.log("fullName has been updated");
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      event.preventDefault();

      console.log(msg);
      this.lastName = event.target.value;
    },
  },
  computed: {},
}).mount("#app");

/* setTimeout(() => {
  vm.firstName = "Bob";
}, 2000); */

/* Vue.createApp({
  data() {
    return {
      history: "Once upon a time there was a small dog name Arlo.",
    };
  },
}).mount("#clip");
 */
