import './NotFoundPage.css';

export default function NotFoundPage() {

    return (
        
        <div className=''>
             
           <h1>Not found Page</h1>
            <div className="video-background">
                <video autoPlay muted loop className="video">
                    <source src="/videos/videoBackgroundDark.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>    
            </div>
        </div>
    );
}