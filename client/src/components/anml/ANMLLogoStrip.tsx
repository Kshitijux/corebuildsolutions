import React from 'react';

export const ANMLLogoStrip: React.FC = () => {
  return (
    <section className="py-16 bg-[#0A0A0A] border-y border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="anml-marquee-track">
          {/* Logo Set 1 */}
          <div className="flex items-center gap-16 sm:gap-24 px-8">
            <svg width="120" height="28" viewBox="0 0 146 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70 hover:opacity-100 transition-opacity">
              <path d="M31.1621 33.005H5.3396C3.64835 33.005 1.99835 32.0975 1.2146 30.5712C0.307104 28.7975 0.637104 26.6937 2.0396 25.3325L20.0246 7.3475H7.11335C3.56585 7.3475 0.719602 4.46 0.719602 0.953749H24.5209C26.2121 0.953749 27.8621 1.86125 28.6459 3.3875C29.5534 5.16125 29.2234 7.265 27.8209 8.62625L9.83585 26.6113H24.7271C28.2746 26.6113 31.1621 29.4988 31.1621 33.005ZM133.38 0.5C129.667 0.5 126.367 2.10875 124.057 4.66625C121.747 2.10875 118.447 0.5 114.735 0.5C107.887 0.5 102.277 6.3575 102.277 13.205V33.005C105.825 33.005 108.671 30.1175 108.671 26.6113V13.1637C108.671 9.86375 111.228 7.05875 114.528 6.935C117.993 6.81125 120.84 9.575 120.84 12.9988V26.6113C120.84 30.1588 123.727 33.005 127.233 33.005V13.1225C127.233 9.8225 129.791 7.0175 133.091 6.89375C136.556 6.77 139.402 9.53375 139.402 12.9575V26.57C139.402 30.1175 142.29 32.9637 145.796 32.9637V13.1637C145.837 6.3575 140.227 0.5 133.38 0.5Z" fill="white" />
            </svg>

            <span className="text-2xl font-bold tracking-widest font-serif text-white/80 hover:text-white transition-opacity">
              CNN
            </span>

            <span className="text-3xl font-bold italic tracking-tighter text-white/80 hover:text-white transition-opacity font-serif">
              Ford
            </span>

            <span className="text-xl font-semibold tracking-wider uppercase text-white/80 hover:text-white transition-opacity">
              KitchenAid
            </span>

            <span className="text-xl font-medium tracking-tight text-white/80 hover:text-white transition-opacity">
              NEXTGEN AI
            </span>
          </div>

          {/* Logo Set 2 Duplicate */}
          <div className="flex items-center gap-16 sm:gap-24 px-8">
            <svg width="120" height="28" viewBox="0 0 146 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70 hover:opacity-100 transition-opacity">
              <path d="M31.1621 33.005H5.3396C3.64835 33.005 1.99835 32.0975 1.2146 30.5712C0.307104 28.7975 0.637104 26.6937 2.0396 25.3325L20.0246 7.3475H7.11335C3.56585 7.3475 0.719602 4.46 0.719602 0.953749H24.5209C26.2121 0.953749 27.8621 1.86125 28.6459 3.3875C29.5534 5.16125 29.2234 7.265 27.8209 8.62625L9.83585 26.6113H24.7271C28.2746 26.6113 31.1621 29.4988 31.1621 33.005ZM133.38 0.5C129.667 0.5 126.367 2.10875 124.057 4.66625C121.747 2.10875 118.447 0.5 114.735 0.5C107.887 0.5 102.277 6.3575 102.277 13.205V33.005C105.825 33.005 108.671 30.1175 108.671 26.6113V13.1637C108.671 9.86375 111.228 7.05875 114.528 6.935C117.993 6.81125 120.84 9.575 120.84 12.9988V26.6113C120.84 30.1588 123.727 33.005 127.233 33.005V13.1225C127.233 9.8225 129.791 7.0175 133.091 6.89375C136.556 6.77 139.402 9.53375 139.402 12.9575V26.57C139.402 30.1175 142.29 32.9637 145.796 32.9637V13.1637C145.837 6.3575 140.227 0.5 133.38 0.5Z" fill="white" />
            </svg>

            <span className="text-2xl font-bold tracking-widest font-serif text-white/80 hover:text-white transition-opacity">
              CNN
            </span>

            <span className="text-3xl font-bold italic tracking-tighter text-white/80 hover:text-white transition-opacity font-serif">
              Ford
            </span>

            <span className="text-xl font-semibold tracking-wider uppercase text-white/80 hover:text-white transition-opacity">
              KitchenAid
            </span>

            <span className="text-xl font-medium tracking-tight text-white/80 hover:text-white transition-opacity">
              NEXTGEN AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ANMLLogoStrip;
