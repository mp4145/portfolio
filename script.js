const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(300, 300);
document.getElementById('cube').appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry();
const materials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
    new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
    new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Cyan
];

const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Project data
const projects = [
    {
        title: "Project 1",
        description: "Description for Project 1.",
        faceIndex: 0
    },
    {
        title: "Project 2",
        description: "Description for Project 2.",
        faceIndex: 1
    },
    {
        title: "Project 3",
        description: "Description for Project 3.",
        faceIndex: 2
    },
    {
        title: "Project 4",
        description: "Description for Project 4.",
        faceIndex: 3
    },
    {
        title: "Project 5",
        description: "Description for Project 5.",
        faceIndex: 4
    },
    {
        title: "Project 6",
        description: "Description for Project 6.",
        faceIndex: 5
    }
];

// Update project details on hover
cube.onmouseover = (event) => {
    const faceIndex = Math.floor(event.clientX / (window.innerWidth / 6));
    const project = projects[faceIndex];
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;
};
