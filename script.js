  'use strict';

  let money = prompt("Ваш бюджет на месяц ?"); //запрашивает у пользователя бюджет в месяц
  let time = prompt("Введите дату в формате YYYY-MM-DD"); // запрашивает у пасетителя 
  let costs = +prompt("Введите обязательную статью расходов в этом месяце"); //запрашивает у пользователя ввести статью расходов
  let costs_1 = +prompt("Введите обязательную статью расходов в этом месяце"); //запрашивает у пользователя ввести статью расходов
  let spending = prompt("Во сколько обойдется"); // запрашивает у пользователя во сколько обойдётся
  let spending_1 = prompt("Во сколько обойдется"); // запрашивает у пользователя во сколько обойдётся

  let appData = { // обьект который  хранит запрашиваемые данные у пользователя
    Money: money, // 3.1 хранит свойства запрашиваемые бюджета
    timeData: time, //3.2 хранит свойства запрашиваемые в даты 
    expenses: // 3.3  статьи расхода : во сколько обойдётся
    {  costs: spending },
    optionalExpenses: {savingss:true },  //3.4 пункт  
    income: [], //3.5 пуникт пустой массив(дополнительные расходы)
    savings: false //3.6 пункт

  };




  console.log(appData.Money); //3.1 выводит бюджет сколько вел пользователь , в консоль показано
  console.log(appData.timeData); //3.2 выводит время какое вел пользователь , в консоли показано
  console.log(appData.expenses); //3.3 выводит что вел встатью расходов за месяц : во сколько всё обойдётся
  console.log(appData.optionalExpenses); // 3.4 выводит бюджет сколько вел пользователь в консоль 
  console.log(appData.income); //3.5 выводит массив для дополнительных расходов
  console.log(appData.optionalExpenses.savingss); //3.6 выводит массив для дополнительных расходов
  //---------------------------------------------------- выводим что получилось  ------------------------------------
  alert("Вот столько я должен зарабатывать в день - " + spending / 30);