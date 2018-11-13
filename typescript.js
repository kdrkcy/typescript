var pets;
(function (pets) {
    pets[pets["cat"] = 1] = "cat";
    pets[pets["dog"] = 2] = "dog";
})(pets || (pets = {}));
var pet1 = 'cat';
var pet2 = 'dog';
var animal = /** @class */ (function () {
    function animal(thename) {
        this.name = thename;
    }
    animal.prototype.old = function (age) {
        console.log("its a " + pet1 + "his name is" + this.name + "  he is " + age + "year old");
    };
    return animal;
}());
var myanimal = new animal("Dave");
myanimal.old("six");
function getapet(petoptions) {
    return "its a " + pet1 + "his name is" + this.name + "  he is " + age + "year old";
}
getapet({
    pet1: pets.cat,
    pet2: pets.dog
});
