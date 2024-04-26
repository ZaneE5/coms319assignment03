import React, { useState, useEffect } from "react";
import {useForm} from "react-hook-form";

function App() {
    const [product, setProduct] = useState([]);
    const [oneProduct, setOneProduct] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    // new Product
    const [addNewProduct, setAddNewProduct] = useState({});

    const [viewer1, setViewer1] = useState(false);
    const [viewer2, setViewer2] = useState(false);

    const order = data => {
        data.id = parseInt(data.id);
        console.log(data);
        setTimeout(() => { addProduct(data); }, 2000);
    }

    function addProduct(data){
        var url = `http://localhost:8081/addItem`
    
        fetch(url, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)})
            .then(response => response.json())
            .then(data => console.log(data));
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    function getAllProducts() {
        fetch("http://localhost:8081/catalog")
            .then((response) => response.json())
            .then((data) => {
                console.log("Show Catalog of Products :");
            console.log(data);
            setProduct(data);
            });
        setViewer1(!viewer1);
    }
    
    function getOneProduct(id) {
        console.log(id);
        if (id >= 1) {
            fetch("http://localhost:8081/catalog/" + id)
                .then((response) => response.json())
                .then((data) => {
                    console.log("Show one product :", id);
                    console.log(data);
                    let arr = [data];
                    setOneProduct(arr);
            });
        if (false === viewer2)
            setViewer2(true);
        } else {
            console.log("Wrong number of Product id.");
            setViewer2(false);
        }
    }

    const showAllItems = product.map((el) => (
        <div key={el.id}>
            <img src={el.image} width={30} alt="images" /> <br />
            Title: {el.title} <br />
            Category: {el.category} <br />
            Price: {el.price} <br />
            Rating: {el.rating.rate} <br />
        </div>
    ));

    const showOneItem = oneProduct.map((el) => (
        <div key={el.id}>
            <img src={el.image} width={30} alt="images" /> <br />
            Title: {el.title} <br />
            Category: {el.category} <br />
            Price: {el.price} <br />
            Rating: {el.rating.rate} <br />
        </div>
    ));

    const showOneItemToDelete = oneProduct.map((el) => (
        <div key={el.id}>
            <img src={el.image} width={30} alt="images" /> <br />
            Title: {el.title} <br />
            Category: {el.category} <br />
            Price: {el.price} <br />
            Rating: {el.rating.rate} <br />
            <button type="button" className = "btn btn-secondary" variant="light" onClick={() => deleteRobot(el)}> Confirm Delete</button>
        </div>
    ));

    function deleteRobot(el){
        console.log(el);
        var url = `http://localhost:8081/deleteItem/${el.id}`
    
        fetch(url, {method: 'DELETE'})
        .then(response => response.json())
        .then(data => console.log(data));

        setViewer2(false);
    }

    function updateRobot(){
        var textBoxValue = document.getElementById("updatetextbox").value;
        console.log(textBoxValue);
        var url = `http://localhost:8081/update/${textBoxValue}`;
    
        fetch(url, {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }
    

    return ( 
    <div>
        <h1>Catalog of Products</h1>

        <div>
            <h3>Show all available Products.</h3>
            <button onClick={() => getAllProducts()}>Show All ...</button>
            {viewer1 && showAllItems}
        </div>

        <div>
            <h3>Show one Product by Id:</h3>
            <input type="text" id="message" name="message" placeholder="id" onChange={(e) => getOneProduct(e.target.value)} />
            {viewer2 && showOneItem}
        </div>

        <div>
            <h3>Add a product:</h3>
            <form onSubmit={handleSubmit(order)} className="container mt-5">
                <div className="form-group">
                    <input {...register("id", { required: true })} placeholder="Id" className="form-control"/>
                    {errors.id && <p className="text-danger">Id is required.</p>}
                </div>
                <div className="form-group">
                    <input {...register("title", { required: true })} placeholder="Title" className="form-control"/>
                    {errors.title && <p className="text-danger">Title is required.</p>}
                </div>

                <div className="form-group">
                    <input {...register("price", {required: true})} placeholder="Price" className="form-control"/>
                    {errors.price && <p className="text-danger">Price is required.</p>}
                </div>

                <div className="form-group">
                    <input {...register("description", { required: true })} placeholder="Description" className="form-control"/>
                    {errors.description && <p className="text-danger">Description is required.</p>}
                </div>

                <div className="form-group">
                    <input {...register("category", { required: true })} placeholder="Category" className="form-control"/>
                    {errors.category && <p className="text-danger">Category is required.</p>}
                </div>

                <div className="form-group">
                    <input {...register("image", { required: true })} placeholder="Image Url" className="form-control"/>
                    {errors.image && <p className="text-danger">Image is required.</p>}
                </div>

                <div className="form-group">
                    <input {...register("rating", {required: true})} placeholder="Rating" className="form-control"/>
                    {errors.rating && <p className="text-danger">Rating is required.</p>}
                </div>

                <div className="form-group">
                    <input {...register("count", {required: true})} placeholder="Count" className="form-control"/>
                    {errors.count && <p className="text-danger">Count is required.</p>}
                </div>
                
                <button type="button" className = "btn btn-secondary" variant="light"> Return</button>

                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>

        <div>
            <h3>Delete one Product by Id:</h3>
            <input type="text" id="message" name="message" placeholder="id" onChange={(e) => getOneProduct(e.target.value)} />
            {viewer2 && showOneItemToDelete}
        </div>
    </div>
    ); // return end
} // App end

export default App;
