var ViewModel = function() {
    self = this;
    self.clickCount = ko.observable(0);
    self.name = ko.observable('Tabby');
    self.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    self.imgAttribution = ko.observable('https://www.flickr.com/photos');
    self.incrementCounter = function() {
        self.clickCount(self.clickCount() + 1);
    };

    self.level = ko.computed(function() {
        if (self.clickCount() < 15) {
            return "newborn";
        } else if (self.clickCount() < 30) {
            return "baby";
        } else if (self.clickCount() < 45) {
            return "child";
        } else if (self.clickCount() < 60) {
            return "teen";
        } else if (self.clickCount() < 85) {
            return "adult";
        } else if (self.clickCount() < 100) {
            return "middle aged";
        } else if (self.clickCount() >= 100) {
            return "senior citizen";
        }
    }, self);

}

ko.applyBindings(new ViewModel());