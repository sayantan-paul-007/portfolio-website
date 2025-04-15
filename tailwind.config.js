tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
      screens: {
      'mobile-small': '360px',    // Small smartphones
      'mobile': '640px',          // Standard smartphones
      'tablet': '768px',          // Tablets and e-readers
      'laptop': '1024px',         // Smaller laptops
      'desktop': '1280px',        // Standard laptops and desktops
      'desktop-large': '1536px',  // Large monitors
      'desktop-xl': '1920px',     // Ultra HD / 4K displays
      'desktop-4k': '2560px'      // Professional monitors / Super ultrawide
      },
      container: {
        center: true,
      },
    }
  }
}

