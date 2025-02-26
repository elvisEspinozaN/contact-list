import React from "react";
import { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (E) {
        console.error("Error fetching contact: ", E);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <div className="loading-message">Loading contact...</div>;
  }

  return (
    <div className="contact-card">
      <h2>{contact.name}</h2>
      <h3>user: {contact.username}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>
        Address: {contact.address.street} {contact.address.suite}
      </p>
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Back to Contact List
      </button>
    </div>
  );
}

export default SelectedContact;
