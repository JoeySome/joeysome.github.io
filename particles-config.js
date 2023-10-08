particlesJS("particles-js", {
    particles: {
        number: {
            value: 27, // 粒子数量
            density: {
                enable: true,
                value_area: 700
            }
        },
        color: {
            value: "#ffe512" // 粒子颜色
        },
        shape: {
            type: "star", // 粒子形状
            stroke: {
                width: 5,
                color: "#ebded5"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 1, // 粒子透明度
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.5,
                sync: false
            }
        },
        size: {
            value: 10, // 粒子大小
            random: true,
            anim: {
                enable: false,
                speed: 30,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 15, // 粒子之间连接线的距离
            color: "#ffe413", // 连接线颜色
            opacity: 1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5, // 粒子移动速度
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "repulse"
            },
            onclick: {
                enable: false,
                mode: "push"
            },
            resize: false
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
