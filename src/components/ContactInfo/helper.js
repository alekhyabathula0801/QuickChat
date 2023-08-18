export const getArchiveButtonText = (isArchived = false) => {
  const status = !isArchived ? "Archive" : "Unarchive";
  return status;
};
