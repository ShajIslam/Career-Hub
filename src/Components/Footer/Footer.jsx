


const Footer = () => {

    

    return (
        <footer className="footer p-10 bg-black text-white mt-12">
  <aside>
    <h1 className="text-3xl text-[#fff] font-bold">Career Hub</h1>
    <p className="w-60 font-light text-sm text-[#FFFFFFB3]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
    
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;