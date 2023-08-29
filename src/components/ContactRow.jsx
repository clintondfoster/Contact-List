
import React, { useState } from "react";

function ContactRow ({ contact, setSelectedContactId }) {
// console.log(setSelectedContactId)

    return (
        <tr onClick={() => {
                setSelectedContactId(contact.id)
            }}
        >
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )
}

export default ContactRow
