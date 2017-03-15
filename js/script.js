document.getElementById('my').addEventListener('focus',function(event){
    this.value="+994-";
})
document.getElementById('my').addEventListener('keydown',function(event){
  if (this.value.length==7 || this.value.length==11 || this.value.length==14) {
      this.value+= "-";
  }
})





