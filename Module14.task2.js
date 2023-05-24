// Вариант 1.

const jsonString = `{
    "list": [
      {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
      },
      {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
      }
    ]
  }`;
  
  const jsObject = JSON.parse(jsonString);
  console.log(jsObject);

// Вариант 2.

    // Запись заготовки в JSON строку
const jsonString2 = `{
    "list": [
      {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
      },
      {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
      }
    ]
  }`;
  
  function convertJSONToJSObject(jsonString2) {
    const jsonObject = JSON.parse(jsonString2);
  
    // Преобразование массива объектов
    const convertedList = jsonObject.list.map((item) => {
      return {
        name: item.name,
        age: parseInt(item.age),
        prof: item.prof
      };
    });
  
    // Возвращение преобразованного JS-объекта
    return {
      list: convertedList
    };
  }

    // Преобразование JSON в JS-объект и вывод в консоль
  
  const convertedObject = convertJSONToJSObject(jsonString2);
  console.log(convertedObject);