import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><Link href="/"className="hover:underline">Home</Link></li>
            <li><Link href="/" className="hover:underline">About Us</Link></li>
            <li><Link href="/admissions" className="hover:underline">Admissions</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us </Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <p>Mhlungwane Area, Vryheid, KwaZulu-Natal, South Africa</p>
          <p>Email: <Link href="mailto:info@mgidla-secondary.co.za" className="hover:underline">info@mgidla-secondary.co.za</Link></p>
          <p>Phone: <Link href="tel:0840950018" className="hover:underline">084 095 0018</Link></p>
        </div>
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-4">Find Us on Social Media</h3>
          <div className="flex space-x-4">
  <Link href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL" className="block">
    <img src="/icons/facebook-logo.png" alt="Facebook" className="h-6 w-6" />
  </Link>
  <Link href="https://twitter.com/intent/tweet?url=YOUR_URL" className="block">
    <img src="/icons/x-logo.png" alt="X" className="h-6 w-6" />
  </Link>
  <Link href="https://www.linkedin.com/shareArticle?mini=true&url=YOUR_URL" className="block">
    <img src="/icons/linkedin-logo.png" alt="LinkedIn" className="h-6 w-6" />
  </Link>
  <Link href="https://api.whatsapp.com/send?text=YOUR_URL" className="block">
    <img src="/icons/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
  </Link>
  <Link href="https://www.instagram.com/?url=YOUR_URL" className="block">
    <img src="/icons/instagram-logo.png" alt="Instagram" className="h-6 w-6" />
  </Link>
</div>
        </div>
      </div>
      <div className="footer-bottom text-center mt-8">
  <p>
    <Link href="/privacy" className="hover:underline">Privacy Policy</Link> | 
    <Link href="/terms" className="hover:underline">Terms of Service</Link>
  </p>
  <p>Copyright &copy; 2024 Mgidla Secondary School</p>
  <p>Website developed by: Thabo Chambule</p>
</div>
    </footer>
  );
};

export default Footer;
