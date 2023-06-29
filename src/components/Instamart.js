import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible, setHide }) => {
  return (
    <div className="insta-container">
      <h3 className="text-2xl font-bold">{title}</h3>

      {isVisible ? (
        <button  onClick={() => setHide()} className="cursor-pointer underline">Hide</button>
      ) : (
        <button  onClick={() => setIsVisible()} className="cursor-pointer underline">Show</button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [sectionConfig, setSectionConfig] = useState("");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">This Is Instamart Page</h1>
      <Section
        title={"About"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={sectionConfig === "about"}
        setIsVisible={() => setSectionConfig("about")}
        setHide={() => setSectionConfig("")}
      />
      <Section
        title={"Team "}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={sectionConfig === "team"}
        setIsVisible={() => setSectionConfig("team")}
        setHide={() => setSectionConfig("")}
      />

      <Section
        title={"Careears"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={sectionConfig === "career"}
        setIsVisible={() => setSectionConfig("career")}
        setHide={() => setSectionConfig("")}
      />
    </div>
  );
};

export default Instamart;
