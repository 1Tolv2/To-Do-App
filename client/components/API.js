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
  return await res.json();
};

export { registerUser, logInUser };
