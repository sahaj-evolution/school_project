import Header from "../../Header/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Mock from '../../Constant/Absent.json'

function Absent() {
    return (
        <>
        <Header/>
        <Container fluid>
            <Row>
                <Col>
                    {
                        Mock.length === 0 && 
                        <h1 className="text-center">
                        No Records Found
                        </h1>
                    }
                    {
                        Mock.length !== 0 &&

                        <Table striped="columns">
                    <thead>
                     <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>City</th>
                     </tr>
                    </thead>
                    <tbody>
                        {
                          Mock.map((item,index) => (
                            <>
                            <tr>
                            <td>{index + 1}</td>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.Email}</td>
                            <td>{item.City}</td>
                            </tr>    
                            </>
                          ))  
                        }
                    </tbody>

                    </Table>
                    }
                    
                </Col>
            </Row>
        </Container>
        </>
      );
}

export default Absent;