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
            <th>Name</th>
            <th>Last Price</th>
            <th>Size</th>
            <th>Buy</th>
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
                <td>
                  <button onClick={() => props.addToCart(stock)}>buy</button>
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
