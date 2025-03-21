const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload; //mendapatkan body request di hapi

  const id = nanoid(16); // nanodid menangani nilai id
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  //   memasukan nilai kedalam array notes dengan method push()
  const newNote = {
    title, tags, body, id, createdAt, updatedAt
  };
  notes.push(newNote);

  //   Menentukan apakah newNote sudah masuk kedalam array notes

  const isSuccess = notes.filter((note)=> note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    staus: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(500);
  return response;

};


module.exports = {
  addNoteHandler
};