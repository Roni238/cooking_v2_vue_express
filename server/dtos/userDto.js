module.exports = class userDto {
    email
    name
    isActivated
    role
    id

    constructor(model) {
        this.email = model.email;
        this.name = model.name;
        this.isActivated = model.isActivated;
        this.role = model.role;
        this.id = model._id;
    }
}