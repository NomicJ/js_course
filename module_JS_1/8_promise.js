function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const namesFromServer = "212dcwfwecwce";
      const usersArray = [
        { id: 1, name: "Иван" },
        { id: 2, name: "Екатерина" },
      ];
      if (Array.isArray(usersArray)) {
        resolve(usersArray);
      } else {
        reject("Что то пошло не так");
      }
    }, 2000);
  });
}

function getNames(users) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = users.map((user) => user.name);
      resolve(data);
    }, 2000);
  });
}
function updateData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const updateData = data.map((item) => item.toUpperCase());
      resolve(updateData);
    }, 2000);
  });
}

function dataProcessing() {
  fetchData()
    .then((data) => {
      console.log(data);
      return getNames(data);
    })
    .then((users) => {
      console.log(users);
      return updateData(users);
    })
    .then((updateData) => {
      console.log("Данные заглавными буквами:", updateData);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    })
    .finally(() => {
      console.log("Все промисы выполнены");
    });
}
dataProcessing();
