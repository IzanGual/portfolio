import './DownloadCV.css';

export default function DownloadCV() {
    
  return (
        <>

      {/* Icono arriba derecha */}
      <svg
        className="icon-top-right"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20M9.33333 13.3333L16 20M16 20L22.6667 13.3333M16 20V4"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="icon-wrapper">
        {/* Icono principal */}
        <svg
          className="main-icon"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M87.5 12.5H37.5C34.1848 12.5 31.0054 13.817 28.6612 16.1612C26.317 18.5054 25 21.6848 25 25V125C25 128.315 26.317 131.495 28.6612 133.839C31.0054 136.183 34.1848 137.5 37.5 137.5H112.5C115.815 137.5 118.995 136.183 121.339 133.839C123.683 131.495 125 128.315 125 125V50M87.5 12.5L125 50M87.5 12.5V50H125M100 81.25H50M100 106.25H50M62.5 56.25H50"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />    
        </svg>

        
      </div>

      
    </>
  );
}
