import { redirect } from "react-router";

export function getTokenDuration() {
  const storedExpierationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpierationDate);
  const token = new Date();
  const duration = expirationDate.getTime() - token.getTime();
  return duration;
}

export function getAuthToken() {
    const token = localStorage.getItem('token');

    if (!token) {
      return null;
    }
    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) {
      return 'EXPIRED';
    }
    return token;
}


export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function checkAuthLoader() {
  // this function will be added in the next lecture
  // make sure it looks like this in the end
  const token = getAuthToken();
  
  if (!token) {
    return redirect('/auth');
  }
 
  return null; // this is missing in the next lecture video and should be added by you
}