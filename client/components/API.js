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

export { registerUser, logInUser, fetchTasks, createTask };
