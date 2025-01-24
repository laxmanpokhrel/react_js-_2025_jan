function ContainerOne({ children }) {
  return (
    <div style={{ border: '1px solid red', borderRadius: '2rem' }}>
      <header>This is a test header</header>
      {children}
    </div>
  );
}
export default ContainerOne;
