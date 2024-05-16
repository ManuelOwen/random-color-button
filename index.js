document.addEventListener('DOMContentLoaded',()=>{
      const btn = document.getElementById('btn');
      const input = document . getElementById('input');


      document.getElementById('button').addEventListener("click", function(){
            const button =document.getElementById("button");
            const currentColor = button.style.backgroundColor;
            const newColor = getRandomColor();
            while (newColor === currentColor){
                  newColor = getRandomColor();
            }
            button.style.backgroundColor =newColor;
      })
      function getRandomColor(){
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++){
                  color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
      }
            
      })







