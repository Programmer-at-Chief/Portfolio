"use client"

export default function Contact() {

  function setImage(link_num){
    const element = document.getElementById('image_bg')
    if (link_num ===  1){
      element.classList.add('bg-[url("/images/waves_bg.png")]')
    }
    else if (link_num === 2){
      element.classList.add('bg-[url("/images/soul_bg.png")]')
    }
    else if (link_num === 3){
      element.classList.add('bg-[url("/images/pastel_bg.png")]')
    }
    else if (link_num === 4){
      element.classList.add('bg-[url("/images/moon_bg.png")]')

    }
    else if (link_num === 5){
      element.classList.add('bg-[url("/images/crosses_bg.png")]')
    }
  }

  function removeImage(){
    const element = document.getElementById('image_bg')

      element.classList.remove('bg-[url("/images/waves_bg.png")]')
      element.classList.remove('bg-[url("/images/soul_bg.png")]')
      element.classList.remove('bg-[url("/images/pastel_bg.png")]')
      element.classList.remove('bg-[url("/images/moon_bg.png")]')
      element.classList.remove('bg-[url("/images/crosses_bg.png")]')
  }

  return (
    <div className="px-[12%] flex justify-center items-center min-h-screen">
    <div className="flex flex-col p-48 gap-5 bg-cover bg-center items-center" id='image_bg'>
    <a href="https://www.instagram.com/chauhan_aman2004/" className="text-3xl dark:text-amber-800 text-amber-300 hover:bg-gray-600/70 hover:rounded-2xl px-2" onMouseEnter={() => setImage(1)} onMouseLeave={() => removeImage()}>Instagram</a>
    <a href="https://www.linkedin.com/in/aman-chauhan-in" className="text-3xl dark:text-amber-800 text-amber-300 hover:bg-gray-600/70 hover:rounded-2xl text-center w-[80%]" onMouseEnter={() => setImage(2)} onMouseLeave={() => removeImage()}>LinkedIn</a>
    <a href="https://github.com/Programmer-at-Chief" className="text-3xl dark:text-amber-800 text-amber-300 hover:bg-gray-600/70 hover:rounded-2xl text-center w-[70%]" onMouseEnter={() => setImage(3)} onMouseLeave={() => removeImage()}>Github</a>


    </div>

    </div>
  )
}

