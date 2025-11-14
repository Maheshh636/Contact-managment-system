import contacts from "./data.js"

export const fetchAllcontacts= () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(contacts);
        },1000);
        
    });
}