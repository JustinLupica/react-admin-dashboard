import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productData } from "../../dummyData";
import "./product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/new-product">
          <button className="product-add-button">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005"
              alt=""
              className="product-info-img"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">id:</span>
              <span className="product-info-value">123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Sales</span>
              <span className="product-info-value">5123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Active:</span>
              <span className="product-info-value">Yes</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">In Stock:</span>
              <span className="product-info-value">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name:</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock:</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active:</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005"
                alt=""
                className="product-upload-img"
              />
              <label for="file">
                <Publish />
              </label>
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <button className="product-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
