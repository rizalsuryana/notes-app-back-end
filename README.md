# KRITERIA :

## Kriteria 1 - Web Server dapat menyimpan catatan
Kriteria pertama adalah web server dapat menyimpan catatan yang ditambahkan melalui aplikasi web. Tenang, untuk memenuhi kriteria ini Anda tidak perlu menggunakan database. Cukup simpan pada memory server dalam bentuk array JavaScript.

## Kriteria 2 - Web Server dapat menampilkan catatan
Kriteria selanjutnya adalah web server dapat menampilkan catatan. Kriteria ini mengharuskan web server untuk mengirimkan seluruh atau secara spesifik data notes yang disimpan.

Ketika client melakukan permintaan pada path ‘/notes’ dengan method ‘GET’, maka server harus mengembalikan status code 200 (ok) serta seluruh data notes dalam bentuk array menggunakan JSON.

## Kriteria 3 - Web Server dapat mengubah catatan
Kriteria ketiga adalah web server harus dapat mengubah catatan. Perubahan yang dimaksud bisa berupa judul, isi, ataupun tag catatan. Ketika client meminta perubahan catatan, ia akan membuat permintaan ke path ‘/notes/{id}’, menggunakan method ‘PUT’, serta membawa data JSON pada body request yang merupakan data catatan terbaru.

## Kriteria 4 - Web Server dapat menghapus catatan
Kriteria terakhir adalah web server harus bisa menghapus catatan. Untuk menghapus catatan, client akan membuat permintaan pada path ‘/notes/{id}’ dengan method ‘DELETE’. Ketika permintaan tersebut berhasil, maka server harus mengembalikan status code 200 (ok) serta data JSON