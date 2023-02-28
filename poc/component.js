AFRAME.registerComponent('spawn-flowers', {
    init: function () {
        console.log('## Version 24');
        const self = this;

    //     var takePhotoButton = document.querySelector("#takePhotoBtn");
    //   takePhotoButton.addEventListener("click", function () {
    //     var canvas = document.querySelector("canvas");
    //     var dataURL = canvas.toDataURL("image/png");
    //     var link = document.createElement("a");
    //     link.download = "ar_poc_screenshot.png";
    //     link.href = dataURL;
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //   });

        self.interval = setInterval(() => {
            // const flower = document.querySelector('#flower');
            // flower.parentNode.removeChild(flower);

            var flowerModel = document.createElement('a-entity');
            const modelId = Math.floor(Math.random() * 4) + 1;
            flowerModel.setAttribute('gltf-model', '#flower-' + modelId);
            // console.log('modelId: ' + modelId);
            const id = Math.random().toString(36).substring(7);
            flowerModel.setAttribute('id', id);
            setTimeout(function () {
                const flower = document.getElementById(`${id}`); // 通过 ID 获取花的实体
                // console.log('getElementById: ' + id);
                if (flower) {
                    // console.log('removeChild: ' + id);
                    // flower.parentNode.removeChild(flower); // 移除花的实体
                }
            }, 5000);

            const r = 50;
            const y = Math.random() * 25;
            const x = Math.random() * 2 * r - r;
            const zPre = Math.random() < 0.5 ? -1 : 1;
            const z = zPre * (Math.sqrt(r * r - x * x));
            // console.log('X: ' + x + ' Y: ' + y + ' Z: ' + z);
            flowerModel.setAttribute('position', x + ' ' + y + ' ' + z);

            flowerModel.setAttribute('scale', '0.8 0.8 0.8');
            flowerModel.setAttribute('transparent', 'false');
            //   flowerModel.setAttribute('static-body', '');
            flowerModel.setAttribute('rotation', '0 0 0');
            flowerModel.setAttribute('animation__rotate', "property: rotation; to: 0 360 0; loop: true; dur: 5000");
            document.querySelector('a-scene').appendChild(flowerModel);
        }, 300);

        var index = 0;
        self.interval2 = setInterval(() => {
            const gap = 10;

        }, 300);
    },
    remove: function () {
        clearInterval(this.interval);
        // clearInterval(this.interval2);
    }
});

