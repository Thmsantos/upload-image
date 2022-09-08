/* https://www.youtube.com/watch?v=SqbrovwhZ_o  13:19*/

const multer = require('multer');

const multerConfig = multer.diskStorage({
    destination:  (req, file, callback) => {
        callback(null, 'public/');
    },
    filename: (req,file,callback) => {
        const ext = file.mimetype.split('/')[1];
        callback(null, `image-${Date.now()}.${ext}`);
    }     
})

const isImage = (req,file,call) => {
    if(file.mimetype.starstWith('image')){
        callback(null, true);
    } else{
        callback(new Error('So essa imagem..'));
    }
};

const upload = multer({
    storage: multerConfig,
});

exports.uploadImage = upload.single('foto');

exports.upload = (req,res) => {

    console.log(req.file);

    res.status(200).json({
      success: 'Success',
    })
};