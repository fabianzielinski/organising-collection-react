import React from "react";
import { useState } from "@hookstate/core";
import globalstore from "../../Store";
import Button from "../features/Button";
import useImput from "../common/useInput";
import { Link } from "react-router-dom";
import useFilterData from "../../components/common/useFilterData";

const FormArticleEdit = (props) => {
  const store = useState(globalstore);
  // const filteredDataNew = store.filteredData.get();
  const numberEditedStore = store.numberEditedStore.get();
  const numberEditedLine = store.numberEditedLine.get();
  const [newFilteredData] = useFilterData();

  let isSave = false;

  // console.log(`propsprops=>`);
  // console.log(newFilteredData);

  const ArrayNewFilteredData = newFilteredData.map((ar) => Object.values(ar));

  console.log(ArrayNewFilteredData);

  let newEditedStore = ArrayNewFilteredData.filter((item) =>
    item[0].toString().toLowerCase().includes(numberEditedStore)
  );

  // console.log(`newEditedStore => ${newEditedStore}`);
  console.log(newEditedStore);
  console.log(typeof newEditedStore);

  console.log(newEditedStore[numberEditedLine]);
  console.log(numberEditedLine);
  console.log(typeof numberEditedLine);

  const [lp, nr, data, dzial, artykol, autor, uwagi] = newEditedStore[0];

  console.log(typeof lp);
  console.log(typeof nr);
  console.log(typeof data);

  const { value: lpValue, bind: lpBind, reset: lpReset } = useImput(lp);
  const { value: nrValue, bind: nrBind, reset: nrReset } = useImput(nr);
  const { value: dataValue, bind: dataBind, reset: dataReset } = useImput(data);
  const {
    value: dzialValue,
    bind: dzialBind,
    reset: dzialReset,
  } = useImput(dzial);
  const {
    value: artykolValue,
    bind: artykolBind,
    reset: artykolReset,
  } = useImput(artykol);
  const {
    value: autorValue,
    bind: autorBind,
    reset: autorReset,
  } = useImput(autor);
  const {
    value: uwagiValue,
    bind: uwagiBind,
    reset: uwagiReset,
  } = useImput(uwagi);

  let newRecord = [];

  // const newData = filteredDataNew.splice(numberEditedLine[0], 1, newRecord);

  const submitSave = () => {
    // e.preventDefault();

    newRecord = [
      lpValue,
      nrValue,
      dataValue,
      dzialValue,
      artykolValue,
      autorValue,
      uwagiValue,
    ];

    // const newArray = [...filteredDataNew, newRecord];
    // console.log(`filteredDataNew : ${filteredDataNew}`);
    const newArray = ArrayNewFilteredData;
    // console.log(`newArray : ${newArray}`);
    // newArray.splice(numberEditedLine, 1, newRecord);
    ArrayNewFilteredData.splice(numberEditedLine, 1, newRecord);

    console.log(newRecord);
    // console.log(store.filteredData.get());
    console.log(ArrayNewFilteredData);
    console.log(newArray);

    // if (isSave === false) {
    store.filteredData.set(newArray);
    console.log(store.filteredData.get());
    console.log(isSave);
    //   return isSave === true;
    // }

    // return console.log("Zrobione");
    // filteredDataNew.merge(newRecord);

    // filteredDataNew[0] = newRecord;

    // filteredDataNew.set

    // filteredDataNew.splice(numberEditedLine[0], 1, newRecord);
    // store.filteredData.set(
    //   filteredDataNew.splice(numberEditedLine[0], 1, newRecord)
    // );
  };

  console.log(store.filteredData.get());

  return (
    <div>
      <form>
        <label>
          Lp
          <input name="lp" type="text" id="lp" {...lpBind} />
        </label>
        <label>
          Nr
          <input name="nr" type="text" id="nr" {...nrBind} />
        </label>
        <label>
          Data
          <input
            name="data"
            type="text"
            id="data"
            {...dataBind}
            // defaultValue={data}
          />
        </label>
        <label>
          Dzial
          <input
            name="dzial"
            type="text"
            id="dzial"
            {...dzialBind}
            // defaultValue={dzial}
          />
        </label>
        <label>
          Artykol
          <input
            name="artykol"
            type="text"
            id="artykol"
            {...artykolBind}
            // defaultValue={artykol}
          />
        </label>
        <label>
          Autor
          <input
            name="autor"
            type="text"
            id="autor"
            {...autorBind}
            // defaultValue={autor}
          />
        </label>
        <label>
          Uwagi
          <input
            name="uwagi"
            type="text"
            id="uwagi"
            {...uwagiBind}
            // defaultValue={uwagi}
          />
        </label>
      </form>
      <div>
        <Link to={"/excelcomponentpage"}>
          <Button
            className="btn btn-success col-sm-2 col-2"
            onClick={submitSave}
          >
            Save
          </Button>
        </Link>
        <Link to={"/excelcomponentpage"}>
          <Button className="btn btn-success col-sm-2 col-2">Cancel</Button>
        </Link>
      </div>
    </div>
  );
};

export default FormArticleEdit;
