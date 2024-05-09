import { useState } from "react";
import { useEffect } from "react";
import React from "react";
// import App from "../App";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      const response = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );

      const result = await response.json();
      setContact(result);
      console.log(contact);
    }
    fetchSelectedContact();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts.map((contact) => {
            return <ContactRow key={contact.id} contact={contact} />;
          })}
        </tbody>
      </table>
    </>
  );
}
