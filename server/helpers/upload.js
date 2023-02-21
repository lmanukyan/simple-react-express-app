const path = require('path');

const UPLOADS_PATH = path.normalize(__dirname + '/../uploads');

const getUploadFileData = (reqFile) => ({
  avatarUrl: path.normalize(`/uploads/${reqFile.md5}${path.extname(reqFile.name)}`),
  avatarPath: path.normalize(`${UPLOADS_PATH}/${reqFile.md5}${path.extname(reqFile.name)}`),
});

const getUploadedFilePath = (filePath) => 
  path.normalize(`${UPLOADS_PATH}/../${filePath}`);

module.exports = {
  getUploadFileData,
  getUploadedFilePath
};
