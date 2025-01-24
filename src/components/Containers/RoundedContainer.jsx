export default function RoundedContainer({ children, style }) {
  return (
    <div style={style} className="card">
      {children}
    </div>
  );
}
