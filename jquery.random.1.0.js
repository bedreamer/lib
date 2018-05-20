/*
 url 操作库
 version: 1.0
* */
((typeof $) === 'function' ? function () {
    function Random() {
        this.alpha = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        this.number = "1234567890";
        this.symble = "`~!@#$%^&*()_+-=[]\{}|;':\",./<>?";
        this.alphabeta = this.alpha + this.number + this.symble;
    }

    // 随机一个浮点数
    Random.prototype.random = function () {
        return Math.random();
    };

    // 随机一个整数
    Random.prototype.randint = function () {
        return Math.floor(20000 * Math.random());
    };

    // 随机一个范围
    Random.prototype.randrange = function (min, max) {
        return Math.floor(min + Math.random() * ( max - min));
    };

    // 从给定的集合中随机选出一个
    Random.prototype.choice = function (set) {
        var idx = Math.floor(set.length * Math.random());
        return set[idx];
    };

    // 从给定的集合中随机选出一个
    Random.prototype.select = function (set, count) {
        var s = [];
        for ( var i = 0; i < count; i ++ ) {
            var idx = Math.floor(set.length * Math.random());
            s.push(set[idx]);
        }
        if ( typeof set === 'string' ) {
            return s.join("");
        }
        return s;
    };

    // 随机一个字符串
    Random.prototype.randomString = function (len) {
        if ( len === undefined ) {
            len = this.randrange(1, 100);
        }
        return this.select(this.alphabeta, len);
    };

    // 从给定集合中随机选择指定个数个元素
    $.random = new Random();
}(): (console.log("no jquery been found!")));
