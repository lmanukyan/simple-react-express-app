const userResponse = (user) => {
  return {
    id: user.id,
    name: user.name,
    birthdate: user.birthdate,
    avatar: user.avatar,
  };
};

module.exports = userResponse;
