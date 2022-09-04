// mocking the reservation list
const ReserveCount = () => {
    const ReserveData = document.createElement('div')
     ReserveData.classList.add('allReserveData')
     const eachReserve = document.createElement('p');
     eachReserve.classList.add('eachReserve');
     eachReserve.innerText = `2022-10-09 - 2029-10-08 by Ademola`;
     ReserveData.appendChild(eachReserve);
const count = document.querySelectorAll('.eachReserve');
return count.length;
};
export default ReserveCount;

