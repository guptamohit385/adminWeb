
import React from "react";
import { Line, Pie } from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import {
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
const chartColor = '#FFFFFF';

const options = {
  maintainAspectRatio: false,
  legend: {
      display: false
  },
  tooltips: {
      bodySpacing: 4,
      mode:"nearest",
      intersect: 0,
      position:"nearest",
      xPadding:10,
      yPadding:10,
      caretPadding:10
  },
  responsive: 1,
  scales: {
      yAxes: [{
          display:0,
          ticks: {
              display: false
          },
          gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false
          }
      }],
      xAxes: [{
          display:0,
          ticks: {
              display: false
          },
          gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false
          }
      }]
  },
  layout:{
      padding:{left:0,right:0,top:15,bottom:15}
  }
};

const data = (canvas) => {
  var ctx = canvas.getContext("2d");

  var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
  gradientStroke.addColorStop(0, '#80b6f4');
  gradientStroke.addColorStop(1, chartColor);

  var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
  gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
  gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
  return {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      datasets: [{
          label: "Sales Per Month",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550]
      }]
  }
};

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                  <div class="icon-big text-center icon-warning">
                    <i class="nc-icon nc-money-coins text-success"></i>
                  </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Sales</p>
                      <CardTitle tag="p">102</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> View All
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Products</p>
                      <CardTitle tag="p">150</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Add New
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Categories</p>
                      <CardTitle tag="p">9</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> View All
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Line data={data} options={options} />
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Category Sale Statistics</CardTitle>
                <p className="card-category">Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Sports{" "}
                  <i className="fa fa-circle text-warning" /> Hardware{" "}
                  <i className="fa fa-circle text-danger" /> Clothing{" "}
                  <i className="fa fa-circle text-gray" /> Beauty
                </div>
                <hr />
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">User vs Sales</CardTitle>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Users{" "}
                  <i className="fa fa-circle text-warning" /> Sales
                </div>
                <hr />
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
