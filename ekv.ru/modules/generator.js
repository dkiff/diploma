$('.generator').on('click', function (e) {
    var name = $('#name' + this.id).text()
    var surname = $('#surname' + this.id).text()
    var fatherName = $('#fatherName' + this.id).text()
    var jobPlace = $('#jobPlace' + this.id).text()
    var job = $('#job' + this.id).text()
    var email = $('#email' + this.id).text()
    var date = $('#date' + this.id).text()
    var requestId = document.querySelector('#idRequest').textContent
    var simbolName = name[0]
    var simbolSurname = surname[0]
    var simbolFatherName = fatherName[0]
    var answer = ''
    var converter = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
        'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
        'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
        'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya',

        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
        'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
        'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
        'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
        'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
        'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
        'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };
    var symDate = date[2] + date[3]
    for (var i = 0; i < simbolSurname.length; i++) {
        if (converter[simbolSurname[i]] == undefined) {
            answer += simbolSurname[i];
        } else {
            answer += converter[simbolSurname[i]];
        }
    }
    for (var i = 0; i < simbolName.length; i++) {
        if (converter[simbolName[i]] == undefined) {
            answer += simbolName[i];
        } else {
            answer += converter[simbolName[i]];
        }
    }
    for (var i = 0; i < simbolFatherName.length; i++) {
        if (converter[simbolFatherName[i]] == undefined) {
            answer += simbolFatherName[i];
        } else {
            answer += converter[simbolFatherName[i]];
        }
    }

    var alphabet = "eWglQNIyvxFVo9L46DZMAwrE_TK1mnS7stY8Oib3jPUGXda5qfkJHh2BR*zuc0Cp";
    var password = "";
    while (password.length < 8) {
        password += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    var Tr = document.querySelectorAll('.idU')
    var lastTr = Tr[Tr.length - 1]
    if(lastTr){
      var nextId = Number(lastTr.textContent) + 1  
    } else{
      var nextId = 1  
    }
    
    console.log(nextId)
    $.ajax({
        url: 'action/action_addUser.php',
        type: 'POST',
        dataType: 'json',
        data: {
            login: nextId + answer.toLowerCase(),
            password: password,
            name: name,
            surname: surname,
            fatherName: fatherName,
            email: email,
            jobPlace: jobPlace,
            job: job,
            data: date,
            id: nextId,
            idRequest: requestId
        },
        success: function (data) { }
    })




    var template = document.querySelector('#addUser')
    var tableU = document.querySelector('#usersTable')
    var clone = template.content.cloneNode(true);
    let td = clone.querySelectorAll("td");
    let tr = clone.querySelector('tr')
    var inputs = []
    for (var i = 0; i < td.length; i++) {
        inputs[i] = td[i].querySelector('input')
    }


    inputs[1].value = nextId + answer.toLowerCase();
    inputs[2].value = surname
    inputs[3].value = name
    inputs[4].value = fatherName
    inputs[5].value = jobPlace
    inputs[6].value = job
    inputs[7].value = email
    td[0].textContent = nextId
    td[1].appendChild(inputs[1])
    td[2].appendChild(inputs[2])
    td[3].appendChild(inputs[3])
    td[4].appendChild(inputs[4])
    td[5].appendChild(inputs[5])
    td[6].appendChild(inputs[6])
    td[7].appendChild(inputs[7])
    td[8].textContent = date

    if (nextId % 2 == 1) {
        tr.style.backgroundColor = 'lightgray'
    } else {
        tr.style.backgroundColor = 'white'
    }
    tableU.appendChild(clone);
    var idReq = tableU.querySelectorAll('.idReq')
    console.log(idReq)
    for (var i = 0; i < idReq.length; i++) {
        idReq[i].classList.add('idU')
    }


    $('.stroka[id="' + this.id + '"').remove()
})