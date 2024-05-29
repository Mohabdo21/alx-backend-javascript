import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const [userResult, photoResult] = await Promise.allSettled([
    userPromise,
    photoPromise,
  ]);

  const resultArray = [
    {
      status: userResult.status,
      value:
        userResult.status === 'fulfilled'
          ? userResult.value
          : String(userResult.reason),
    },
    {
      status: photoResult.status,
      value:
        photoResult.status === 'fulfilled'
          ? photoResult.value
          : String(photoResult.reason),
    },
  ];

  return resultArray;
}

export default handleProfileSignup;
