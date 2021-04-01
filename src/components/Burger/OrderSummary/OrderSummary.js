import Aux from "../../../hoc/Auxillary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (igKey) => {
      return (
        <li key={igKey}>
          <span style={{ testTransform: "capitalise" }}>{igKey}</span>:{" "}
          {props.ingredients[igKey]}{" "}
        </li>
      );
    }
  );

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Countinue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
