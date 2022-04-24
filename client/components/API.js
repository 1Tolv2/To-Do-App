const PORT = 9000;
const APIURL = `http://localhost:${PORT}`;

const registerUser = async (payload) => {
  const res = await fetch(`${APIURL}/auth/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return await res.json();
};

const logInUser = async (payload) => {
  const res = await fetch(`${APIURL}/auth/api-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};

const fetchTasks = async () => {
  const token = localStorage.getItem("jwttoken");

  const res = await fetch(`${APIURL}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

const createTask = async (payload) => {
  const token = localStorage.getItem("jwttoken");
  const res = await fetch(`${APIURL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};

const logOutUser = async () => {
  const token = localStorage.getItem("jwttoken");

  const res = await fetch(`${APIURL}/auth/api-token`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

const fetchUser = async () => {
  const token = localStorage.getItem("jwttoken");
  const res = await fetch(`${APIURL}/users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};

const editUser = async (payload) => {
  const token = localStorage.getItem("jwttoken");
  const res = await fetch(`${APIURL}/users`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: payload,
  });
  const data = await res.json();
  return data;
};

const toggleTaskStatus = async (id) => {
  const token = localStorage.getItem("jwttoken");
  return await fetch(`${APIURL}/posts/${id}/status`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const fetchAllTags = async () => {
  const token = localStorage.getItem("jwttoken");
  const res = await fetch(`${APIURL}/tags`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};

const createTag = async (payload) => {
  const token = localStorage.getItem("jwttoken");
  console.log(payload);
  console.log(token);
  const res = await fetch(`${APIURL}/tags`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return res;
};

export {
  APIURL,
  registerUser,
  logInUser,
  fetchTasks,
  createTask,
  logOutUser,
  editUser,
  fetchUser,
  toggleTaskStatus,
  fetchAllTags,
  createTag,
};
