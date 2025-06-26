import GlitchText from '../components/ui/GlitchText';

const Menu = () => {
  return (
    <div className="primary h-screen w-screen flex justify-center items-center text-9xl flex-col">
      <img src="/images/Alas_logo_main.png" alt="" />
      <GlitchText
        speed={1}
        enableShadows={true}
        enableOnHover={false}
        className="primary-text text-center "
      >
        Coming Soon
      </GlitchText>
    </div>
  );
}

export default Menu