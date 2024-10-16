import Accordion from 'react-bootstrap/Accordion';

const Component2 = () => {
    return ( 
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why to Learn Reactjs</Accordion.Header>
        <Accordion.Body>
          React js is Mot widely used framework 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why Bootstrap</Accordion.Header>
        <Accordion.Body>
         Ut has large prdefined Components 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

     );
}
 
export default Component2;