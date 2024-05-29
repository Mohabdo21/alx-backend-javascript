import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
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
            : userResult.reason.message,
      },
      {
        status: photoResult.status,
        value:
          photoResult.status === 'fulfilled'
            ? photoResult.value
            : photoResult.reason.message,
      },
    ];

    return resultArray;
  } catch (error) {
    console.error('Error in handleProfileSignup:', error);
    throw error;
  }
}

export default handleProfileSignup;
