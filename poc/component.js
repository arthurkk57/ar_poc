AFRAME.registerComponent('spawn-flowers', {
    init: function () {
        const self = this;
        var scoreNum = 0;
        self.interval = setInterval(function () {
            // Create a new flower entity.
            const flower = document.createElement('a-entity');
            // flower.setObject3D('mesh', self.flowerModel.clone());
            flower.setAttribute('obj-model', "obj: url(cube.obj); mtl: url(cube.mtl)");
            // Set the flower's position to a random location.
            flower.setAttribute('position', {
                x: 2,// Math.random() * 6 - 3,
                y: 2,// Math.random() * 4 - 2,
                z: -25
            });
            flower.addEventListener('isPlaying', function () { console.log("isPlaying")} );
            flower.addEventListener('hasLoaded', function () { console.log("hasLoaded")} );
            // Add a click event listener to the flower.
            flower.addEventListener('click', function () {
                console.log("clicked");
                flower.setAttribute('position', {
                    x: -2,// Math.random() * 6 - 3,
                    y: -2,// Math.random() * 4 - 2,
                    z: -25
                });
                // Increment the score by 1.
                const score = document.querySelector('#score');
                const currentScore = parseInt(score.getAttribute('text').value.split(' ')[1]);
                // score.setAttribute('value', 'Score: ' + (currentScore + 1));
                score.setAttribute('text', 'value: Score: 9999; color: #F0F0F0');
                // Remove the flower entity.
                // this.parentNode.removeChild(this);
            });
            // Add the flower to the gameplay entity.
            document.querySelector('#gameplay').appendChild(flower);
        }, 100);
    },
    remove: function () {
        clearInterval(this.interval);
    }
});