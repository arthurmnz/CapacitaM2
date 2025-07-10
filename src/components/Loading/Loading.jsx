import "./Loading.css";

const Loading = () => {
  return (
    <section className="loader-container">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </section>
  );
};

export default Loading;
