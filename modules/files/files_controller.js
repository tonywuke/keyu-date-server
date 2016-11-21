/**
 * Created by Tonywuke on 16/十一月/18.
 */
var multer = require('./files_util');


var upload = multer.single('file');

exports.dataInput = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            // 发生错误
            console.log(err);
            return
        }
        console.log(req);
        // 一切都好
    })
}
