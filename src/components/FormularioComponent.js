/**
 * 5.
 */
import React, { Component } from "react";
import { AppContext } from "../common/AppContext";

export default class FormularioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaciente: {
        nombre: "",
      },
    };
  }

  static contextType = AppContext;

  updateTextValue = (event) =>
    this.setState({
      newPaciente: {
        nombre: event.target.value,
      },
    });

  generateNewPaciente = () => {
    this.setState({ newPaciente: { nombre: "" } });
  };

  submitForm = () => {
    if (!this.context.getPaciente(this.state.newPaciente.nombre)) {
      this.props.addPacienteCallback(this.state.newPaciente);
    }
    this.generateNewPaciente();
  };

  render = () => (
    <React.Fragment>
      <div className="container-fluid">
        <div className="form-group">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.newPaciente.nombre}
            onInput={this.updateTextValue}
          />
        </div>
        <button
          className="btn btn-primary btn-md mt-2"
          onClick={this.submitForm}
        >
          Enviar
        </button>
      </div>
    </React.Fragment>
  );
}
