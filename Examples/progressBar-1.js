// It's not pritty good because it renders the template before we are done fetching datafrom our API

/*import "nprogress/nprogress.css"; This is in main.js

All code below has written in EventService.js file
import NProgress from "nprogress";

apiClient.interceptors.request.use((config) => {
  //when request is about to go out, START the progress bar
  NProgress.start();
  return config;
});

apiClient.interceptors.response.use((response) => {
  //when response return, FINISH the progress bar
  NProgress.done();
  return response;
});*/
