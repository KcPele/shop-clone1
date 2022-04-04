import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";

//geting the data from reducers and store
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ShopSection = () => {
  //call dispatch from react-redux to get our data from action through reducer
  const dispatch = useDispatch();
  //state.productList is the reducer name in the combine reducer in store
  const productList = useSelector((state) => state.productList);
  //distructuring the loading error and the data from reducer called by selector
  const { loading, error, products } = productList;
  useEffect(() => {
    //calling dispatch and paing in the action function as a parameter
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {
                  //checkinh it loading and if error else dispay data
                  loading ? (
                    <div className="mb-5">
                      <Loading />
                    </div>
                  ) : error ? (
                    <Message varient="alert-danger">{error}</Message>
                  ) : (
                    <>
                      {products.map((product) => (
                        <div
                          className="shop col-lg-4 col-md-6 col-sm-6"
                          key={product._id}
                        >
                          <div className="border-product">
                            <Link to={`/products/${product._id}`}>
                              <div className="shopBack">
                                <img src={product.image} alt={product.name} />
                              </div>
                            </Link>

                            <div className="shoptext">
                              <p>
                                <Link to={`/products/${product._id}`}>
                                  {product.name}
                                </Link>
                              </p>

                              <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                              />
                              <h3>${product.price}</h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )
                }

                {/* Pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
