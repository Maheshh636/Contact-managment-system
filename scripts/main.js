import { fetchAllcontacts } from "./crud.js";
import showcontacts from "./contacts.js";

async function fetchContacts() {
    const data = await fetchAllcontacts();
    showcontacts(data);
}
fetchContacts();

const addNewcontactBtn = document.querySelector(".addNewContact");
if (addNewcontactBtn) {
    addNewcontactBtn.addEventListener("click", () => {
    window.location.href = "./addcontact.html"; 
    });
}
