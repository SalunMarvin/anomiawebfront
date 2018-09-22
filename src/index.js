import React from "react";
import { render } from "react-dom";
import ToastrContainer from 'react-toastr-basic'

import Anomia from "./modules/Anomia/Anomia";

  render(
    <div>
      <ToastrContainer />
      <Anomia />
    </div>,
    document.getElementById("root")
);
