import React from "react";
import { useState } from "@hookstate/core";
import globalstore from "../../Store";
import Button from "../features/Button";

const FormArticleEdit = (props) => {
  const store = useState(globalstore);
  const filteredData = store.filteredData.get();
  const numberEditedStore = store.numberEditedStore.get();
  const numberEditedLine = store.numberEditedLine.get();

  const newEditedStore = props.props.filter((item) =>
    item[0].toString().toLowerCase().includes(numberEditedStore)
  );

  const [lp, nr, data, dzial, artykol, autor, uwagi] = newEditedStore[0];

  const submitSave = () => {
    store.filteredData.set(
      filteredData.splice(numberEditedLine[0], 1, newEditedStore)
    );
  };

  //.splice(0,1, {})

  return (
    <div>
      <div>
        <div>
          <label>
            Lp
            <input
              name="lp"
              type="text"
              id="lp"
              onChange={(e) => e.target.newEditedStore.splice(0, 1, lp)}
              defaultValue={lp}
            />
          </label>
        </div>
        <div>
          <label>
            Nr
            <input
              name="nr"
              type="text"
              id="nr"
              onChange={props.change}
              defaultValue={nr}
            />
          </label>
        </div>
        <div>
          <label>
            Data
            <input
              name="data"
              type="text"
              id="data"
              onChange={props.change}
              defaultValue={data}
            />
          </label>
        </div>
        <div>
          <label>
            Dzial
            <input
              name="dzial"
              type="text"
              id="dzial"
              onChange={props.change}
              defaultValue={dzial}
            />
          </label>
        </div>
        <div>
          <label>
            Artykol
            <input
              name="artykol"
              type="text"
              id="artykol"
              onChange={props.change}
              defaultValue={artykol}
            />
          </label>
        </div>
        <div>
          <label>
            Autor
            <input
              name="autor"
              type="text"
              id="autor"
              onChange={props.change}
              defaultValue={autor}
            />
          </label>
        </div>
        <div>
          <label>
            Uwagi
            <input
              name="uwagi"
              type="text"
              id="uwagi"
              onChange={props.change}
              defaultValue={uwagi}
            />
          </label>
        </div>
        <Button className="btn btn-success col-sm-2 col-2" onClick={submitSave}>
          Save
        </Button>
        <Button className="btn btn-success col-sm-2 col-2">Cancel</Button>
      </div>
    </div>
  );
};

export default FormArticleEdit;
