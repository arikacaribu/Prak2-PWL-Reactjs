import { CardGroup, Card, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import Helmet from "react-helmet";

const useStyles = createUseStyles({
  divTop: {
    marginTop: 150, 
    backgroundColor: "white"
  },
  textProject: {
    color: "#247881"
  },
  card: {
    boxShadow: "0 0 13px 0", 
    border: "none",
    margin: 16
  },
  cardImg: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  }
  
});

const Project = () => {
  const classes = useStyles();

  return (
    <>
    <Helmet>
        <title>Cristian Ari - Project</title>
        <meta
          name="description"
          content=" Open House FF UI  program kerja bedah
          fakultas yang dibawahi oleh Departemen Humas BEM FF UI."
        />
        <meta name="keywords" content="Project" />
      </Helmet>
      <div className={classes.divTop}>
        <center>
          <h3 className={classes.textProject}>PROJECT YANG TELAH DIBUAT</h3>
          <hr />
          <CardGroup className="text-center">
            <Col lg={4} data-aos="zoom-out">
              <Card
                className={classes.card}
              >
                <Card.Img
                  variant="top"
                  className={classes.cardImg}
                  src="https://reactjs.org/logo-og.png"
                />
                <Card.Body>
                  <Card.Title> Web FFUI</Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} data-aos="zoom-out">
              <Card
                style={{ border: "none", boxShadow: "0 0 13px 0" }}
                className="m-3"
              >
                <Card.Img
                  variant="top"
                  className={classes.cardImg}
                  src="https://reactjs.org/logo-og.png"
                />
                <Card.Body>
                  <Card.Title>  </Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} data-aos="zoom-out">
              <Card
                style={{ border: "none", boxShadow: "0 0 13px 0" }}
                className="m-3"
              >
                <Card.Img
                  variant="top"
                  className={classes.cardImg}
                  src="https://reactjs.org/logo-og.png"
                />
                <Card.Body>
                  <Card.Title> </Card.Title>
                  <Card.Text>
                   
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </CardGroup>
        </center>
      </div>
    </>
  );
};
export default Project;
