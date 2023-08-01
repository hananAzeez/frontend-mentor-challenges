import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        moderateBlue: "hsl(238, 40%, 52%)",
        lightGreyishBlue: "hsl(239, 57%, 85%)",
        softRed: " hsl(358, 79%, 66%)",
        paleRed: "hsl(357, 100%, 86%)",
        darkBlue: "hsl(212, 24%, 26%)",
        grayishBlue: "hsl(211, 10%, 45%)",
        lightgray: " hsl(223, 19%, 93%)",
        veryLightGray: "hsl(228, 33%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
      textColor: {
        moderateBlue: "hsl(238, 40%, 52%)",
        lightGreyishBlue: "hsl(239, 57%, 85%)",
        softRed: " hsl(358, 79%, 66%)",
        paleRed: "hsl(357, 100%, 86%)",
        darkBlue: "hsl(212, 24%, 26%)",
        grayishBlue: "hsl(211, 10%, 45%)",
        lightgray: " hsl(223, 19%, 93%)",
        veryLightGray: "hsl(228, 33%, 97%)",
        white: "hsl(0, 0%, 100%)",
        darkGrey: '#333333',
      },
    },
  },
  plugins: [],
} satisfies Config;
