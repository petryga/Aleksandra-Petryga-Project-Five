import { Component } from 'react';
import axios from 'axios';
import firebase from './firebase.js'
import './App.scss';
import Image from './Image.js';
import Notes from './FirebaseNotes.js'
import SearchBar from './SearchBar.js';

// install axios and do an api call to get the images

// but only after the component has mounted to the page 
  // componentDidMount - if I want the images preloaded on a page 

// get the results after user selects something
  // this.setState to save our returned data 

// have a render which will display the images on a page

//configure Firebase on React
//connect firebase data to the state
//map through the book state to display each book
//add remove button
//on remove button click, remove the book that was clicked on, remove it from firebase
//create an input form to get user's input value 
//on submit of the form, submit the user's input value to firebase

class App extends Component {
  constructor() {
    super();
    this.state = {
      allTheImages: [],
      allTheNotes: [],
      userInput: '',
      inputError: false,
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (data) => {
      const firebaseDataObject = data.val();
      let notesArray = [];
      for (let propertyKey in firebaseDataObject) {
        const propertyValue = firebaseDataObject[propertyKey];
        const formattedObj = {
          id: propertyKey,
          name: propertyValue,
        };
        notesArray.push(formattedObj)
      }
      this.setState({
        allTheNotes: notesArray,
      })
    })
  }

  fetchImages = (val) => {
    if (val) {
    axios({
      url: `https://api.unsplash.com/search/photos`,
      method: 'get',
      responseType: 'json',
      params: {
        query: val,
        client_id: `oEqXIabqhgGGmg6GNvKh8BohaoPNI5X5XX-FO1zKQgk`,
        page: 1,
        per_page: 15,
        orientation: 'landscape',
      }
    })
      .then((res) => {
        this.setState({
          allTheImages: res.data.results,
        })
      })
      .catch(() => {
        alert('no images ;(');
      }) 
  } else {
    alert('Please make a selection')
  }
}

  handleAdd = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    if (this.state.userInput === '') {
      this.setState({
        inputError: true,
      })
    } else {
      dbRef.push(this.state.userInput);
    }
    this.setState({
      userInput: '',
    })
  }

  handleInputChange = (e) => {
    this.setState({
      userInput: e.target.value,
      inputError: false,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="flex wrapper main-container">
          <header className="flex column">
            <div className="header-text">
              <h1>Travel <br />
                from <br />
                home</h1>
              <p>We love to travel. But it’s not always possible to travel all the time - sometimes world events conspire against us...
              <br/>
              All is not lost however, and here is a way to travel from home! 
              <br/>
              Please make a selection, and enjoy your trip!
                <br />
                <br />
            Inspired for your future trip, and wish to take a note?</p>

              <form className="notes-form">
                <label htmlFor="new-note">Travel Journal</label>
                <textarea
                  className={`new-note ${this.state.inputError === true ? 'error' : ''}`}
                  onChange={this.handleInputChange}
                  type="text"
                  id="new-note"
                  value={this.state.userInput}
                />
                <button onClick={this.handleAdd}>Add a note</button>
              </form>

              <ul>
                {
                  this.state.allTheNotes.map((noteObject, index) => {
                    return (
                      <Notes
                        key={noteObject.id}
                        id={noteObject.id}
                        noteText={noteObject.name}
                        index={index + 1}
                      />
                    )
                  })
                }
              </ul>
            </div>
          </header>

          <main className="flex column">
            <SearchBar
              functionAxiosCall={this.fetchImages}
            />
            <h2>Your Destination</h2>
            {
              this.state.allTheImages.map((imageObject) => {
                return (
                  <Image
                    key={imageObject.id}
                    url={imageObject.urls.regular}
                    alt={imageObject.alt_description}
                    author={imageObject.user.first_name}
                  />
                )
              })
            }
          </main>
        </div>
        <footer className="wrapper">
          <p>Aleksandra Petryga @ Juno College</p>
          {/* Images courtesy of Unsplash.com api, 
          background image - https://pixabay.com/illustrations/textile-fabric-leaf-plant-palm-2310247/,
          favicon - https://favicon.io/emoji-favicons/airplane/ */}
        </footer>
      </div>
    );
  }
}

export default App;
