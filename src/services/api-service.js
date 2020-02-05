import config from "../config";

const ApiService = {
  getAllIdeas() {
    const ideasUrl = config.API_ENDPOINT + "/api/ideas";

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    };

    return fetch(ideasUrl, options)
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
  getAllComments() {},
  getAllUsers() {
    const usersUrl = config.API_ENDPOINT + "/api/users";

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    };

    return fetch(usersUrl, options)
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
  getComment() {},
  postComment() {},
  postIdea() {}
  // editComment(commentId) {
  //   const options = {
  //     method: "PATCH",
  //     body: JSON.stringify({ votes: votes }),
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: `Bearer ${config.API_TOKEN}`
  //     }
  //   };

  //   fetch(config.API_ENDPOINT + `/api/comments/${commentId}`, options)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(
  //           "There has been a error while editing the comment vote"
  //         );
  //       } else {
  //         return response.json();
  //       }
  //     })
  //     .then(data => {
  //       this.setState({
  //         comment
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
};

export default ApiService;
