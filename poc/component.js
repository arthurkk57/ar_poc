AFRAME.registerComponent('spawn-flowers', {
    init: function () {
        const self = this;
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
            // Add a click event listener to the flower.
            flower.el.addEventListener('click', function () {
                alert("clicked");
                // Increment the score by 1.
                const score = document.querySelector('#score');
                const currentScore = parseInt(score.getAttribute('text').value.split(' ')[1]);
                // score.setAttribute('value', 'Score: ' + (currentScore + 1));
                score.setAttribute('text', 'value: Score: 9999; color: #F0F0F0');
                // Remove the flower entity.
                this.parentNode.removeChild(this);
            });
            // Add the flower to the gameplay entity.
            document.querySelector('#gameplay').appendChild(flower);
        }, 100);
    },
    remove: function () {
        clearInterval(this.interval);
    }
});