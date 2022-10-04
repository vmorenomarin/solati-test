import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { useUser } from "../context/UserContext";
const logo = require("../assets/images/solati-logo-sm.png");


export const Chat = () => {
  const { user } = useUser();

  useEffect(() => {
    addResponseMessage(
      `Hola, ${user.email}. Si deseas hacer una conversión, escribre algo como esto:`
    );
    addResponseMessage("Convertir 3000 COP a USD");
  }, []);

  const conversion = async (inputs) => {
    console.log(inputs, user.token);
    const { data } = await axios.post("/conversor/", inputs);
    const { result } = data.data;
    console.log(result);
    return result;
  };

  const handleNewUserMessage = (newMessage) => {
    const re = /convertir\s([0-9]+)\s([a-zA-Z]{3})\sa\s([a-zA-Z]{3})/i;
    if (!re.test(newMessage)) {
      addResponseMessage(
        "Escribe la solicitud de conversión como te sugeremimos en el mensaje anterior."
      );
      addResponseMessage("Sugerencia: Convertir 3000 COP a USD");
    }
    const inputs = re.exec(newMessage);
    const conversionData = {
      amount: inputs[1],
      from_currency: inputs[2],
      to_currency: inputs[3],
      customer: user.id,
    };
    conversion(conversionData).then((result) =>
      addResponseMessage(
        `${conversionData.amount} ${conversionData.from_currency} equivalen a ${result} ${conversionData.to_currency}`
      )
    );
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={logo}
      title="Conversor de Monedas"
      subtitle="Agrega una consulta"
    />
  );
};
