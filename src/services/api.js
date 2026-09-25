if (!import.meta.env.VITE_API_URL) {
  console.error("Missing required environment variable: VITE_API_URL");
}
const BASE_URL = import.meta.env.API_URL || 'http://localhost:5000/api';

export const getMeetups = async () => {
  const response = await fetch(`${BASE_URL}/meetups`);
  if (!response.ok) throw new Error('Failed to fetch meetups');
  return response.json();
};

export const submitJoinRequest = async (data) => {
  const response = await fetch(`${BASE_URL}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || 'Failed to submit request');
  }
  return response.json();
};

export const getMoments = async () => {
  const response = await fetch(`${BASE_URL}/moments`);
  if (!response.ok) throw new Error('Failed to fetch moments');
  return response.json();
};

export const createMeetup = async (data) => {
  const response = await fetch(`${BASE_URL}/meetups`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Failed to create meetup');
  return response.json();
};

export const updateMeetup = async (id, data) => {
  const response = await fetch(`${BASE_URL}/meetups/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Failed to update meetup');
  return response.json();
};