//mock api
const api = {
  getData: function () {
    return {
      data: {
        plan: 1000,
        used: 815,
      },
    };
  },
};

const storageUsedElement = document.querySelector(".storage__used");
const progressBarElement = document.querySelector(".storage__progress");
const storageLeftElement = document.querySelector(".storage__popup-quantity");
const totalStorageElement = document.querySelector(".storage__quantity--end");

function setupView() {
  const { data } = api.getData();

  storageUsedElement.textContent = data.used;
  storageLeftElement.textContent = data.plan - data.used;
  totalStorageElement.textContent = data.plan;
  progressBarElement.style.width = `${(data.used / data.plan) * 100}%`;
}

setupView();
