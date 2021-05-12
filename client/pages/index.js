import { Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FaCrosshairs } from 'react-icons/fa'; 

export default function Home() {
  return (
    <Row className="mt-8">
      <Col md={7} xs={12} className="text-center">
        <h1>
          Comida saudável e gostosa direto na sua casa
        </h1>
      </Col>
      <Link href='/restaurants'>
        <Button variant='custom-red' size='lg' className='text-white'>
          <FaCrosshairs/>
        </Button>
      </Link>
    </Row>
  )
}