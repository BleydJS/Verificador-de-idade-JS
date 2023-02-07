function calcular(){
    var data = new Date()
    var anohoje = data.getFullYear()
    var nasc = document.getElementById("txtano").value;
    var res = document.getElementById ("res")

        if(nasc == 0 || nasc > anohoje) {
            window.alert ("ERRO..digite uma data valida")
        }
        else {
            var idade = anohoje - nasc 
            var radiosex = document.getElementsByName("radiosex")
            var genero = ""
            var ibagens = document.createElement('img')
            ibagens.setAttribute('id', 'foto')
            if(radiosex[0].checked) {
                genero = 'Homem'
                if(idade > 0 && idade < 12){
                    ibagens.setAttribute('src', 'foto-bebe-m.png')
                }else if (idade < 18 ){
                    ibagens.setAttribute('src', 'foto-jovem-m.png')
                }else if (idade < 60){
                    ibagens.setAttribute ('src', 'foto-adulto-m.png')
                }else if (idade >= 60 ){
                    ibagens.setAttribute('src', 'foto-idoso-m.png')
                }
            } else {
                genero = 'Mulher'
                if(idade > 0 && idade < 12){
                    ibagens.setAttribute('src', 'foto-bebe-f.png')
                }else if (idade < 18 ){
                    ibagens.setAttribute('src', 'foto-jovem-f.png')
                }else if (idade < 60){
                    ibagens.setAttribute ('src', 'foto-adulto-f.png')
                }else if (idade >= 60 ){
                    ibagens.setAttribute('src', 'foto-idoso-f.png')
                }
            }
            res.innerHTML = `<p>Detectamos um ${genero} de idade ${idade} anos</p>`
            res.appendChild (ibagens)
        }

        
}