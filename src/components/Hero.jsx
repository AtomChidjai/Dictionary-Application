import React from 'react'
import { Container, Card, CardBody, CardFooter, CardHeader, CardText, Stack, Button } from 'react-bootstrap' 

const Hero = () => {
  return (
    <>
        <Container className='d-flex justify-content-center align-items-center mt-5 text-center'>
            <Card className='bg-light' style={{width : '50%'}}>
                <CardHeader className='bg-success text-white'>Display Screen</CardHeader>
                    <Container>
                        <p className='mt-3'>
                            This is a Dictionary Application <br/>
                            using React, React Bootstrap, etc. <br/>
                            I'm using Api from this website below<br/>
                            <h2 className='mt-3'>"https://dictionaryapi.dev/"</h2><br/>
                            <div style={{fontSize : '9em'}}>🫡</div>
                            
                        </p>
                    </Container>
                    <Stack className='d-flex justify-content-center align-items-center mt-3' direction='horizontal' gap={3}>
                        <Button href='#' style={{width : '100px'}}>Home</Button>
                        <Button href='https://dictionaryapi.dev/' style={{width : '100px'}}>Api Doc</Button>
                    </Stack>
                    <CardFooter className='mt-4'>
                        By Atom
                    </CardFooter>
            </Card>
            
        </Container>
    </>
  )
}

export default Hero