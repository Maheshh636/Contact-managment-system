import { createcontactCard } from "./contactCard.js"

const Contacts_container=document.querySelector('.contacts_container')

const showcontacts=(contacts)=>{
    console.log(contacts.forEach(contact=>{
        const contactCard=createcontactCard(contact)
        Contacts_container.insertAdjacentHTML("beforeend",contactCard)
    }))
}
export default showcontacts