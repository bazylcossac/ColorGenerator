document.getElementById("colorForm").addEventListener('submit', function(e) {
    e.preventDefault()
    const myColor = document.getElementById('MyColor').value
    const selectedSheme = document.getElementById('selectedSheme').value

    fetch(`https://www.thecolorapi.com/scheme?hex=${myColor.slice(1,7)}&mode=${selectedSheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            let colorHtml = ''
            data.colors.forEach(item => {
                console.log(item.hex)
                colorHtml += `<div class="colorContainer">
                <div class="generatedColor" style="background-color:${item.hex.value}"}'></div>
                   <div class="colorHex">${item.hex.value}</div>
                </div>`
            })
            document.getElementById('colorBox').innerHTML = colorHtml
        })


})