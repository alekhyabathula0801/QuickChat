export const getContactListViewData = (list = []) => {
  let activeContacts = [],
    archivedContacts = [];
  list.forEach((data) => {
    if (data.isArchived) {
      archivedContacts.push(data);
    } else {
      activeContacts.push(data);
    }
  });
  const data = [
    {
      isArchived: false,
      title: "Active Conversations",
      id: "active",
      contacts: activeContacts,
    },
    {
      isArchived: true,
      title: "Archived Conversations",
      id: "archived",
      contacts: archivedContacts,
    },
  ];
  return data;
};
