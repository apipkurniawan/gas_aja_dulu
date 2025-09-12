export default function MapsSection() {
  return (
    <div className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4427.189741070995!2d106.12177837548916!3d-6.073523059597296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418d93bac5ca89%3A0x93d5c337ee50c03f!2sGedung%20Graha%20Faletehan!5e1!3m2!1sid!2sid!4v1757667926574!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
