import React from "react";
import FormArticleEdit from "../features/FormArticleEdit";
// import Button from "../features/Button";
import useFilterData from "../../components/common/useFilterData";

const ArticleEditPage = () => {
  const [newFilteredData] = useFilterData();

  return (
    <div className="container">
      <div className="row">
        <FormArticleEdit props={newFilteredData} />
      </div>
      {/* <div className="row">
        <Button className="btn btn-success col-sm-2 col-2">OK</Button>
        <Button className="btn btn-success col-sm-2 col-2">Cancel</Button>
      </div> */}
    </div>
  );
};

export default ArticleEditPage;
