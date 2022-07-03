import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function App() {
  const [mydata,setData]=useState([]);
  const apiGet=()=>{
    var a;
    var c=parseInt(prompt("Which Category You Want To Explore  ? Press (0 for Sports, 1 for Entertainment,2 for International,3 for Science,4 for political,5 for National , 6 for World , 7 for Technology , 8 for AutoMobile , 9 for StartUp , 10 for Business, 11 for Miscellaneous, 12 for Hatke (Unconventional)) News "))
    switch(c){
      case 0:
        a='sports';
        break;
      case 1:
        a='entertainment';
        break;
      case 2:
        a='science';
        break;
      case 3:
        a='international';
        break;
      case 4:
        a='politics';
        break;
      case 5:
        a='national';
        break;
      case 6:
        a='world';
        break;
      case 7:
        a='technology';
        break;
      case 8:
        a='Automobile';
        break;
      case 9:
        a='startup';
        break;
      case 10:
        a='business';
        break;
      case 11:
        a='miscellaneous';
        break;
      case 12:
        a='hatke';
        break;
      default:
        a='"'
    }
    fetch('https://inshorts.deta.dev/news?category='+a)  //category=sports,entertainment,international,science,politics
    .then((response)=>response.json())
    .then((json)=>{
      // console.log(json),
      setData(json.data);
    });
  };

  useEffect(()=>{
    apiGet();
    const interval=setInterval(()=>{
      apiGet();
    },50000);
    return ()=> clearInterval(interval);

  },[])
  return (
    <div className="App">
      <h1 className='h'>News From All Over The World</h1>
      {/* <h3>Source:- inshorts.deta.dev </h3> */}
      <Container fluid>
      <Row xs={1} md={3} className="g-4">
        {mydata.map(
          (value)=>{
            return(
              <>
              <Col className='container-fluid mt-4'>
              <Card border='danger' color='black' bg='warning'>
                <Card.Img variant='top' height='350px' width='50%' src={value.imageUrl}></Card.Img>
                <Card.Body>
                  <Card.Title>{value.date}</Card.Title>
                  <Card.Title>{value.content}</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
              </> 
            )
        })}
      </Row>
    </Container>
    </div>
  );
}

export default App;
// function App() {
//   const [mydata, setData] = useState([]);
//   const apiGet = () => {
//     var a = String(prompt("In Which Category You Want To Explore (sports,entertainment,international,science,politics)? "))
//     fetch('https://inshorts.deta.dev/news?category=' + a)  //category=sports,entertainment,international,science,politics
//       .then((response) => response.json())
//       .then((json) => {
//         // console.log(json),
//         setData(json.data);
//       });
//   };

//   useEffect(() => {
//     apiGet();
//     const interval = setInterval(() => {
//       apiGet();
//     }, 50000);
//     return () => clearInterval(interval);

//   }, [])
//   return (
//     <div className="App">
//       <h1 className='h'>News From All Over The World</h1>

//       <Container fluid>
//         <Row xs={1} md={3} className="g-4">
//           {mydata.map(
//             (value) => {
//               return (
//                 <>
//                   {[
//                     'Primary',
//                     'Secondary',
//                     'Success',
//                     'Danger',
//                     'Warning',
//                     'Info',
//                     'Light',
//                     'Dark',
//                   ].map((variant) => (
//                     <Col className='container-fluid mt-4'>
//                       <Card border='Dark' color='black' bg={variant.toLowerCase()}
//                         key={variant}
//                         text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//                         className="mb-2" >
//                         <Card.Img variant='top' height='350px' width='50%' src={value.imageUrl}></Card.Img>
//                         <Card.Body>
//                           <Card.Title>{value.date}</Card.Title>
//                           <Card.Title>{value.content}</Card.Title>
//                           <Card.Text></Card.Text>
//                         </Card.Body>
//                       </Card>
//                     </Col>
//                   ))}
//                 </>
//               )
//             })}
//         </Row>
//       </Container>
//     </div>
//   );
// }


