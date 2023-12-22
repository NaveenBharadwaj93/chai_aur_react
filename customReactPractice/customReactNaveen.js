const createReact = (robject, container) => {
    const domElement = document.createElement(reactObject.type)
    domElement.innerHTML = reactObject.children
    for (const prop in reactObject.props) {
        if (prop == 'children') {
            continue
        }
        domElement.setAttribute(prop, reactObject.props[prop])
    }
    container.appendChild(domElement)
}

const reactObject = {
    type: 'h1',
    props: {
        color: 'blue'
    },
    children: 'This is a text setting from react component'
}

const mainContainer = document.querySelector('#root')

createReact(reactObject, mainContainer)