"use strict";

//Calculator

{
    // function Calculator() {
    //     this.isOn = false;

    //     this.turnOn = function () {
    //         this.isOn = true;
    //         console.log('Калькулятор работает');
    //         this.startCalculation();
    //     };

    //     this.turnOff = function () {
    //         this.isOn = false;
    //         console.log('Калькулятор выключен');
    //     };

    //     this.startCalculation = function () {
    //         if (this.isOn) {
    //             const operation = prompt('Введите оператор (+, -, *, /):');
    //             if (this.isValidOperation(operation)) {
    //                 const num1 = parseFloat(prompt('Введите первое число:'));
    //                 const num2 = parseFloat(prompt('Введите второе число:'));

    //                 if (!isNaN(num1) && !isNaN(num2)) {
    //                     this.calculate(operation, num1, num2);
    //                 } else {
    //                     console.log('Ошибка');
    //                 }
    //             } else {
    //                 console.log('Ошибка, введите (+, -, *, /).');
    //             }
    //         } else {
    //             console.log('Калькулятор выключен');
    //         }
    //     };

    //     this.isValidOperation = function (operation) {
    //         const validOperations = ['+', '-', '*', '/'];
    //         return validOperations.includes(operation);
    //     };

    //     this.calculate = function (operation, num1, num2) {
    //         let result;
    //         switch (operation) {
    //             case '+':
    //                 result = num1 + num2;
    //                 break;
    //             case '-':
    //                 result = num1 - num2;
    //                 break;
    //             case '*':
    //                 result = num1 * num2;
    //                 break;
    //             case '/':
    //                 if (num2 !== 0) {
    //                     result = num1 / num2;
    //                 } else {
    //                     console.log('При делении числа на ноль получится бесконечность, повторите с другими числами');
    //                     return;
    //                 }
    //                 break;
    //             default:
    //                 console.log('Ошибка');
    //                 return;
    //         }

    //         console.log(`Результат вычисления: ${num1} ${operation} ${num2} is: ${result}`);
    //     };
    // }

    // const calculator = new Calculator();
    // calculator.turnOn();
}

//Lamp
{
    // function Lamp(power, costPerKWh) {
    //     this.power = power;
    //     this.costPerKWh = costPerKWh;
    //     this.isOn = false;
    //     this.burningTime = 0;
    
    //     this.turnOn = function () {
    //         if (!this.isOn) {
    //             this.isOn = true;
    //             console.log('Лампочка включена.');
    //         } else {
    //             console.log('Лампочка уже включена.');
    //         }
    //     };
    
    //     this.turnOff = function () {
    //         if (this.isOn) {
    //             this.isOn = false;
    //             console.log('Лампочка выключена.');
    //         } else {
    //             console.log('Лампочка уже выключена.');
    //         }
    //     };
    
    //     this.getBurnedEnergyCost = function () {
    //         const energyConsumed = this.burningTime * this.power / 60;
    //         const cost = energyConsumed * this.costPerKWh;
    //         return cost;
    //     };
    
    //     this.setCostPerKWh = function (newCost) {
    //         this.costPerKWh = newCost;
    //         console.log(`Новая стоимость электроэнергии: ${this.costPerKWh} BYN за кВтч`);
    //     };
    
    //     this.showStatus = function () {
    //         console.log(`Мощность: ${this.power} Вт`);
    //         console.log(`Текущее состояние: ${this.isOn ? 'включена' : 'выключена'}`);
    //         console.log(`Счетчик горения: ${this.burningTime} мин`);
    //         console.log(`Расход за горение: ${this.getBurnedEnergyCost()} BYN`);
    //     };
    // }
    
    // const lamp = new Lamp(60, 0.15);
    
    // console.log('Текущий статус лампочки');
    // lamp.showStatus();
    
    // lamp.turnOn();
    
    // console.log('Статус лампочки после включения');
    // lamp.showStatus();
    
    // console.log('Выключение');
    // lamp.turnOff();
    
    // console.log('Статус лампочки после выключения');
    // lamp.showStatus();
    
    // lamp.setCostPerKWh(0.12);
    
    // console.log('Текущий статус лампочки после изменения стоимости');
    // lamp.showStatus();
}

