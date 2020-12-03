export class User {

  access_token: string;
  id: string;
  name: string;
  email: string;
  lastname: string;
  profile_image: string;

  constructor(token: string, userInfo: gapi.auth2.BasicProfile){
    this.access_token = token;
    this.id = userInfo.getId();
    this.name = userInfo.getName();
    this.email = userInfo.getEmail();
    this.lastname = userInfo.getFamilyName();
    this.profile_image = userInfo.getImageUrl();
  }
}
