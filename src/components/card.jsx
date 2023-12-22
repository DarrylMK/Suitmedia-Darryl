const Card = ({ image, date, title }) => {
  return (
    <div className="card">
      <img src={image} alt="img" />
      <div className="card-info">
        <div className="date">{date}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default Card;
