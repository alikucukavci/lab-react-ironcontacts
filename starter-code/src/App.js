import React from 'react';
import './App.css';
import IronContacts from "./components/IronContacts"
import contacts from './contacts.json'



//Always try keep data in the parent 
class App extends React.Component {
  state = {
    ironcontacts: contacts.slice(0,5)
  };

//The methods created and events should be at the same level as the state. Lifting state is different
  getNewCon = () => {
    const newContact = contacts[Math.floor(Math.random() * this.state.ironcontacts.length)+5];
  return newContact
  }
  
  
  addContact = () => {
    let newCons = [...this.state.ironcontacts]
    let n  = this.getNewCon()

    let t = newCons.filter(contact => {
      return contact.name === n.name 
    })
    if (!t.length) {
      newCons.push(n)
      this.setState({
        ironcontacts: newCons
      })

    }else this.addContact()

    
    };
  
  
    FilterName = () => {
      const sorted = [...this.state.ironcontacts]
      sorted.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
      
    this.setState({
      ironcontacts: sorted
        });
  };

  FilterPopularity = () => {
      const sorted = [...this.state.ironcontacts]
      sorted.sort((a, b) => {
        return b.popularity-a.popularity;
      })
      
    this.setState({
      ironcontacts: sorted
        });
  };

  deleteContact = id => {
    //   remove an element from this.state.contacts using setState
    const filtered = this.state.ironcontacts.filter(contact => {
      if (contact.id !== id) return true;
    });

    this.setState({
      ironcontacts: filtered
    });
  };
  
  render() {

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add random</button>
        <button onClick={this.FilterName}>Sort by name</button>
        <button onClick={this.FilterPopularity}>Sort by popularity</button>

        <IronContacts data={this.state.ironcontacts} delete={this.deleteContact} />
      </div>
      );
    }
}

export default App;
