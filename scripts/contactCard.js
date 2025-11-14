export const createcontactCard=(contact)=>{
    return`<div class="contact_container">
                <img src="${contact.image}" alt="${contact.name}">
                <div class="details_container">
                    <div class="name">${contact.name}</div>
                    <div class="tags_container">
                    ${
                        contact.tags.map(
                            tag=>{
                                return`<div class="tags">${tag}</div>`
                            }
                        )
                    }
                        
                    </div>
                </div>
                <div class="btn_container">
                    <a href="view_contact.html" class="cta">View Contact</a>
                </div>
            </div>
`
}