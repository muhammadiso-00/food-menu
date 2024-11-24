import React from 'react'

function Time() {
    const time = new Date();
    const hours = time.getHours();
  
    let day = "";
    if (hours >= 12 && hours <= 17) {
      day = "kun";
    } else if (hours <= 12 && hours >= 0o0) {
      day = "tong";
    } else if (hours >= 17 && hours <= 20) {
      day = "kech";
    } else if (hours <= 20 ||hours >= 7) {
      day = "tun";
    }else{
      console.log("Kun qoyishda muammo")
    }
    
  return (
    <h3 className="font-light">Xayrli {day}, Muhammadiso</h3>

  )
}

export default Time