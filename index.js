let content = document.querySelector('.js-generated.content')
let head = document.createElement('link')
head.setAttribute('rel','stylesheet')
head.setAttribute('href','./assets/styles.css')
content.append(head)


let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class','dog_content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog_name')
dogImage.setAttribute('src', './assets/rizzo.jpg')
//dogImage.resize('200','200')
//dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class','dog_details')
dogContent.append(dogDetails)

let description = document.createElement('h3')
description.append('Description:')
dogDetails.append(description)

let para = document.createElement('p')
para.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
dogDetails.append(para)