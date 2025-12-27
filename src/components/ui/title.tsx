type props = {
  children: string;
};

const Title = ({ children }: props) => {
  return (
    <div className="text-center font-inter text-2xl font-bold text-landing-brown-300 md:text-7xl">
      {children}
    </div>
  );
};

export default Title;
