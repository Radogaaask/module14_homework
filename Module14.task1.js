// Запись заготовки в XML строку
const xmlString =`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>` 
;

// Функция для преобразования XML в JS-объект
function xmlToJs(xml) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, 'text/xml');
  const listNode = xmlDoc.getElementsByTagName('list')[0];
  const students = listNode.getElementsByTagName('student');
  const result = { list: [] };

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const nameNode = student.getElementsByTagName('name')[0];
    const firstName = nameNode.getElementsByTagName('first')[0].textContent;
    const lastName = nameNode.getElementsByTagName('second')[0].textContent;
    const age = parseInt(student.getElementsByTagName('age')[0].textContent);
    const prof = student.getElementsByTagName('prof')[0].textContent;
    const lang = nameNode.getAttribute('lang');

    result.list.push({
      name: `${firstName} ${lastName}`,
      age: age,
      prof: prof,
      lang: lang,
    });
  }

  return result;
}

// Преобразование XML в JS-объект и вывод в консоль
const jsObject = xmlToJs(xmlString);
console.log(jsObject);
