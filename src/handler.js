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


// show all notes

const getAllNotesHandler = () => ({
  status: 'success',
  data : {
    notes,
  }
});


// get detail notes
const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const note = notes.filter((n)=> n.id === id)[0];

  //   Pastikan terlebih dahulu bahwa nilai note tidak undefine

  if (note !== undefined){
    return {
      status: 'success',
      data : {
        note,
      }
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });

  response.code(404);
  return response;
};

// edit note
const editNoteByHandler = (request, h) => {
  // mendapatkan id catatan yang ingin diedit
  const { id } = request.params;

  // mendapatkan data notes terbaru yang dikirimkan oleh client melalui body request
  const { title, tags, body } = request.payload;

  // Memperbarharui nilai properti updatedAt
  const updatedAt = new Date().toISOString();

  // mendapatkan index array dari id notes yang ingin diubah
  const index = notes.findIndex((note) => note.id === id);

  // bila tidak ditemukan index akan bernilai '-1'
  if (index !== -1){
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbaharui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbaharui catatn Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByHandler,
};