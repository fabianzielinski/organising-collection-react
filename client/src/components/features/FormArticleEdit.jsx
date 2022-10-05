import React from "react";
import { useState } from "@hookstate/core";
import globalstore from "../../Store";

const FormArticleEdit = (props) => {
  const store = useState(globalstore);
  const numberEditedStore = store.numberEditedStore.get();

  const newEditedStore = props.props.filter((item) =>
    item[0].toString().toLowerCase().includes(numberEditedStore)
  );

  const [lp, nr, data, dzial, artykol, autor, uwagi] = newEditedStore[0];

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
              onChange={props.change}
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
      </div>
    </div>
  );
};

export default FormArticleEdit;
