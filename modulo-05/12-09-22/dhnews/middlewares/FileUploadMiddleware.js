const path = require('path');

const multer = require('multer');
const slug = require('slug');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/img/uploads');
    },
    filename: (req, file, callback) => {
        const id = Date.now();
        const name = slug(`${id}-${file.fieldname}`);
        const extension = path.extname(file.originalname);
        callback(null, `${name}${extension}`);
    },
});

module.exports = multer({ storage });
