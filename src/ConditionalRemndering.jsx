import "./condition.css";
const ConditionalRemndering = (prop) => {
  return (
    <div className="container">
      <h3>
        <span>
          Reminder for : {prop.name} || {prop.count}{" "}
        </span>
      </h3>
    </div>
  );
};

export default ConditionalRemndering;
