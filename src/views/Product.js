// {
// 	"category": "test", 
// 	"subCategory": "test", 
// 	"searchCategory": "test",
// 	"productName": "test", 
// 	"productDetails": "dygafsgdkhsjdfjsjas",
// 	"ourPrice": 2300, 
// 	"currency": "INR",
// 	"marketPrice": 2800,
// 	"coverImageUrl": "test",
// 	"features": ["test"]
// }
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
import 'react-toastify/dist/ReactToastify.css';;


function Product() {

  const url = `${baseUrl}/product`;
  const url2 = `${baseUrl}/categorys/search`;


  const [allValues, setValues] = useState({
         category: '',
         subCategory: '',
         searchCategory: '',
         productName: '',
         currency: "INR",
         ourPrice: 0,
         marketPrice: 0,
         productDetails: '',
         coverImageUrl: '',
         galleryImage: [],
         categoryList:[],
         subCategoryList: [],
         categoryTotalList: []
  })

  useEffect(() =>{

    // success()
    // failed()

          axios.get(url2)
                .then((response) =>{
                    let data = response.data;
                    var dataArray = [];

                    for(var category in data) {
                        dataArray.push(data[category].category);
                    }
                    setValues({...allValues, categoryList : dataArray, categoryTotalList: data})
                })
  }, [])

  const handleOnChange = (e) =>{
      if(e.target.name === 'category'){
          let filterItem = allValues.categoryTotalList.filter(  item => item.category === e.target.value)
          console.log("filter Item", filterItem)
          setValues({...allValues, [e.target.name] : e.target.value, subCategoryList : filterItem[0].subcategory });
      }else{
            setValues({...allValues, [e.target.name] : e.target.value});
      }
  }

  const handleOnChange2 = (e) =>{
        setValues({...allValues, [e.target.name] : e.target.files[0]});
   }

  console.log("allvalues in product", allValues)

  const  handleOnSubmit = async (e) =>{
      e.preventDefault();
      const data = {
        category: allValues.category,
        subCategory: allValues.subCategory,
        searchCategory: allValues.searchCategory,
        productName: allValues.productName,
        productDetails: allValues.productDetails,
        currency: "INR",
        ourPrice: allValues.ourPrice,
        marketPrice: allValues.marketPrice,
        coverImageUrl: "",
        features: [],
      }


      const response = await axios.post(url, data);

      if( response.status === 200)
      {
                let id = response.data._id;
                let url3 = `${baseUrl}/upload/${id}`;
                const formData = new FormData();
                formData.append('cover', allValues.coverImageUrl);
                formData.append('gallery', allValues.galleryImage);
          
                const response2 = await axios.post(url3, formData);
          
                console.log("response2", response2)
          
                if( response2.status === 200)
                { 
                        console.log("images uploaded successful")
                        success()
                }else{
                        console.log("images failed")
                        failed()
                }
      }else{
                 failed()
      }
}

// const notify = () => toast("Wow so easy!")

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

  return (
    <>
      <ToastContainer theme="colored" />
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Create Product</CardTitle>
              </CardHeader>
              <CardBody>
                <Form  onSubmit={(e) =>handleOnSubmit(e)}>
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
                    <Col className="px-1" md="4">
                      <FormGroup>
                      <label>Search Category</label>
                      <Input 
                          type="select" 
                          name="searchCategory" 
                          id="searchCategory"
                          value={allValues.searchCategory}
                          onChange={(e) =>handleOnChange(e)}
                      >
                          <option>Select SearchCategory</option>
                          <option>subcategory1</option>
                          <option>subcategory2</option>
                          <option>subcategory3</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Product Name</label>
                        <Input
                          placeholder="Ex: pencil"
                          type="text"
                          name="productName"
                          value={allValues.productName}
                          onChange={(e) =>handleOnChange(e)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Our Price</label>
                        <Input
                          placeholder="Ex: 500"
                          type="text"
                          name="ourPrice"
                          value={allValues.ourPrice}
                          onChange={(e) =>handleOnChange(e)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                    <FormGroup>
                      <label>Market Price</label>
                        <Input
                          placeholder="Ex: 700"
                          type="text"
                          name="marketPrice"
                          value={allValues.marketPrice}
                          onChange={(e) =>handleOnChange(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Currency</label>
                        <Input
                          placeholder="INR"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Product Vendor</label>
                        <Input
                          placeholder="Ex: Sachin"
                          type="text"
                        />
                      </FormGroup>
                    </Col> */}
                    {/* <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Likes</label>
                        <Input
                          placeholder="Ex: 100"
                          type="text"
                        />
                      </FormGroup>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Product Detail</label>
                        <Input
                          type="textarea"
                          // defaultValue="Product Detail..."
                          name="productDetails"
                          value={allValues.productDetails}
                          onChange={(e) =>handleOnChange(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          type="textarea"
                          defaultValue="Product Description..."
                        />
                      </FormGroup>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Cover Image</label>
                        <Input
                          placeholder="Main Cover Page"
                          type="file"
                          name="coverImageUrl"
                          // value={allValues.coverImageUrl}
                          onChange={(e) =>handleOnChange2(e)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Gallery Images</label>
                        <Input
                          placeholder="Gallery Images"
                          type="file"
                          multiple
                          name="galleryImage"
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

export default Product;
