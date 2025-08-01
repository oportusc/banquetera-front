import { useLocation, useSearchParams } from "react-router-dom";
import Contactanos from "./Home/components/Contactanos"
import { useState } from "react";

const ContactanosDetallado = () => {

  const location = useLocation()

  let detallado = false
  if(location.pathname.includes("contactanos")) {
    detallado = true
  }else{
    detallado = false
  }

  return (
    <>
      <div>
        <Contactanos
          detallado = {detallado}
        />
      </div>

    </>
  )

}

export default ContactanosDetallado