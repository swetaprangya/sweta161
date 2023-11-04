AFRAME.registerComponent("bowling", {
    init: function () {
      this.bowling();
    },
    bowling: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var ball = document.createElement("a-entity");
  
          ball.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
          });
  
          ball.setAttribute("material", "color", "black");
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          ball.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          ball.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
  
          scene.appendChild(ball);
        }
      });
    },
  });
  
  