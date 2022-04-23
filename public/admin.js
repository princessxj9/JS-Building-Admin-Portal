//write a fetch request that changes the title of a book with an ID of 3 to The Legends of Arathrae
/*async function changeBookName(){
 let res = await fetch('http://localhost:3000/updateBook',{
     method:'PATCH',
     headers:{
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({
         id: 3,
         title:'' The Legends of Arathrae'
     })
 })
let txt = await res.json()
console.log(txt)
}*/

async function main() {

    let response = await fetch('http://localhost:3001/listBooks')

    let books = await response.json()

    books.forEach(renderBook)
}

async function changeBookName(){
    let response = await fetch('http://127.0.0.1:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 3,
            title: 'The Legends of Arathrae'  
        })
    })
    let txt = await response.json()
    console.log(txt)
  }
  changeBookName()