//Kettle
{
    // function Kettle(power, volume) {
    //     this.power = power;
    //     this.volume = volume;
    //     this.isOn = false;
    //     this.waterLevel = 0;
    
    //     this.turnOn = function () {
    //         if (!this.isOn) {
    //             this.isOn = true;
    //             console.log('Чайник включен.');
    //         } else {
    //             console.log('Чайник уже включен.');
    //         }
    //     };
    
    //     this.turnOff = function () {
    //         if (this.isOn) {
    //             this.isOn = false;
    //             console.log('Чайник выключен.');
    //         } else {
    //             console.log('Чайник уже выключен.');
    //         }
    //     };
    
    //     this.fillWater = function (amount) {
    //         if (!this.isOn) {
    //             this.waterLevel += amount;
    //             console.log(`Добавлено ${amount} мл воды. Текущий уровень воды: ${this.waterLevel} мл.`);
    //         } else {
    //             console.log('Нельзя добавлять воду, когда чайник включен.');
    //         }
    //     };
    
    //     this.boilWater = function () {
    //         if (this.isOn && this.waterLevel > 0) {
    //             const boilingTime = this.calculateBoilingTime();
    //             console.log(`Вода закипит через ${boilingTime} мин.`);
    //         } else {
    //             console.log('Чайник выключен или нет воды.');
    //         }
    //     };
    
    //     this.calculateBoilingTime = function () {
    //         const boilingTime = this.volume / (this.power / 1000);
    //         return boilingTime.toFixed(2);
    //     };
    
    //     this.showStatus = function () {
    //         console.log(`Мощность: ${this.power} Вт`);
    //         console.log(`Объем: ${this.volume} мл`);
    //         console.log(`Текущий уровень воды: ${this.waterLevel} мл`);
    //         console.log(`Состояние: ${this.isOn ? 'включен' : 'выключен'}`);
    //     };
    // }
    
    // const kettle = new Kettle(1500, 1000);
    
    // console.log('Текущий статус чайника');
    // kettle.showStatus();
    
    // kettle.turnOn();
    
    // console.log('Статус чайника после включения');
    // kettle.showStatus();
    
    // kettle.fillWater(500);
    
    // console.log('Статус чайника после добавления воды');
    // kettle.showStatus();
    
    // kettle.boilWater();
    
    // kettle.turnOff();
    
    // console.log('Статус чайника после выключения');
    // kettle.showStatus();    
}

//Contacts
{
    function Contacts() {
        this.contactsList = [];
    
        this.addContact = function () {
            const Name = prompt('Введите имя:');
            const age = parseInt(prompt('Введите возраст:'), 10);
            const phone = prompt('Введите телефон:');
            const email = prompt('Введите эл. почту:');
    
            if (this.validateContactInfo(Name, age, phone, email)) {
                const contact = {
                    Name: Name,
                    age: age,
                    phone: phone,
                    email: email
                };
    
                this.contactsList.push(contact);
                console.log('Контакт успешно добавлен.');
            } else {
                console.log('Неверная информация о контакте.');
            }
        };
    
        this.validateContactInfo = function (Name, age, phone, email) {
            return Number.isInteger(age) && age >= 18 &&
                typeof Name === 'string' &&
                typeof phone === 'string' &&
                typeof email === 'string';
        };
    
        this.displayContactInfo = function (index) {
            if (index >= 0 && index < this.contactsList.length) {
                console.log('Информация о контакте:');
                console.log(`Имя: ${this.contactsList[index].Name}`);
                console.log(`Возраст: ${this.contactsList[index].age}`);
                console.log(`Телефон: ${this.contactsList[index].phone}`);
                console.log(`Эл. почта: ${this.contactsList[index].email}`);
            } else {
                console.log('Неверный индекс контакта.');
            }
        };
    
        this.displayAllContacts = function () {
            console.log('Все контакты:');
            for (let i = 0; i < this.contactsList.length; i++) {
                console.log(`Контакт ${i + 1}: ${this.contactsList[i].Name}`);
            }
        };
    }
    
    const contactsBook = new Contacts();
    contactsBook.addContact();
    contactsBook.displayAllContacts();    
}