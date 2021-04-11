/***** Deliverable 1 *****/
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector("#header")
    console.log("Here's your header:", header)

    /***** Deliverable 2 *****/
    header.style.color = "red"

    /***** Deliverable 3 *****/
    console.log("the player object looks like this:", player)
    const img = document.querySelector('img')
    const name = document.querySelector('h2')
    const nickname = document.querySelector('em')

    img.src = player['photo']
    img.alt = player['name']
    name.innerText = player['name']
    nickname.innerText = player['nickname']

    /***** Deliverable 4 *****/
    const goals = document.querySelector('#goals')
    player['goals'].forEach(data => {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const a = document.createElement('a')

        li.setAttribute('data-id', data['id'])
        p.innerText = data['description']
        a.href = data['link']
        a.innerText = data['link']
        a.target = "_blank"

        goals.appendChild(li).appendChild(p)
        li.appendChild(a)
    })

    /***** Deliverable 5 *****/
    const data3 = document.querySelector("[data-id = '3']")
    data3.remove()
})
