var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'http://lorempixel.com/640/480/cats/9',
        nicknames: ['Mr. Kitty', 'Fluffikins', 'Scooot']
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'http://lorempixel.com/640/480/cats/10',
        nicknames: ['Muffin', 'Mr. Poops', 'Loafy']
    },
    {
        clickCount: 0,
        name: 'George',
        imgSrc: 'http://lorempixel.com/640/480/cats/8',
        nicknames: ['Snacky', 'Alexandar the Great', 'Potato']
    },
    {
        clickCount: 0,
        name: 'Scrappy',
        imgSrc: 'http://lorempixel.com/640/480/cats/7',
        nicknames: ['Poot', 'Marshmallow', 'Weirdo']
    },
    {
        clickCount: 0,
        name: 'Fuzz',
        imgSrc: 'http://lorempixel.com/640/480/cats/5',
        nicknames: ['Scruffy', 'Munchkin', 'Buzz']
    }
];


var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.level = ko.computed(function() {
        var level;
        var clicks = this.clickCount();
        if (clicks < 15) {
            level = "newborn";
        } else if (clicks < 30) {
            level = "baby";
        } else if (clicks < 45) {
            level = "child";
        } else if (clicks < 60) {
            level = "teen";
        } else if (clicks < 85) {
            level = "adult";
        } else if (clicks < 100) {
            level = "middle aged";
        } else if (clicks < 115) {
            level = "senior citizen";
        } else {
            level = "ninja";
        }
        return level;
    }, this);
}


var ViewModel = function() {
    var self = this;

    self.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    });

    self.currentCat = ko.observable( self.catList()[0] );

    self.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    self.setCurrentCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
};

ko.applyBindings(new ViewModel());