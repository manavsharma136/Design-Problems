"use strict";
class tag {
    constructor(name) {
        this.id = tag.idCounter++;
        this.name = name;
    }
}
tag.idCounter = 1;
