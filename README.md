# Final Project - Frontend

<img src="./page.png" />

Eureka Xpert <br/>
Fullstack Junior Web Development <br/>
&copy;2023

### Setup
- open the other terminal in VSCode
- enter in `frontend directory`, run `npm start` to start app

## Frontend

Build using:
- ReactJS
- Moment (to format date)

## Others
- VSCode
- XAMPP
- Postman
- Chrome


## Request data in Postman

METHOD - END POINT <br/>

GET - http://localhost:3000/products</br>
Kirim request GET untuk membaca semua data `products`

POST - http://localhost:3000/products</br>
Kirim request POST body JSON untuk menambahkan data:
<pre> 
{
    "name" : "Buat dihapus",
    "description" : "nanti dihapus.",
    "image" : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
    "price" : 15000000
}
</pre>

PUT - - http://localhost:3000/products/:id</br>
Kirim request PUT body JSON untuk mengupdate data:
<pre>
{
    "name" : "Mac Book Air Mba M1 2020 256",
    "description" : "MBA M1 2020 256gb new garansi resmi Tam indonesia",
    "image" : "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/21/4f016704-8bed-41b6-b516-d215e483d8a8.jpg",
    "price" : 12750000
}
</pre>

DELETE - http://localhost:3000/products/:id</br>
Kirim request DELETE untuk menghapus data yang dipilih berdasarkan `id`
