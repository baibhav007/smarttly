// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// // import navlogo from "../Assets/Navbar/logo.png";
// import { Link, NavLink } from "react-router-dom";
// import Button from "../ui/input/reuse/Button/button";
// import NavbarDropDown from "./NavbarDropDown";
// import { RxHamburgerMenu } from "react-icons/rx";

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleMouseEnter = () => setShowDropdown(true);
//   const handleMouseLeave = () => setShowDropdown(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     console.log("Open");
//   };

//   return (
//     <>
//       <div className={styles.navbar}>
//         <div className={styles.navbarlogo}>
//           <Link to="/">
//             {/* <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Flogo.png?alt=media&token=d1e49049-2ff6-40e7-afa3-a1b00af0ae34" loading="lazy" alt="navlogo" /> */}
//             <img src="/images/smarttlyLogo.png" loading="lazy" alt="navlogo" />
//           </Link>
//         </div>
//         <div className={styles.sidebaricon}>
//           <RxHamburgerMenu onClick={toggleMenu} />
//         </div>
//         <div className={styles.navbarlinks}>
//           <ul>
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? `${styles.active}` : undefined
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               className={styles.servicesLink}
//             >
//               <NavLink
//                 to="/services"
//                 className={({ isActive }) =>
//                   isActive ? `${styles.active}` : undefined
//                 }
//                 onMouseEnter={() => setShowDropdown(true)} // Show dropdown on hover
//         onClick={() => setShowDropdown(!showDropdown)}
//               >
//                 Services
//               </NavLink>
//               {/* {showDropdown && (
//                 <div className={styles.dropdownContainer}>
//                   <NavbarDropDown />
//                 </div>
//               )} */}
//               {showDropdown && (
//         <div className={styles.dropdownContainer}>
//           <NavbarDropDown onClose={() => setShowDropdown(false)} />
//         </div>
//       )}
//             </li>
//             <li>
//               <NavLink
//                 to="/casestudies"
//                 className={({ isActive }) =>
//                   isActive ? `${styles.active}` : undefined
//                 }
//               >
//                 Case Studies
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/blog"
//                 className={({ isActive }) =>
//                   isActive ? `${styles.active}` : undefined
//                 }
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive ? `${styles.active}` : undefined
//                 }
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive ? `${styles.active}` : undefined
//                 }
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <div className={styles.navbarctabuttons}>
//           <Link to="/contact" className="link">
//             <Button
//               color="var(--backgroundcolor)"
//               backgroundColor="var(--maintext)"
//               borderColor="var(--maintext)"
//             >
//               Free Consultation
//             </Button>
//           </Link>
//         </div>
//       </div>
//       {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}
//       <div className={`${styles.sideBar} ${isMenuOpen?styles.sidebaropen:""}`}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             className={styles.sidebarcrossicon}
//             onClick={toggleMenu}
//           >
//             <path
//               d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
//               fill="#34A852"
//             />
//           </svg>
//         <ul>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? `${styles.active}` : undefined
//               }
//               onClick={toggleMenu}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className={styles.servicesLink}
//           >
//             <NavLink
//               to="/services"
//               className={({ isActive }) =>
//                 isActive ? `${styles.active}` : undefined
//               }
//               onClick={toggleMenu}
//             >
//               Services
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/casestudies"
//               className={({ isActive }) =>
//                 isActive ? `${styles.active}` : undefined
//               }
//               onClick={toggleMenu}
//             >
//               Case Studies
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 isActive ? `${styles.active}` : undefined
//               }
//               onClick={toggleMenu}
//             >
//               Blog
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive ? `${styles.active}` : undefined
//               }
//               onClick={toggleMenu}
//             >
//               About Us
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive ? `${styles.active}` : undefined
//               }
//               onClick={toggleMenu}
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//         <div className={styles.slidenavbarctabuttons}>
//           <Link to="/contact" className="link">
//             <Button
//               color="var(--backgroundcolor)"
//               backgroundColor="var(--maintext)"
//               borderColor="var(--maintext)"
//               onClick={toggleMenu}
//             >
//               Free Consultation
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/input/reuse/Button/button";
import NavbarDropDown from "./NavbarDropDown";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Open");
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarlogo}>
          <Link to="/">
            <img src="/images/smarttlyLogo.png" loading="lazy" alt="navlogo" />
          </Link>
        </div>
        <div className={styles.sidebaricon}>
          <RxHamburgerMenu onClick={toggleMenu} />
        </div>
        <div className={styles.navbarlinks}>
          <ul>
            <li>
              <NavLink
                to="/home" // Changed from "/" to "/home"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={styles.servicesLink}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : undefined
                }
                onMouseEnter={() => setShowDropdown(true)}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Services
              </NavLink>
              {showDropdown && (
                <div className={styles.dropdownContainer}>
                  <NavbarDropDown onClose={() => setShowDropdown(false)} />
                </div>
              )}
            </li>
            <li>
              <NavLink
                to="/casestudies"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : undefined
                }
              >
                Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : undefined
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : undefined
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : undefined
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.navbarctabuttons}>
          <Link to="/contact" className="link">
            <Button
              color="var(--backgroundcolor)"
              backgroundColor="var(--maintext)"
              borderColor="var(--maintext)"
            >
              Free Consultation
            </Button>
          </Link>
        </div>
      </div>
      {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}
      <div className={`${styles.sideBar} ${isMenuOpen ? styles.sidebaropen : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.sidebarcrossicon}
          onClick={toggleMenu}
        >
          <path
            d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
            fill="#34A852"
          />
        </svg>
        <ul>
          <li>
            <NavLink
              to="/home" // Changed from "/" to "/home"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.servicesLink}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/casestudies"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
              onClick={toggleMenu}
            >
              Case Studies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
              onClick={toggleMenu}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className={styles.slidenavbarctabuttons}>
          <Link to="/contact" className="link">
            <Button
              color="var(--backgroundcolor)"
              backgroundColor="var(--maintext)"
              borderColor="var(--maintext)"
              onClick={toggleMenu}
            >
              Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;