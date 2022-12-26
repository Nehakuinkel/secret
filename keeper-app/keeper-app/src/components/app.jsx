import React from "react";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import notes from "../notes";
// import Card from "./card";
// import contacts from "../contact";

// function createCard(contact){
//   return (<Card
//   id={contact.id}
//   key={contact.id}
//   name={contact.name}
//   imgURL = {contact.imgURL}
//   phone = {contact.phone}
//   description = {contact.description}
//    />);
// }






 function App(props){
    return (<div>
        <Header />
        {notes.map((noteItem)=>
       <Note 
           key ={noteItem.id}
            title = {noteItem.title}
            content = {noteItem.content} />)}
        <Footer />
  </div>);

// return (
//   <div>
//     <h1 className="heading">My Contacts</h1>
        
//           {contacts.map(createCard)}
         
          {/* /* <Card 
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        description={contacts[0].description}

        />
        <Card 
            name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        description={contacts[1].description}
        />
        <Card
       name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        description={contacts[2].description}
         /> */ }
//     </div>
// );
}
export default App;