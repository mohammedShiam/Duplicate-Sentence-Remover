// let inputData = ' website, website development, website design, ecommerce website, business website, elementor pro, landing page, logo design, shopify website, website design, logo design, website, graphic design, video editing, mobile app development, wordpress website design, seo, wordpress, data entry, website development, website, wordpress website, video editing, wordpress, seo, logo, shopify website, landing page, ecommerce website';
// Selection
const inputForm = document.getElementById('input-form')
const inputBox = document.querySelector('#input-box')
const outputForm = document.getElementById('output-form')
const outputBox = document.querySelector('#output-box')
const reloadBtn = document.querySelector('#reload-btn')
const copyBtn = document.querySelector('#copy-btn')

// Remove Outputbox
outputForm.style.display = 'none';
// validation

inputForm.addEventListener('submit', function (e) {
    // Stop Request
    e.preventDefault()
    if(inputBox.value == '')return alert('Inputbox cannot be Empty!!')
    // Taking Input Data
   let inputData = inputBox.value


    // Make Data Palne String to Array 
    const dataArray = inputData.split(',')

    // Travarse Data and Find Duplicate Elements
    dataArray.forEach(e => {
        let count = 0;
        dataArray.forEach((el, in2) => {
            if (e == el) {
                count++;
                if (count >= 2) {

                    dataArray[in2] = undefined
                    count--;
                }
            }
        })
    })

    // Finally Filterd Uniqe Data
    const result = dataArray.filter(e => {
        return e != undefined
    })
    inputForm.style.display = 'none'
    outputForm.style.display = 'block'
    outputBox.value = result.join('\n')

})

reloadBtn.addEventListener('click', function(){
    location.reload()
})