// data/students-db.js

const students = [
  {name: 'John Smith',             email: 'jsmith@gmail.com',       id: '00000000001' },
  {name: 'Diane Sawyer',           email: 'dsawyer@gmail.com',      id: '00000000002' },
  {name: 'Mike Jones',             email: 'mjones@gmail.com',       id: '00000000003' },
  {name: 'Jane Doe',               email: 'jdoe@gmail.com',         id: '00000000004' },
  {name: 'Engelbert Humperdinck',  email: 'ehumperdinck@gmail.com', id: '00000000005' },
  {name: 'Rumple Stiltskin',       email: 'rstiltskin@gmail.com',   id: '00000000006' },
];

module.exports = {
  getAll: function() {
    return students;
  }
}