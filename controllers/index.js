class Controller {

    constructor() {
        this.app = null;
    }

    initialApp(app) {
        this.app = app;
    }

    initialController() {
        console.log('\x1b[31m', 'System:', '\x1b[37m', 'Initial Controller has been established successfully.');
    }
}

module.exports = new Controller();