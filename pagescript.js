function getContent(category){
    // console.log("dette funker")
    let contentHTML = ""
    const selectedResources = resources.filter(resource => resource.category === category)

    selectedResources.map(resource => {
        contentHTML +=`<section>
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
                <ul id="links">
                <li><a href="${resource.sources[0].url}">${resource.sources[0].title}</a></li>
                <li><a href="${resource.sources[1].url}">${resource.sources[1].title}</a></li>
                <li><a href="${resource.sources[2].url}">${resource.sources[2].title}</a></li>
            </ul>
            </section>`
        
        const main = document.getElementsByTagName("main")
        main[0].innerHTML = contentHTML
    }
    )}

    