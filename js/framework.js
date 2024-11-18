var geometry;
(function (geometry) {
    var particle = /** @class */ (function () {
        function particle(context) {
            this.alpha = Math.random(); // every circle will have its own alpha own opacity
            this.context = context;
            this.vx = 10 * Math.random();
            this.vy = 5;
            this.color = "white";
            this.radius = 2 * Math.random();
            this.x = Math.random() * 1600 + 20;
            this.y = Math.random() * 400 + 40;
            if (this.y + this.radius >= 440) {
                this.y = this.y - this.radius;
            }
            if (this.y - this.radius < 40) {
                this.y += this.radius;
            }
            this.yconst = this.y;
        }
        particle.prototype.draw = function () {
            this.update();
            this.context.save();
            this.context.beginPath();
            this.context.globalAlpha = this.alpha;
            this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.strokeStyle = this.color;
            this.context.lineWidth = 1;
            this.context.stroke();
            this.context.restore();
        };
        particle.prototype.update = function () {
            if (this.x > 1620) {
                this.x = 0;
            }
            this.x += this.vx;
        };
        return particle;
    }());
    geometry.particle = particle;
    var text = /** @class */ (function () {
        function text(context) {
            this.context = context;
            this.text = "Mrinal J'te Aime";
            this.font = "80px Arial";
            this.color = 'red';
        }
        text.prototype.show_words = function () {
            this.context.save();
            this.context.font = this.font;
            this.context.fillStyle = this.color;
            this.context.fillText(this.text, 550, 250);
            this.context.restore();
        };
        return text;
    }());
    geometry.text = text;
})(geometry || (geometry = {}));
//# sourceMappingURL=framework.js.map