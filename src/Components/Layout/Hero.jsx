import React from "react";
import styles from "../../Styles/Style";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <div
      className={`${styles.noramlFlex} relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat`}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className={`${styles.section} w-[90%] 800px:w-[60%] `}>
      <h4 className="text-[34px] 800px:text-[60px] font-[600] capitalize text-[#3d3a3a] leading-[1.2] ">
  Meilleure collection pour <br />
  la décoration intérieure
</h4>

        <p className="pt-5 font-[400] font-Poppins text-[16px] text-[#000000ba]">
        Bienvenue sur notre plateforme de e-commerce ! Créez un compte pour accéder à une large gamme de produits proposés par différents vendeurs. Vous pouvez facilement parcourir, comparer et acheter des articles, tout en bénéficiant de promotions exclusives. Inscrivez-vous maintenant et profitez de notre expérience d'achat en ligne rapide et sécurisée.
        </p>

        <Link to={"/products"} className="inline-block">
          <div className={`${styles.button} mt-6`}>
            <span className="text-white font-Poppins text-[18px]">
            Achetez
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
