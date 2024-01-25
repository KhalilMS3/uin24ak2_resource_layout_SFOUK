function getContent(category){
    let contentHTML = ""
    const selectedResources = resources.filter(resource => resource.category === category)

    selectedResources.map(resource => {
        contentHTML +=`<section>
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
                <ul id="links">
                ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}<a/></li>`).join('')}
            </ul>
            </section>`
        
        const main = document.getElementsByTagName("main")
        main[0].innerHTML = contentHTML
    }
    )}

    