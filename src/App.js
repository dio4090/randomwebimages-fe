import './App.css';
import { React, Stack } from 'react';
import loadImage from './assets/dist/img/Reload-1s-200px.gif'

import SelectItem from './components/SelectComponent';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div classNameName="App">
      {/* HEADER */}
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">This site aims to load random images from a certain category so you can quickly grab the link. I'm not selling the content of the images or anything like that, this site just serves as a channel to disseminate images from the internet.</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Follow on Twitter</a></li>
                  <li><a href="#" className="text-white">Like on Facebook</a></li>
                  <li><a href="#" className="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
              <strong>Free Images Generator</strong>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* RELOAD BUTTON */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Free random web image generator (in beta)</h1>
              <p className="lead text-muted">Grab images from the web in an easy and simple way, to assemble your presentations or to place on your website.</p>

              <Button variant="primary" size='lg' onClick={refreshPage}>Refresh Images</Button>

              <p style={{ marginTop: 15 }}>Click the button above to reload the page and load more images!</p>
            </div>
          </div>
        </section>

        <section className="text-center container">
          <div className="row py-lg-4">
            <div className="col-md-8 mx-auto">
              <Button style={{ marginLeft: 10, marginTop: 3 }} variant="secondary">
                Animals 🐪
              </Button>
              <Button style={{ marginLeft: 10, marginTop: 3 }} variant="secondary">
                Vehicles 🚗
              </Button>
              <Button style={{ marginLeft: 10, marginTop: 3 }} variant="secondary">
                Technology 💻
              </Button>
              <Button style={{ marginLeft: 10, marginTop: 3 }} variant="secondary">
                Food 🌮
              </Button>
              <Button style={{ marginLeft: 10, marginTop: 3 }} variant="secondary">
                Nature 🌳
              </Button>
            </div>
          </div>
        </section>

        {/* SELECT CATEGORY */}
        <div id="divFormCategory" className="form-select-center">
          <SelectItem></SelectItem>
          {/* <select id="formCategory" onChange="checkSelectedCategory()" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option value="all">Select a category</option>
            <option value="animals">Animals</option>
            <option value="vehicles">Vehicles (coming soon)</option>
            <option value="technology">Technology (coming soon)</option>
            <option value="food">Food (coming soon)</option>
          </select> */}
        </div>

        {/* IMAGES */}
        <div className="album py-5 bg-light">
          <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <div className="justify-content-between align-items-center">
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" id="img_home2" src={loadImage} />
                  <div className="center">
                    <Card.Body className="align-items-center" >
                      <Button variant="outline-success">Go to Image</Button>
                    </Card.Body>
                  </div>
                </Card>
              </div>

              <div className="justify-content-between align-items-center">
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" id="img_home3" src={loadImage} />
                  <div className="center">
                    <Card.Body className="align-items-center" >
                      <Button variant="outline-success">Go to Image</Button>
                    </Card.Body>
                  </div>
                </Card>
              </div>

              <div className="justify-content-between align-items-center">
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" id="img_home1" src={loadImage} />
                  <div className="center">
                    <Card.Body className="align-items-center" >
                      <Button variant="outline-success">Go to Image</Button>
                    </Card.Body>
                  </div>
                </Card>
              </div>

            </div>
          </div>
        </div>

      </main>

      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">&copy; 2022 From the developer. All Rights Reserved.</p>
        </div>
      </footer>

    </div>

  );
}

export default App;
