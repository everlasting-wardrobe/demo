import React, {Component} from 'react';
import './loadingSpinner.css';

const LoadingSpinner = () =>(
  <div className={"loading"}>
    <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
)

export default LoadingSpinner
