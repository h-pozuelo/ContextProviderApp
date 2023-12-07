/**
 * 3.
 * To `./src/components/TablaComponent.js`
 */
import React, { Component } from "react";
import { AppContext } from "../common/AppContext";
import FormularioComponent from "./FormularioComponent";
import TablaComponent from "./TablaComponent";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaPacientes: [
        { nombre: "Paloma" },
        { nombre: "Carmen" },
        { nombre: "Damian" },
      ],
      locator: (paciente, nombre) => paciente.nombre === nombre,
      getListaPacientes: this.getListaPacientes,
      getPaciente: this.getPaciente,
    };
  }

  getListaPacientes = () => this.state.listaPacientes;

  getPaciente = (nombre) =>
    this.state.listaPacientes.find((paciente) =>
      this.state.locator(paciente, nombre)
    );

  addPaciente = (paciente) =>
    this.setState({ listaPacientes: [...this.state.listaPacientes, paciente] });

  render = () => (
    <React.Fragment>
      <AppContext.Provider value={this.state}>
        <div className="container-fluid m-2">
          <div className="row">
            <div className="col col-md-6">
              <TablaComponent />
            </div>
            <div className="col col-md-6">
              <FormularioComponent addPacienteCallback={this.addPaciente} />
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </React.Fragment>
  );
}
