import Header from "../components/mapHeader"

export default function MapPage(){
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d103605.6435008279!2d74.07045578787454!3d15.198506112125727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705401177625!5m2!1sen!2sin`
    return(
        
        <div style={{width:"100%", height:"600px", padding:"0"}}>

            <Header />

            <iframe
            src={mapUrl}
            height='100%'
            width='100%'
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
        </div>    
        )
}