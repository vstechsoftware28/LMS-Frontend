// src/student/CustomizableTheme.js
import React from 'react';

const CustomizableTheme = () => {
  return <div>Customizable Theme</div>;
};

export default CustomizableTheme;

// import React from 'react';
// import styled from 'styled-components';

// const ThemeButton = styled.button`
//   background-color: ${(props) => props.themeColor};
//   border: none;
//   padding: 0.5rem 1rem;
//   color: #fff;
//   cursor: pointer;
//   margin: 0.5rem;
//   border-radius: 5px;
// `;

// const CustomizableTheme = () => {
//   const themes = ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f'];

//   const changeTheme = (color) => {
//     document.documentElement.style.setProperty('--main-color', color);
//   };

//   return (
//     <div>
//       <h3>Customize Theme</h3>
//       {themes.map((color) => (
//         <ThemeButton
//           key={color}
//           themeColor={color}
//           onClick={() => changeTheme(color)}
//         >
//           {color}
//         </ThemeButton>
//       ))}
//     </div>
//   );
// };

// export default CustomizableTheme;
