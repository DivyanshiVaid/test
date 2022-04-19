import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

const TaskList = ({ task, onDelete }) => {
  return (
    <div>
      <div className="col shadow-lg">
        {task.map((el) => {
          return (
            <table key={el.id} className="table table-striped mt-2  ">
              <tbody className="text-start">
                <tr>
                  <td>
                    {el.AddTask}
                    <br /> {el.day}
                  </td>
                  <td className="text-end">
                    <FaTimes
                      style={{
                        color: "red",
                        cursor: "pointer",
                        fontSize: "30px",
                      }}
                      onClick={() => {
                        onDelete(el.id);
                      }}
                    />
                    <FaEdit
                      style={{
                        color: "blur",
                        cursor: "pointer",
                        fontSize: "30px",
                        marginLeft:"10px"
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
