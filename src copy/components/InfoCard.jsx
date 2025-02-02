const InfoCard = ({ title, description, items }) => {
  return (
    <div className="info-card">
      <h2>{title}</h2>
      {description && <p className="description">{description}</p>}
      {items && items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong>
              {item.specialization && <span> - {item.specialization}</span>}
              {item.description && <p>{item.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default InfoCard

