AFRAME.registerComponent('spawn-flowers', {
    init: function () {
        const self = this;

        self.interval = setInterval(() => {
            const flower = document.querySelector('#flower');
            flower.parentNode.removeChild(flower);

            var flowerModel = document.createElement('a-entity');
            flowerModel.setAttribute('gltf-model', '#flower-glb');
            flowerModel.setAttribute('id', 'flower');
            const x = Math.floor(Math.random() * 50) - 25;
            const y = Math.floor(Math.random() * 25);
            const z = -25;//Math.floor(Math.random() * 50) - 25;
            // const y = Math.floor(Math.sqrt(25 * 25 - x * x - z * z));
            console.log('X: ' + x + ' Y: ' + y + ' Z: ' + z);
            flowerModel.setAttribute('position', x + ' ' + y + ' ' + z);
            flowerModel.setAttribute('scale', '0.5 0.5 0.5');
            //   flowerModel.setAttribute('static-body', '');
            flowerModel.setAttribute('rotation', '0 0 0');
            flowerModel.setAttribute('animation__rotate', "property: rotation; to: 0 360 0; loop: true; dur: 5000");
            document.querySelector('a-scene').appendChild(flowerModel);
        }, 1000);
        /*
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
                */
    },
    remove: function () {
        clearInterval(this.interval);
    }
});
