import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  try {
    const user = await signUpUser(firstName, lastName);

    await uploadPhoto(fileName);

    return [
      { status: 'fulfilled', value: user },
      { status: 'fulfilled', value: `Photo ${fileName} uploaded successfully` },
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error }];
  }
}
