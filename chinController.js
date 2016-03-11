
;(function() {
  'use strict'
  angular.module('chinControllers', [])
    .controller("chinAppController", chinAppController)
  function chinAppController() {
    var chin = this
    chin.test = 'testString'

    chin.adoptees = []
    chin.adopteds = []

    chin.chinArray= [
		{
		  name: 'Karl',
			age: 5,
			gender: 'boy',
			image: "http://www.spoiledchins.net/trilawnyweb2.gif",
			adopted: true,
		},
		{
			name: 'Patches',
			age: 4,
			gender: 'boy',
			image: "http://uberhumor.com/wp-content/uploads/2012/06/resized_zO3QR.jpg",
			adopted: false
		},
		{
			name: 'Tubby',
			age: 2,
			gender: 'boy',
			image: "https://41.media.tumblr.com/f5b21c464ff0b6262b7f3f552f451b99/tumblr_n9vgaoTJSB1rb8qcdo1_500.jpg",
			adopted: false
		},
		{
			name: 'Princess Mew',
			age: 3,
			gender: 'girl',
			image: "http://vignette2.wikia.nocookie.net/bobsburgerpedia/images/b/be/Theprincess.png/revision/latest?cb=20150316005211",
			adopted: false
		}

	]

    // function Pin(X,Y){
    //   var img = document.querySelector(".Map")
    //   this.X = (X / img.clientWidth) *100
    //   this.Y = (Y / img.clientHeight) *100
    //   this.note = ""
    //   this.visible = true
    //   this.readNoteVisible = false
    //
    //   console.log(this.X)
    //   console.log(this.Y)
    //
    //   this.cssMaker = function(){
    //     return "top:" +this.Y+"% ;" + "left:"+ this.X + "%;"
    //   }
    // }

    // Gold.getCoordinates = function() {
    //   if (Gold.okToPlace) {
    //     Gold.pinsArray.push(new Pin(event.pageX,event.pageY) )
    //     console.log(Gold.pinsArray)
    //     Gold.okToPlace = false
    //   }
    // }
  }
}())
