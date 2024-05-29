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

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const userPromise = signUpUser(firstName, lastName)
    .then((value) => ({
      status: 'fulfilled',
      value,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: error,
    }));

  const photoPromise = uploadPhoto(fileName)
    .then((value) => ({
      status: 'fulfilled',
      value,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: error,
    }));

  return Promise.all([userPromise, photoPromise]);
}
