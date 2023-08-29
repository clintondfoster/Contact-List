import ContactList from './components/ContactList';
import './App.css';
import { useState } from "react";
import SelectedContact from './components/SelectedContact'


function App() {

  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="container">
      {selectedContactId ? (
        <div className="selected-contact">
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
          <div className="button-container">
            <button onClick={() => setSelectedContactId(null)}>Back to List</button>
          </div>
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

export default App;
