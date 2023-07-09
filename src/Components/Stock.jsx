
import "../Styles/Components.css";
import stocksData from "../stocksData";
const Overview = (props) => {
  return (
    <div>
      <h1>Stock</h1>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Company Name</th>
            <th>Last Price</th>
            <th>Market Cap</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stocksData.map((stock) => {
            return (
              <tr key={stock.id}>
                <td>{stock.ticker}</td>
                <td>{stock.name}</td>
                <td>{stock.price2023}</td>
                <td>{stock.size}</td>
                <td className="buy-button-td">
                  <button 
                    className="buy-button"
                    onClick={() => props.addToCart(stock)}>Add to Cart</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Overview;
