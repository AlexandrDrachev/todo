

export default class ApiService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  getResource = async (url) => {
    const res = await fetch(`${this.baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getUsersApi = async () => {
    return await this.getResource(`/users`)
      .then(res => res.map(this.transformUser));
  };

  transformUser = (user) => {
    return {
      userId: user.id,
      userName: user.name
    };
  };

  getUsersAvatarsApi = async () => {
    return await this.getResource(`/photos`)
      .then(res => res.map(this.transformAvatar).slice(0, 10));
  };

  transformAvatar = (avatar) => {
    return {
      avatarId: avatar.id,
      avatarUrl: avatar.thumbnailUrl
    };
  };

  getTransformUsers = async () => {

    const users = await this.getUsersApi()
      .then(res => res);
    const avatars = await this.getUsersAvatarsApi()
      .then(res => res);

    const usersData = users.map((user) => {
      const userAvatar = avatars.find((avatar) => avatar.avatarId === user.userId);
      user.userAvatar = userAvatar.avatarUrl;
      return user;
    });
      return usersData;
  };

}
