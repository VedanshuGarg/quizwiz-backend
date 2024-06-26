const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "vedanshugarg",
            password: "vg12345",
            emailId: "vg@gmail.com",
        },
        {
            id: uuid(),
            username: "ashishjain",
            password: "aj12345",
            emailId: "aj@gmail.com",
        },
    ]
}

module.exports = userdata;