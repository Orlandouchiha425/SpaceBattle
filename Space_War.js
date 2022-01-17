class Ships{
    constructor(hull,firepower,accuracy){
        this.hull=hull;
        this.firepower=firepower;
        this.accuracy=accuracy;
    }}
//this will get randomHull between 3 and 6 not incluiding 6. so 5
const randomHull=(min=3,max=7)=>{
    return Math.floor(Math.random()* (max - min) + min)}
    //this will find random firepower between 2 and 5 not incluiding 5.So 4
    const randomFirePower=(min=2,max=5)=>{
        return Math.floor(Math.random()* (max - min) + min)}
//this will find the accuracy of a random acuracy  of  .6 and.9 not incluiding .9 so .8
const randomAccuracy=(min=.6,max=.9)=>{
    return Math.random()* (max - min) + min}
const playerShip= new Ships(20,5,.7)
const alienShip1=  new Ships(randomHull(),randomFirePower(),randomAccuracy())
const alienShip2= new Ships(randomHull(),randomFirePower(),randomAccuracy())
const alienShip3= new Ships(randomHull(),randomFirePower(),randomAccuracy())
const alienShip4= new Ships(randomHull(),randomFirePower(),randomAccuracy())
const alienShip5= new Ships(randomHull(),randomFirePower(),randomAccuracy())
const alienShip6= new Ships(randomHull(),randomFirePower(),randomAccuracy())
  const enemyShips= [alienShip1,alienShip2,alienShip3,alienShip4,alienShip5,alienShip6]


const attackButton= document.getElementById("attack")
const story=document.getElementById('game_progress')
const story2=document.getElementById('game_progress2')
const story3=document.getElementById('game_progress3')
const story4=document.getElementById('game_progress4')


const restartButton=document.getElementById('retreat')
// cons story3=document.getElement
const endGameButton=document.getElementById('end_game')


const attackShip=()=>{

    // if (enemyShips.length<=0) {
    //     window.alert('you won');
    //     return
    // }
    if (playerShip.hull>0) {
        enemyShips[0].hull-=playerShip.firepower
        story2.textContent=('you dealt a damage of '+playerShip.firepower+" AlienShip has a hull of "+enemyShips[0].hull)}
        
       


        console.log("you dealt a damage of "+playerShip.firepower +" AlienShip has a hull of "+enemyShips[0].hull)

        
        console.log("alienShip has a hull of "+ enemyShips[0].hull )
    if(enemyShips[0].hull<=0){
        enemyShips.shift()
            console.log("you destroyed a ship! there are only "+ enemyShips.length + " alienships left")
            //since i did not append the new textcontent it automatically removes it and re runs it if you press attack. the information is not saved. 
            story3.textContent="A ship has been Destroyed! there are  "+ enemyShips.length + " alienships left";
            if (enemyShips.length<=0) {
                window.alert('you won');
                return
            }

    }
    

    if (enemyShips[0].hull>=0 && Math.random()<=enemyShips[0].accuracy && enemyShips.length>0){
        playerShip.hull-=enemyShips[0].firepower
        console.log("you have been hit, your ship hull is at "+ playerShip.hull)
        //since i did not append the new textcontent it automatically removes it and re runs it if you press attack. the information is not saved.and adds another ptag
        story4.textContent="you have been hit, your ship hull is at "+ playerShip.hull;
        }
        
        // else{ if (enemyShips.length<=0) {
        //     window.alert('you won');
        //     return
        // }}


    
        if (playerShip.hull<=0) {
            window.alert('You Lost!')
            
        }
       
        
    }
        
             

  




attackButton.addEventListener('click', ()=>{
  attackShip()
  
 
})

endGameButton.addEventListener('click',()=>{
    if(window.confirm("Do you want to end Game?")){
        window.close("GoodBye")
    }
    }
    
)
restartButton.addEventListener('click',()=>{

    location.reload()
    //credit goes to damon, he gave me the idea during office hours.

} )


