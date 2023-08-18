export const getUserStatus = (isActive = false) => {
  const status = isActive ? "Active" : "Inactive";
  return status;
};
