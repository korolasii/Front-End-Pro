const API_URL = 'http://localhost:3000/users';



export async function getData() {
  const response = await fetch(API_URL);
  return response.ok ? response.json() : [];
}

export async function getUserById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.ok ? response.json() : null;
}

export async function updateUser(user) {
  await fetch(`${API_URL}/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
}

export async function addUser(user) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log(response)
  return response.ok ? response.json() : null;
}

export async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}