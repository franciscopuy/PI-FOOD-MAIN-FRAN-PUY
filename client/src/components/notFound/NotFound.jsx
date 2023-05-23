
const NotFound = () => {
    const notFoundImageUrl = "https://img.freepik.com/vector-gratis/fondo-pagina-error-404-distorsion_23-2148087863.jpg?w=740&t=st=1684101552~exp=1684102152~hmac=fd38de758e12c7cb90718071591c877dba3207d55d86930c4da30dc49c841196";
  
    return (
      <div style={{ backgroundColor: "#1a1a2e", color: "#fff" }}>
        <h1>404 - Not Found</h1>
        <img src={notFoundImageUrl} alt="Not Found" />
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  };
  
  export default NotFound;