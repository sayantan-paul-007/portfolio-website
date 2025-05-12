tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
      screens: {
      'mobile-small': '360px',    
      'mobile': '640px',          
      'tablet': '768px',          
      'laptop': '1024px',         
      'desktop': '1280px',        
      'desktop-large': '1536px',  
      'desktop-xl': '1920px',     
      'desktop-4k': '2560px'      
      },
      container: {
        center: true,
      },
    }
  }
}

