import { SetStateAction, useState } from "react";
import RecoverInformTokenEmail from "../../compnents/RecorverInformTokenEmail";
import RecoverInformEmail from "../../compnents/RecoverInformEmail";
import RecoverPassword from "../../compnents/RecoverPassword";

 const Recover = () => {
     const [booleanInformEmail,setBooleanInformEmail] = useState<boolean>(true);
     const [booleanInformTokenEmail,setBooleanInformTokenEmail] = useState<boolean>(true);
     const [booleanInformNewPassword,setBooleanInformNewPassword] = useState<boolean>(false);


    return ( 
      <>
     {booleanInformEmail && (
     <RecoverInformEmail  
     setBooleanInformEmail= {setBooleanInformEmail} 
     setBooleanTokenEmail={setBooleanInformTokenEmail}/>
     )};

     {booleanInformTokenEmail && (
     <RecoverInformTokenEmail 
     setBooleanInformNewPassword={setBooleanInformNewPassword}
     setBooleanTokenEmail= {setBooleanInformTokenEmail}
     />
     )};

     {booleanInformNewPassword && (
     <RecoverPassword 
     setBooleanInformEmail={setBooleanInformEmail} 
     setBooleanInformTokenEmail={setBooleanInformTokenEmail} 
     setBooleanInformNewPassword={setBooleanInformNewPassword} 
     />
    )}
    </>
  );
 };

 export default Recover;