### Install

1. Download NodeJS + NPM. silahkan kunjungi [link](https://nodejs.org/en) untuk download
2. Install NodeJS installer yang telah selesai download
3. Buka vscode, tambahkan project ini kedalam vscode (drag folder ke dalam vscode)
4. Jalankan perintah berikut:
```bash
// pertama
make dep

// kedua
make compile 
// atau
make serve-compile
```

5. Buka index.html pada folder `packages/browser/public`. Sebaliknya jika Anda menjalankan opsi kedua `make serve-compile`, silahkan buka alamat berikut di browser Anda `http://localhost:9191`


6. Jalankan webserver nya. 
```bash
make server-websocket
```

7. Selesai