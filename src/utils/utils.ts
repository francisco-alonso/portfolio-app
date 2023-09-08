export const calculateAge = (birthdate: string): number => {
    const ageInMilliseconds = new Date().getTime() - new Date(birthdate).getTime();
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(ageInYears);
}