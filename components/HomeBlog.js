import React from 'react'
import Card from 'react-bootstrap/Card'
function HomeBlog() {
    return (
        <div className="flex-1 items-center ">
            <Card className="inline-flex ml-12 mt-12 items-center w-1/4 flex-wrap">
  <Card.Img variant="top" src="/images/Music.svg" />
  <Card.Body className="overflow-ellipsis overflow-hidden">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button variant="primary">Go somewhere</button>
  </Card.Body>
</Card>
  <Card className="inline-flex ml-12 mt-12 items-center w-1/4 flex-wrap">
  <Card.Img variant="top" src="/images/Craft.svg" />
  <br/>
  <Card.Body className="overflow-ellipsis overflow-hidden">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button variant="primary">Go somewhere</button>
  </Card.Body>
</Card>
 <Card className="inline-flex ml-12 mt-12 items-center w-1/4 flex-wrap">
  <Card.Img variant="top" src="/images/Music.svg" />
  <Card.Body className="overflow-ellipsis overflow-hidden">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button variant="primary">Go somewhere</button>
  </Card.Body>
</Card>
        </div>
    )
}

export default HomeBlog
