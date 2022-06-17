import { Divider, Row }           from "antd";
import { useEffect }              from "react";
import { useDispatch }            from "react-redux";

import LoadingTable               from "../../../components/LoadingTable";
import HeadPage                   from "./components/HeadPage";
import ListProductCategory        from "./components/ListProductCategory";
import {
  getListProductCategoryAction,
  setLoadingAction,
}                                 from "pages/ProductCategory/redux/ProductCategoryActions";
import { useSelector }            from "setup/redux/RootReducer";

const ProductCategory = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.productCategory.loading);

  useEffect(() => {
    dispatch(setLoadingAction(true));
    dispatch(
      getListProductCategoryAction({}, () => {
        setTimeout(() => {
          dispatch(setLoadingAction(false));
        }, 500);
      })
    );
  }, []);

  return (
    <>
      <HeadPage />
      <Divider />
      {loading ? (
        <LoadingTable />
      ) : (
        <>
          <Row>
            <ListProductCategory />
          </Row>
        </>
      )}
    </>
  );
};

export default ProductCategory;
