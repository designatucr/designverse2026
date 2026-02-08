type props = {
  children: string;
};

const Title = ({ children }: props) => {
  return (
    <div className="md:text-7xl text-center font-inter text-4xl font-bold text-landing-brown-300">
      {children}
    </div>
  );
};

export default Title;
