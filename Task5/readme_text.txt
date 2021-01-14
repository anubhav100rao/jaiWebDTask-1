npm init
npm install express
npm install -D nodemon
npm run dev : {
    before running this command
    in package.json file add 
        in script:
            "start: "node index",
            "dev": "nodemon index"
    }