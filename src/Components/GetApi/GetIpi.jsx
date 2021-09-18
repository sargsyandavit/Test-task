import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getCategories from "../../Common/Store/Actions/getCategories";
import getCatsAction from "../../Common/Store/Actions/GetIpiAction";
import {
  Block,
  Button,
  CateImges,
  Filter,
  FilterItem,
  Img,
} from "./GetIpiStyle";

const GetApi = () => {
  const dispach = useDispatch();
  const state = useSelector((state) => ({
    getIpiStore: state.getIpiStore,
  }));

  const [page, setPage] = useState(1);
  const [categorie, setCategorie] = useState(1);

  useEffect(() => {
    dispach(getCatsAction(page, categorie));
    dispach(getCategories());
  }, []);

  const handleLoadMore = () => {
    dispach(getCatsAction(page + 1, categorie));
    setPage((prevpage) => prevpage + 1);
  };

  const handleChangeCatgorise = (newCategorie) => {
    dispach(getCatsAction(page, newCategorie, true));
    setCategorie(newCategorie);
  };

  return (
    <>
      <Filter>
        {state.getIpiStore?.categorise?.map((categore) => (
          <FilterItem
            isActive={categorie === categore.id}
            onClick={() => handleChangeCatgorise(categore.id)}
            key={categore.id}
          >
            {categore.name}
          </FilterItem>
        ))}
      </Filter>
      <Block>
        <CateImges>
          {state.getIpiStore?.data.map((cate) => (
            <Img key={cate.id} src={cate.url} alt={cate.name} />
          ))}
        </CateImges>
      </Block>
      <Button onClick={handleLoadMore}>Load more..</Button>
    </>
  );
};

export default GetApi;
