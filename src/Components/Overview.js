import "../Styles/Components.css";

const Overview = (props) => {
  const stocksData = [
    {
      id: 100,
      ticker: "AAPL",
      name: "Apple Inc",
      price2023: 119.7,
      size: 3000,
    },
    {
      id: 101,
      ticker: "ACN",
      name: "Accenture Plc",
      price2023: 250.5,
      size: 200,
    },
    {
      id: 102,
      ticker: "ADBE",
      name: "Adobe Inc",
      price2023: 350.2,
      size: 300,
    },
    {
      id: 103,
      ticker: "ANSS",
      name: "ANSYS",
      price2023: 150.7,
      size: 100,
    },
    {
      id: 104,
      ticker: "ATKR",
      name: "Atkore",
      price2023: 75.9,
      size: 50,
    },
    {
      id: 105,
      ticker: "COST",
      name: "Costco",
      price2023: 450.8,
      size: 400,
    },
    {
      id: 106,
      ticker: "MA",
      name: "Mastercard",
      price2023: 600.3,
      size: 500,
    },
    {
      id: 107,
      ticker: "MSTF",
      name: "Microsoft",
      price2023: 800.6,
      size: 700,
    },
    {
      id: 108,
      ticker: "ROL",
      name: "Rollins",
      price2023: 250.9,
      size: 150,
    },
    {
      id: 109,
      ticker: "QCOM",
      name: "Qualcomm",
      price2023: 150.3,
      size: 100,
    },
  ];

  return (
    <div>
      <h1>Overview</h1>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Name</th>
            <th>Price 2023</th>
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
