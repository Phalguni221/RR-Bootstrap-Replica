import Form from 'react-bootstrap/Form'
 
export default function FormImage () {
    return (
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Your Address Below</Form.Label>
    <Form.Control type="addess" placeholder="Enter address" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
</Form>
    )
}