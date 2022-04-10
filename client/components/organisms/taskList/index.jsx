import React from "react";
import * as s from "./styles";

export const TaskList = () => {
  return (
    <s.Container>
      <s.TableHead>
        <div>
          <h3 className="active">To-Do</h3>
          <h3>In Progress</h3>
          <h3>Done</h3>
        </div>
        <div>
          <button><img src="/lock-svgrepo-com.svg" /></button>
          <button><img src="/person-fill-svgrepo-com.svg"/></button>

          {/* <label for="filters">Filter: </label> */}
          <select name="filters" id="filters" placeholder="Filter">
            <option>filter 1</option>
            <option>filter 2</option>
          </select>
        </div>
      </s.TableHead>
      <s.List>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
      </s.List>
    </s.Container>
  );
};
