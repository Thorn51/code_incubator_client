import config from "../config";
import TokenServices from "./token-service";

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
        Authorization: `basic ${TokenServices.getAuthToken()}`
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
        Authorization: `basic ${TokenServices.getAuthToken()}`
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
        Authorization: `basic ${TokenServices.getAuthToken()}`
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
  postComment(newComment) {
    const options = {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "content-type": "application/json",
        Authorization: `basic ${TokenServices.getAuthToken()}`
      }
    };

    return fetch(config.API_ENDPOINT + "/api/comments", options)
      .then(response => {
        if (!response.ok) {
          throw new Error("There has been a problem posting the comment");
        } else {
          return response.json();
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  postIdea(newIdea) {
    const options = {
      method: "POST",
      body: JSON.stringify(newIdea),
      headers: {
        "content-type": "application/json",
        Authorization: `basic ${TokenServices.getAuthToken()}`
      }
    };
    return fetch(config.API_ENDPOINT + "/api/ideas", options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to post idea");
        } else {
          return response.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  editComment() {}
};

export default ApiService;
