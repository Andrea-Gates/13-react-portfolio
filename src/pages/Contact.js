import Form from "../components/Form";

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>

      <Form title={props.title} />
    </div>
  );
}

export default Contact;
