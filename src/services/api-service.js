import config from "../config";
import TokenServices from "./token-service";

const ApiService = {
  getAllIdeas() {
    return fetch(config.API_ENDPOINT + "/api/ideas", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `basic ${config.API_TOKEN}`
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
  getAllIdeaVotes() {
    return fetch(config.API_ENDPOINT + "/api/idea/vote", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `basic ${config.API_TOKEN}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch idea votes");
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
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
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
  getAllCommentVotes() {
    return fetch(config.API_ENDPOINT + `/api/comment/vote`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("An error is preventing fetching comment votes");
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
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
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
  getComment(id) {
    return fetch(config.API_ENDPOINT + `/api/comments/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
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
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
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
    return fetch(config.API_ENDPOINT + "/api/comments", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
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
  postCommentVote(newVote) {
    return fetch(config.API_ENDPOINT + "/api/comment/vote", {
      method: "POST",
      body: JSON.stringify(newVote),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("There has been a problem posting the comment vote");
        } else {
          return response.json();
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  postIdea(newIdea) {
    return fetch(config.API_ENDPOINT + "/api/ideas", {
      method: "POST",
      body: JSON.stringify(newIdea),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
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
  postIdeaVote(newVote) {
    return fetch(config.API_ENDPOINT + "/api/idea/vote", {
      method: "POST",
      body: JSON.stringify(newVote),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to post idea vote");
        } else {
          return response.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  patchProjectVote(vote, id) {
    return fetch(config.API_ENDPOINT + `/api/ideas/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ votes: vote }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("There was a problem editing idea");
        } else {
          return response.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  patchCommentVote(vote, id) {
    return fetch(config.API_ENDPOINT + `/api/comments/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ votes: vote }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(
            "There has been a error while editing the comment vote"
          );
        } else {
          return response.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default ApiService;
