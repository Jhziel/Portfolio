import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faEnvelope,
  faEye,
  faLocationDot,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
  faEye,
  faXmark,
  faPhone,
  faEnvelope,
  faLocationDot
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
