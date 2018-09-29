import {hydrate} from "inferno";
import {Container} from '@cerebral/inferno'

import BrowserRouter from "./components/routes/Browser";
import controller from "./controller";


// socket.io is loaded from server, see the served index in express app
controller.contextProviders.io = io;
controller.getSignal('connectSocket')();

const wrapper = (
  <Container controller={controller}>
    <BrowserRouter/>
  </Container>
);

hydrate(wrapper, document.getElementById("root"));
