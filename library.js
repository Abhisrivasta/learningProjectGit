const addBtn = document.getElementById('for-detail-page');
const body = document.querySelector('body');
const bookInputDetails = document.querySelector('.book-detail')
const addDetail = document.querySelector('.addDetail');
let myLibrary = [];
function addBookDetail(title, author, year) {
    this.title = title.value;
    this.author = author.value;
    this.year = year.value;
    
}



const div = document.createElement('div');
body.appendChild(div);
div.className = 'displaybooks';
const Ulist = document.createElement('ul');
div.appendChild(Ulist);
const list = document.createElement('li');
Ulist.appendChild(list)
list.className = 'list'



addDetail.addEventListener('click', () => {
    const listElement = document.querySelector('.list');
    const inputTitle = document.getElementById('title');
    const inputAuthor = document.getElementById('author');
    const inputYear = document.getElementById('')
     
    
    let newBook = new addBookDetail(author, title, year);
    // myLibrary.push(newBook);
    console.log(newBook.author);
   
        listElement.textContent = `📖 Title: ${addBookDetail.title}, ✍️ Author: ${addBookDetail.author}, 📅 Year: ${addBookDetail.year}`
    });
    



addBookDetail();
