import config from "../config";

const ApiService = {
  getAllIdeas() {
    return fetch(config.API_ENDPOINT + "/api/ideas", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch ideas");
        } else {
          return response.json();
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  getAllComments() {
    return fetch(config.API_ENDPOINT + `/api/comments`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("An error is preventing fetching comments");
        } else {
          return response.json();
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  getAllUsers() {
    return fetch(config.API_ENDPOINT + "/api/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        } else {
          return response.json();
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  getIdea(id) {
    return fetch(config.API_ENDPOINT + `/api/ideas/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch idea`);
        } else {
          return response.json();
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  getUser(id) {
    return fetch(config.API_ENDPOINT + `/api/users/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `There has been a network failure trying to fetch users`
          );
        } else {
          return response.json();
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  postComment() {},
  postIdea() {}
  // editComment(commentId, fieldToUpdate) {
  //   const options = {
  //     method: "PATCH",
  //     body: JSON.stringify({ fieldToUpdate }),
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: `Bearer ${config.API_TOKEN}`
  //     }
  //   };

  //   return fetch(config.API_ENDPOINT + `/api/comments/${commentId}`, options)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(
  //           "There has been a error while editing the comment vote"
  //         );
  //       } else {
  //         return response.json();
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
};

export default ApiService;
