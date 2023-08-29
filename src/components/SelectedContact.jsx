import React, { useState, useEffect } from "react";


function SelectedContact({ selectedContactId, setSelectedContactId }) {

    const [contact, setContact] = useState(null);


    useEffect(() => {
        async function fetchSingleContact() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
                );
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.error(error)
            }
        }
        fetchSingleContact()
    },[])

    if (!contact) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Selected Contact Details</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{contact.name}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{contact.phone}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{contact.email}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{contact.address.street}, {contact.address.suite}, < br />
                        {contact.address.city}, {contact.address.zipcode}</td>
                    </tr>
                    <tr>
                        <td>Company:</td>
                        <td>{contact.company.name}</td>
                    </tr>
                    <tr>
                        <td>Website:</td>
                        <td>{contact.website}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
// console.log("Single Contact", contact)
export default SelectedContact;
