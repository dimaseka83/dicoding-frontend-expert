const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const folder = path.resolve(__dirname, 'src/public/images/heros');
const dist = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

fs.readdirSync(folder).forEach((file) => {
  if (file.includes('hero')) {
    sharp(`${folder}/${file}`)
      .resize(1200)
      .toFile(
        path.resolve(
          __dirname,
          `${dist}/${file.split('.').slice(0, -1).join('.')}-1200.jpg`,
        ),
      );

    sharp(`${folder}/${file}`)
      .resize(1000)
      .toFile(
        path.resolve(
          __dirname,
          `${dist}/${file.split('.').slice(0, -1).join('.')}-1000.jpg`,
        ),
      );

    sharp(`${folder}/${file}`)
      .resize(600)
      .toFile(
        path.resolve(
          __dirname,
          `${dist}/${file.split('.').slice(0, -1).join('.')}-600.jpg`,
        ),
      );

    sharp(`${folder}/${file}`)
      .resize(400)
      .toFile(
        path.resolve(
          __dirname,
          `${dist}/${file.split('.').slice(0, -1).join('.')}-400.jpg`,
        ),
      );
  } else {
    sharp(`${folder}/${file}`)
      .resize(400)
      .toFile(
        path.resolve(
          __dirname,
          `${dist}/${file.split('.').slice(0, -1).join('.')}-400.jpg`,
        ),
      );

    sharp(`${folder}/${file}`)
      .resize(300)
      .toFile(
        path.resolve(
          __dirname,
          `${dist}/${file.split('.').slice(0, -1).join('.')}-300.jpg`,
        ),
      );

    sharp(`${folder}/${file}`)
      .resize(200)
      .toFile(
        path.resolve(
          __dirname,
          `${dist}/${file.split('.').slice(0, -1).join('.')}-200.jpg`,
        ),
      );
  }
});
