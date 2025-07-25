import "./spinner.css";

export let Spinner = () => {
  let dot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="spinner">
      <div className="dots">
        {dot.map((d) => {
          return (
            <div
              key={d}
              className="dot"
              style={{
                transform: `rotate(${
                  d * (360 / dot.length)
                }deg) translateY(35px)`,
                animationDelay: `${d * 0.1}s`
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

