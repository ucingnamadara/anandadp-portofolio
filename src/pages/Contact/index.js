import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { CardDiv, CopyText, NormalText, Title } from './style';
import { Copy } from 'react-bootstrap-icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const copyText = () => {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("anandapratama03@gmail.com").then(() =>
    {
      toast.success("Email address copied!", {
        position: "bottom-right"
      });
    }).catch((error) => {
      // Handle any errors here.
      console.error("Error copying email:", error);
  });
    
  };

  return (
    <div>
      <Navbar page="contact" />
      <CardDiv>
        <Title>Feel free to contact me!</Title>
        <NormalText>If you have any questions or need assistance with a project, feel free to reach out to me via email<CopyText onClick={copyText}> (Copy Me<Copy/>)</CopyText>. I'm always open to new opportunities and collaborations ♥♥♥♥♥</NormalText>
      </CardDiv>
      <ToastContainer position="top-right" />
      <Footer />
    </div>
  );
}

export default Contact;
