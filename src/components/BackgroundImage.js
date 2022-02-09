import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function BackgroundImage() {
  return (

<Card className="bg-green text-black">
  <Image src="1007x408"/>
  <Card.ImgOverlay>
    <Card.Text>
      <h1>Order groceries for delivery or pickup today.</h1>
    </Card.Text>
    <Card.Text>
      <h2>Whenever you want wherever you want. Delivered right to your door.</h2>
    </Card.Text>
  </Card.ImgOverlay>
      </Card>
        )
}

