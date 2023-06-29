import "../index.css";
const Shrimmer = () => {
  return (
    <div className="outer-body">
      <div className="body">
        {Array(15)
          .fill("")
          .map((e,index) => (
            <div className="Shrimmer-card" key={index}></div>
          ))}
      </div>
    </div>
  );
};

export default Shrimmer;
