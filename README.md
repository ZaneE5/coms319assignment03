I installed express, cors, body-parser, bootstrap, and nodemon in the backend, and bootstrap in the frontend. I don't think I needed to install all that in the backend, but I hadn't made the front/backend files when I installed them all so I just moved the package.json to the backend folder with all the installs in it. Many of the unused functions in appfrontend.js are from by activity 15, and serve as a framework to work off of. The rest is using activity 16 as a framework. I imported a 'fakestore_catalog' collection in a 'reactdata' database in MongoDB. To test, run 'nodemon index.js' in the backend, and run 'npm start' in the fronted. This will get the server listening, and the react app running. The current implementation has all the backend methods and frontend methods for data modification/deletion/addition/getting and it still needs to:

    - Add student information view
        - complete correct names, email
        - course number, course name, date, professor name, brief paragraph of 2-3 lines introducing project

    - And the big one: get boostrap all up in here and make it look pretty with view swapping and probably a nav-bar