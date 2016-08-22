module.exports = {
    name: 'postgres',
    image: 'postgres',
    type: 'service',
    ports: ["5432:5432"],
}