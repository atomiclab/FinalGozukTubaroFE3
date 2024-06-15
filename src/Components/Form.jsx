import { useState } from "react";
import ErrorMsg from "./ErrorMsg.jsx";
import "../Styles/form.css"
import Alerta from "./Alerta.jsx";

const Form = () => {
  const [usr, setUsr] = useState({
    name: "",
    username: "",
    textbox:""
  });
  const [errorText, setErrorText] = useState("");
  const [showAlerta, setShowAlerta] = useState(false);
  const [showError, setShowError] = useState(false);

  const [alertaAbrir, setAlertaAbrir] = useState(false);

  const toggleAlerta = () => {
    setAlertaAbrir(!alertaAbrir);
  };

  const alCerrarAlertaBorro = () => {
    setUsr({
      name: "",
      username: "",
      textbox: ""
    });
    setAlertaAbrir(false);
  };
  

  const onChangeName = (event) => {
    setUsr({ ...usr, name: event.target.value });
  };
  const onChangeSurname = (event) => {
    setUsr({ ...usr, username: event.target.value });
  };
  const onChangeTextBox = (event) => {
    setUsr({ ...usr, textbox: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (usr.name.trim().length > 3 && regex.test(usr.username)) {
      setShowAlerta(true);
      setShowError(false);
    } else {
      regex.test(usr.username)
        ? setErrorText("Hubo un error tu nombre(Nombre mayor a 5 caracteres)!")
        : setErrorText("Hubo un error con tu mail!");
      setShowError(true);
      setShowAlerta(false);
    }
  };
  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
      <label>Cómo te llamas?</label>

      <input
        type="text"
        value={usr.name}
        onChange={onChangeName}
        placeholder="Tu nombre"
      />
      <br />
      <label>Cual es tu mail?</label>
      <input
        type="text"
        value={usr.username}
        onChange={onChangeSurname}
        placeholder="tu@mail.com"
      />
      <br />
      
      <label>Cual es tu consulta?</label>
      <textarea
        value={usr.textbox}
        onChange={onChangeTextBox}
        placeholder="Deja tu consulta acá"
        rows="4"
        cols="50"
      />
      <br />
      <button type="submit" onClick={toggleAlerta}>Enviar consulta</button>

      {alertaAbrir && showAlerta && <Alerta cerrar={alCerrarAlertaBorro}  usr = {usr} />}
      {showError && <ErrorMsg>{errorText}</ErrorMsg>}
    </form>
    </div>
  );
};

export default Form;
