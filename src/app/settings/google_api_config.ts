import { NgGapiClientConfig } from "ng-gapi";

export const gapiClientConfig: NgGapiClientConfig = {
  client_id: "103667611377-r0l72bpohlnq73g97cub2dg3bvjanru6.apps.googleusercontent.com",
  discoveryDocs: [""],
  ux_mode: "popup",
  scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/calendar.readonly"
  ].join(" ")
};
