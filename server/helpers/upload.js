const path = require("path");
const uuid = require("uuid").v4;

const UPLOADS_PATH = path.normalize(__dirname + "/../uploads");

const getUploadFileData = (filename) => {
  const uuidname = uuid() + path.extname(filename);
  return {
    avatarUrl: path.normalize(
      `/uploads/${uuidname}`
    ),
    avatarPath: path.normalize(
      `${UPLOADS_PATH}/${uuidname}`
    ),
  }
};

const getUploadedFilePath = (filePath) =>
  path.normalize(`${UPLOADS_PATH}/../${filePath}`);

module.exports = {
  getUploadFileData,
  getUploadedFilePath,
};
