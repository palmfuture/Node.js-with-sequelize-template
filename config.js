module.exports = class Config {

    constructor(env) {
        this.env = env;
        /**
        * This for production
        * @param  {String} address Host database address
        * @param  {Number} port Host database port
        * @param  {String} username Host database username
        * @param  {String} password Host database password
        * @param  {String} database Host database name
        */
        this.address = 'localhost';
        this.port = 3000;
        this.username = 'root';
        this.password = 'password';
        this.database = 'database';
    }

    getAddress() {
        /**
         * Get database host address
         */
        if (this.env === 'production') return this.address;
        else return 'localhost';
    }

    getPort() {
        /**
         * Get port 
         */
        if (this.env === 'production') return this.port;
        else return 3000;
    }

    getUsername() {
        /**
         * Get username
         */
        if (this.env === 'production') return this.username;
        else return 'root';
    }

    getPassword() {
        /**
         * Get password 
         */
        if (this.env === 'production') return this.username;
        else return 'password';
    }

    getDatabase() {
        /**
         * Get database name
         */
        if (this.env === 'production') return this.database;
        else return 'table';
    }
}