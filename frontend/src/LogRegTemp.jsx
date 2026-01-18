function LogRegTemp({title, description, child, footer}) {
  return (
    <div className="loginpage">
      <h1>{title}</h1>
      <p>{description}</p>

      {child}

      {footer}
    </div>
  );
}

export default LogRegTemp;