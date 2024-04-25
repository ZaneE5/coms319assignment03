I installed express, cors, body-parser, bootstrap, and nodemon in the backend, and bootstrap in the frontend. I don't think I needed to install all that in the backend, but I hadn't made the front/backend files when I installed them all so I just moved the package.json to the backend folder with all the installs in it. Many of the unused functions in appfrontend.js are from by activity 15, and serve as a framework to work off of. The rest is using activity 16 as a framework. I imported a 'fakestore_catalog' collection in a 'reactdata' database in MongoDB. To test, run 'nodemon index.js' in the backend, and run 'npm start' in the fronted. This will get the server listening, and the react app running. The current implementation has the get all and get one done cleanly, and it still needs to:

    - Have a create view with an input (w/ validation probably )form to create a catalog item
        - data is {id: , title: , price: , description: , category: , image: , rating: {rate: , count: }}

    - Have an update view with one product to modify and a price input box to modify the item's price to
        - first enter product id, show full product information of that product, enter new price in input field, confirm button, execute modification

    - Have a delete view which includes one product to delete (I foresee issues with this because deleting off of id in mongo was weird for me last activity)
        - enter product id, show full product information of that product, confirm, execute deletion

    - Add student information view
        - complete correct names, email
        - course number, course name, date, professor name, brief paragraph of 2-3 lines introducing project

    - Backend app.post, app.put, and app.delete might/will need to be modified once those frontend methods are implemented and tested.

    - And the big one: get boostrap all up in here and make it look pretty with view swapping and probably a nav-bar