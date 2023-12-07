/**
 * 4.
 * To `./src/components/FormularioComponent.js`
 */
import React, { Component } from "react";
import { AppContext } from "../common/AppContext";

export default class TablaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = AppContext;

  render = () => (
    <React.Fragment>
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="row">
            <th className="col col-md-6">ID</th>
            <th className="col col-md-6">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {this.context.getListaPacientes().map((paciente, index) => (
            <tr className="row" key={index}>
              <td className="col col-md-6">{index + 1}</td>
              <td className="col col-md-6">{paciente.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
