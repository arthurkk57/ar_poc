AFRAME.registerComponent('spawn-flowers', {
    init: function () {
        console.log('## Version 43');
        const self = this;

        const fallSpeed = 0.2;
        const fallFrequency = 20;
        const r = 50;
        const ceiling = 50;
        const floor = -50;
        const pplR = 10;
/*
        // Ramdom Flower
        self.interval = setInterval(() => {
            var flowerModel = document.createElement('a-entity');
            const modelId = Math.floor(Math.random() * 4) + 1;
            flowerModel.setAttribute('gltf-model', '#flower-' + modelId);
            const id = Math.random().toString(36).substring(7);
            flowerModel.setAttribute('id', id);

            const y = ceiling;
            var x = Math.random() * 2 * r - r;
            var z = Math.random() * 2 * r - r;
            while (x * x + z * z > r * r || x * x + z * z < pplR * pplR) {
                x = Math.random() * 2 * r - r;
                z = Math.random() * 2 * r - r;
            }
            var temp = setInterval(() => {
                if (y <= -floor) {
                    flowerModel.parentNode.removeChild(flowerModel);
                    clearInterval(temp);
                    return;
                }
                y = y - fallSpeed;
                flowerModel.setAttribute('position', x + ' ' + y + ' ' + z);
            }, fallFrequency);
            flowerModel.setAttribute('position', x + ' ' + y + ' ' + z);
            flowerModel.setAttribute('scale', '1 1 1');
            // flowerModel.setAttribute('material', 'opacity:1');
            flowerModel.setAttribute('rotation', '0 0 0');
            flowerModel.setAttribute('animation__rotate', "property: rotation; to: 0 360 0; loop: true; dur: 5000");
            document.querySelector('a-scene').appendChild(flowerModel);
        }, 100);
*/
        // Floor Pic
        fetch('assets/position/floorPic.json').then(response => {
            return response.json();
        }).then(floorPic => {
            // Work with JSON data here
            // console.log(floorPic);
            var floorGap = -50;
            const flowerGap = 3;
            var index = 0;
            self.interval2 = setInterval(() => {
                if (index >= floorPic.length) {
                    return;
                }
                var flowPosition = floorPic[index];
                const gap = 20;
                var flowerModel = document.createElement('a-entity');
                const modelId = Math.floor(Math.random() * 4) + 1;
                flowerModel.setAttribute('gltf-model', '#flower-' + modelId);

                const id = Math.random().toString(36).substring(7);
                flowerModel.setAttribute('id', id);
                var x = flowPosition.x * flowerGap;
                var y = -floorGap;
                var z = flowPosition.z * flowerGap - gap;
                var temp = setInterval(() => {
                    if (y <= floorGap) {
                        clearInterval(temp);
                        return;
                    }
                    y = y - fallSpeed;
                    flowerModel.setAttribute('position', x + ' ' + y + ' ' + z);
                }, fallFrequency);
                flowerModel.setAttribute('position', x + ' ' + y + ' ' + z);
                flowerModel.setAttribute('scale', '1 1 1');
                // flowerModel.setAttribute('material', 'opacity:1');
                flowerModel.setAttribute('rotation', '0 0 0');
                flowerModel.setAttribute('animation__rotate', "property: rotation; to: 0 360 0; loop: true; dur: 5000");
                document.querySelector('a-scene').appendChild(flowerModel);
                index = index + 1;
            }, 300);
        }).catch(err => {
            // Do something for an error here
        });

        // Background Pic
        setTimeout(() => {
            clearInterval(this.interval);
            clearInterval(this.interval2);
            fetch('assets/position/backgroundPic.json').then(response => {
                return response.json();
            }).then(bgPic => {
                // console.log("backgroundPic");
                // console.log(bgPic);
                const frontGap = 150;
                const upGap = 50;
                const budGap = 3;
                var index = 0;
                for (var index = 0; index < bgPic.length; index++) {
                    var pos = bgPic[index];
                    var x = pos.x * budGap;
                    var y = pos.y * budGap + upGap;
                    var z = -frontGap;

                    var budModel = document.createElement('a-entity');
                    budModel.setAttribute('gltf-model', '#bud-1');
                    budModel.setAttribute('position', x + ' ' + y + ' ' + z);
                    budModel.setAttribute('scale', '1 1 1');
                    // budModel.setAttribute('material', 'opacity:1');
                    budModel.setAttribute('rotation', '0 0 0');
                    budModel.setAttribute('animation__rotate', "property: rotation; to: 0 360 0; loop: true; dur: 5000");
                    document.querySelector('a-scene').appendChild(budModel);
                }
            }).catch(err => {
                // Do something for an error here
            });
        }, 5000);
    },
    remove: function () {
        clearInterval(this.interval);
        clearInterval(this.interval2);
    }
});

// function handleButtonClick() {
//     html2canvas(document.body).then(function (canvas) {
//         var imageData = canvas.toDataURL('image/png');
//         // 在这里，你可以将 imageData 用于显示或上传到服务器
//         document.body.appendChild(imageData);
//     });
// }