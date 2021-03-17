import React, { Component } from "react";
import "./collection.css"; 
class Collection extends Component {
  render() {
    return (
      <div class="wrapper">
        <h2><strong>All Collection </strong></h2>
        <div class="cards">
          <figure class="card">
            <img src="https://i.pinimg.com/564x/ed/34/ec/ed34ece05c2b3a57489cc0d18b18ec7d.jpg" />
            <figcaption>Alocasia Amazonica</figcaption>
          </figure>

          <figure class="card">
            <img src="https://i.pinimg.com/564x/e3/7e/5e/e37e5ef0e8b6e5ef8a95eaf1cc5590d4.jpg" />
            <figcaption>Syngonium podophyllum</figcaption>
          </figure>

          <figure class="card">
            <img src="https://i.pinimg.com/564x/e7/13/6d/e7136d59b7e4fd8bd9ac6ea4553aefaa.jpg" />
            <figcaption>Monstera</figcaption>
          </figure>

          <figure class="card">
            <img src="https://i.pinimg.com/564x/53/00/a0/5300a04dc3f752a91736511065902979.jpg" />
            <figcaption>Begonia Rex</figcaption>
          </figure>

          <figure class="card">
            <img src="https://i.pinimg.com/564x/e4/30/3c/e4303ce1995563bd9d77358b39eb8b80.jpg" />
            <figcaption>Dieffenbachia Plant</figcaption>
          </figure>

          <figure class="card">
            <img src="https://i.pinimg.com/564x/4b/12/86/4b1286f81ae8ff0b955ed561aa99e8e0.jpg" />
            <figcaption>Fittonia Verschaffetii</figcaption>
          </figure>

        </div>
      </div>
    );
  }
}
 
export default Collection;