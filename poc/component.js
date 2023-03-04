AFRAME.registerComponent('spawn-flowers', {
    init: function () {
        console.log('## Version 36');
        const self = this;
        fetch('assets/position/floorPic.json').then(response => {
            return response.json();
        }).then(floorPic => {
            // Work with JSON data here
            console.log(floorPic);
            var floorGap = -50;
            const flowerGap = 3;
            var index = 0;
            self.interval = setInterval(() => {
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
                    y = y - 0.25;
                    flowerModel.setAttribute('position', x + ' ' + y + ' ' + z);
                }, 50);
                flowerModel.setAttribute('position', x + ' ' + y + ' ' + z);
                flowerModel.setAttribute('scale', '0.8 0.8 0.8');
                flowerModel.setAttribute('material', 'opacity:1');
                flowerModel.setAttribute('rotation', '0 0 0');
                flowerModel.setAttribute('animation__rotate', "property: rotation; to: 0 360 0; loop: true; dur: 5000");
                document.querySelector('a-scene').appendChild(flowerModel);
                index = index + 1;
            }, 300);
        }).catch(err => {
            // Do something for an error here
        });
    },
    remove: function () {
        clearInterval(this.interval);
    }
});

// function handleButtonClick() {
//     html2canvas(document.body).then(function (canvas) {
//         var imageData = canvas.toDataURL('image/png');
//         // 在这里，你可以将 imageData 用于显示或上传到服务器
//         document.body.appendChild(imageData);
//     });
// }