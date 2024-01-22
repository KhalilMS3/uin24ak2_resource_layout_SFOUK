function getContent(){
    console.log("dette funker")
    let resourceHTML = ""
    
    resources.map(resource => {
    
            resourceHTML +=`<section>
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
                <ul>
                <li><a href="${resource.sources[0].url}">${resource.sources[0].title}</a></li>
                <li><a href="${resource.sources[1].url}">${resource.sources[1].title}</a></li>
                <li><a href="${resource.sources[2].url}">${resource.sources[2].title}</a></li>
            </ul>
            </section>`
        
        const main = document.getElementsByTagName("main")
        main[0].innerHTML = resourceHTML
    }
    )}



