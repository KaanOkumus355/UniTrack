import LogRegTemp from "./LogRegTemp";

function Name({onMain}) {
  return (
    <LogRegTemp
      title="Custiomize your account"
      description="This will help personalize your account."
      child={
        <>
        <input type="text" placeholder="👤 Name or Username"/>
        <button className="Name-submit-button" onClick={onMain}>Continue</button>
        </>
      }
      footer={null}
    />
  )
}

export default Name;