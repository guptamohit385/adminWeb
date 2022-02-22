
import React, { useState } from "react";
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Row, 
  Col,
  FormGroup, 
  CardTitle, 
  Form,
  Input, 
  Button } from "reactstrap";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { AddCategory } from "redux/action";
import { baseUrl } from "config";

function Category(props) {


  const url = `${baseUrl}/category`;

  const [allValues , setValues] = useState({
       category: "",
       subcategoryValue: '',
       subcategory: []
  })

  const handleOnChange = (e) =>{
    setValues({...allValues, [e.target.name] : e.target.value})
  }

  const addSubCategory = () =>{
       let subValue = allValues.subcategoryValue;
       let subValueArray = [...allValues.subcategory, subValue]
       setValues({...allValues, subcategoryValue: '', subcategory : subValueArray})
  }

  // console.log("allValues", allValues);

    const  handleOnSubmit =(e) =>{
            e.preventDefault();
            const data = {
              category: allValues.category,
              subcategory: allValues.subcategory
            }

            axios.post(url, data)
                  .then((response) =>{
                         console.log("response inside category", response)
                         success()
                  })
                  .catch((error) =>{
                      console.log("error inside category", error)
                      failed()
                  })
      }

      const success = () => toast.success('Category Added Successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
    });

      const failed = () => toast.error('Something Went Wrong Try Again', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
      });

  return (
    <>
       <ToastContainer theme="colored" />
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Create Category</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={(e) =>handleOnSubmit(e)}>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Company Name</label>
                        <Input
                          defaultValue="1 Store "
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Category</label>
                        <Input
                          placeholder="School dresses"
                          type="text"
                          name="category" 
                          value={allValues.category}
                          onChange={(e) =>handleOnChange(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>SubCategory</label>
                                <Input
                                  name="subcategoryValue" 
                                  placeholder="Boys Age 5-10"
                                  type="text"
                                  value={allValues.subcategoryValue}
                                  onChange={(e) =>handleOnChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <div className="mt-3">
                                <Button
                                  className="btn-round"
                                  color="success"
                                  onClick={() =>addSubCategory()}
                                >
                                  Add
                                </Button>
                            </div>
                        </Col>
                  </Row>
                  <Row>
                        <Col className="pr-1" md="6">
                              <div>
                                  {
                                    (allValues.subcategory.length !== 0) && <ul>
                                                                                 {allValues.subcategory.map((item ,index) =>(
                                                                                     <li key={index}>{item}</li>
                                                                                 ))}

                                                                            </ul>
                                  }
                              </div>
                        </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Create
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

const mapDispatchToProps = {
     AddCategory:AddCategory
}

export default connect(null,mapDispatchToProps)(Category)
