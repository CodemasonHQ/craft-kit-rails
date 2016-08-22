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
}