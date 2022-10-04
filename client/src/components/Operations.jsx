import axios from "axios";
import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export const Operations = () => {
  const { user } = useUser();
  //   const { user_id } = useParams();
  const options = { headers: { authorization: "Bearer " + user.token } };
  const [operations, setOperations] = useState([]);
  const getUserOperations = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `/conversor/operations/?user_id=${user.id}`,
        options
      );
      setOperations(data.data);
    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.message.data.message);
      }
    }
  }, [options, user]);

  useEffect(() => {
    getUserOperations();
  });

  return (
    <div className="container">
      <div className="table-responsive">
        <h3>Operaciones del usurio {user.email}</h3>
        <table
          className="table table-striped
            table-hover	
            table-primary
            align-middle"
        >
          <thead className="table-light">
            <tr>
              <th>Moneda inicial</th>
              <th>Moneda final</th>
              <th>Cantidad</th>
              <th>Resultado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {operations.map((operation) => (
              <tr key={operation.id}>
                <td>{operation.from_currency}</td>
                <td>{operation.to_currency}</td>
                <td>{operation.amount}</td>
                <td>{operation.result_convertion}</td>
                <td>{operation.createdAt}</td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};
