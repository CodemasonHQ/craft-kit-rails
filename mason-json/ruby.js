module.exports = {
    name: 'ruby', 
    image: 'ruby:2-onbuild',
    type: 'instance',
    volumes: {
        './':'/usr/src/app',
    },
    ports: [
        "3000:3000",
    ],
    command: "bin/rails server --port 3000 --binding 0.0.0.0"
}