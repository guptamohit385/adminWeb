import React, { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
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
  Button ,
  Alert
} from "reactstrap";
import { baseUrl } from "config";
import 'react-toastify/dist/ReactToastify.css';

// const MapWrapper = () => {
//   React.useEffect(() => {
//   });
//   return (
//     <>
//       <div style={{ height: `100%` }}>Test</div>
//     </>
//   );
// };

function Banner() {
  const url2 = `${baseUrl}/categorys/search`;

  const [allValues, setValues] = useState({
    category: '',
    subCategory: '',
    order: '',
    bannerImage: ''
})


const success = () => toast.success('Product Added Successfully!', {
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

const handleOnChange2 = (e) =>{
  setValues({...allValues, [e.target.name] : e.target.files[0]});
}

const handleOnChange = (e) =>{
  if(e.target.name === 'category'){
      let filterItem = allValues.categoryTotalList.filter(  item => item.category === e.target.value)
      console.log("filter Item", filterItem)
      setValues({...allValues, [e.target.name] : e.target.value, subCategoryList : filterItem[0].subcategory });
  }else{
        setValues({...allValues, [e.target.name] : e.target.value});
  }
}

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Create Banner</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                  <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Category</label>
                        <Input 
                            type="select" 
                            name="category" 
                            id="category"
                            value={allValues.category}
                            onChange={(e) =>handleOnChange(e)}
                          >
                          <option>Select Category</option>
                          {
                            allValues.categoryList.map((item ,index) =>(
                                   <option key={index}>{item}</option>
                            ))
                          }
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Sub Category</label>
                        <Input 
                            type="select" 
                            name="subCategory" 
                            id="subCategory"
                            value={allValues.subCategory}
                            onChange={(e) =>handleOnChange(e)}
                        >
                          <option>Select SubCategory</option>
                          {
                            allValues.subCategoryList.map((item ,index) =>(
                                   <option key={index}>{item}</option>
                            ))
                          }
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Image Order</label>
                        <Input placeholder="1,2,4" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                    <FormGroup>
                        <label>Gallery Images</label>
                        <Input
                          placeholder="Banner Images"
                          type="file"
                          multiple
                          name="bannerImage"
                          // value={allValues.galleryImage}
                          onChange={(e) =>handleOnChange2(e)}
                        />
                      </FormGroup>
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

export default Banner;
