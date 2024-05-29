import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// export default function handleProfileSignup(firstName, lastName, fileName) {
//   return Promise.allSettled([
//     signUpUser(firstName, lastName),
//     uploadPhoto(fileName),
//   ])
//     .then((results) => results.map((result) => ({
//       status: result.status,
//       value: result.reason || result.value,
//     })))
//     .catch((err) => ({ status: 'rejected', value: err }));
// }

// export default async function handleProfileSignup(
//   firstName,
//   lastName,
//   fileName,
// ) {
//   const userPromise = signUpUser(firstName, lastName)
//     .then((value) => ({
//       status: 'fulfilled',
//       value,
//     }))
//     .catch((error) => ({
//       status: 'rejected',
//       value: error,
//     }));
//
//   const photoPromise = uploadPhoto(fileName)
//     .then((value) => ({
//       status: 'fulfilled',
//       value,
//     }))
//     .catch((error) => ({
//       status: 'rejected',
//       value: error,
//     }));
//
//   return Promise.all([userPromise, photoPromise]);
// }

// export default async function handleProfileSignup(
//   firstName,
//   lastName,
//   fileName,
// ) {
//   const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
//
//   const results = await Promise.allSettled(promises);
//
//   return results.map((result) => ({
//     status: result.status,
//     value: result.status === 'fulfilled' ? result.value : result.reason,
//   }));
// }

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  try {
    const [user, error] = await Promise.all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    return [
      { status: 'fulfilled', value: user },
      {
        status: error ? 'rejected' : 'fulfilled',
        value: error || 'Photo upload successful',
      },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error },
      { status: 'rejected', value: 'Photo upload failed' },
    ];
  }
}
