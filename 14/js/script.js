const { useState } = React;

function HoverImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? "https://nb.scene7.com/is/image/NB/wt51650nnny_nb_70_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880" : "https://nb.scene7.com/is/image/NB/wt51650nnny_nb_71_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880"}
      alt="Hoverable"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: '300px', height: 'auto' }}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HoverImage />);
