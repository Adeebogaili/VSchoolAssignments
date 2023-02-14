# Intro to Express 

    #Initialize a new node project

    - npm init -y
    -npm install <dependencies>

# Vocabulary
    # Route
        * An event listener for HTTP requests
    # Endpoint
        * "/item" "/user"
    # Port
        * localhost:9000/

# Nodemon
    * npm install -g nodemon
===============================================
# Intro to REST API architecture

# REST - Represesntation State Transfer 
    REST is a popular architecture that is used to create web services. API (Application Programming Interface) is a code that allows two software programs to commuinicate with each other. 
# Resource - Single item (object) in a database
    /user
# Collection - A collection of similar items in a database
    /users
# Base (root) URL - http://amazon.com/

# API Endpoint - http://amazon/movies/

# Paramerters - /movies/:movieId

# Query - (query string) - /movies?genre=action&year=1999

# Client = Frontend

# Server - Intermediary 

# Request Method - CRUD GET POST PUT DELETE
==========================================================
# Middleware - A function that fires on the inbetween

# Request Body (req.body) 

# UUID - Creates unique IDs
    * npm install uuid
==========================================================
# Exoress Router - Enables to modularize our routes in express

# Modular file organization
==========================================================
# URL Parameters

    # Parts of a URL
        * Base - http://amazon.com
        * Endpoint - http://amazon.com/images
        * Paramater - http://amazon.com/images/3241i23uy41oi2
        * Query
    # Parameters (req.rarams = GET one)
