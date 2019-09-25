import React from 'react'

//Stateless component
const IronContacts = props => {


    
    let test = props.data.map(contact => {
      //   console.log("movie: ", movie);
      return (
          <div className="contact" key={contact.id}>
              <img className="picture" src={contact.pictureUrl} alt=""/>
          <h2>{contact.name}</h2>
              <p>{contact.popularity}</p>
              <button onClick={() => props.delete(contact.id)}>
                      Delete
                    </button>        </div>
      );
    });
        
    return (
        <div>
        {test}
        </div>
    )
}


// //Only if states are used
// class IronContacts extends React.Component {
    
//     render() {
//         const test = this.props.data.map(contact => {
//     return (
//         <div key={contact.id} className="contact">
//             <p><img className="picture" src ={contact.pictureUrl} alt="halloooo"/></p>
//             <p>{contact.name}</p>
//             <p>{contact.popularity}</p>
//         </div>
//     )
// })
//         let myContacts = test.slice(0, 5)
        


// return (
//     <div>
// {myContacts}
//     </div>
// )
// }
// }


export default IronContacts

