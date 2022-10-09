import TopNavbar from "../components/topNavbar/TopNavbar";
import Navbar from "../components/Navbar/Navbar";
import IntroBanner from "../components/intro-banner/IntroBanner";
import Collection from "../components/collection/collection";
import Items from "../components/items/Items";
import AboutView from "../components/About/About";
import CollectionView from "../components/collection/collection";
import AchivementView from "../components/Achivements/Achivement";
import SallerView from "../components/Saller/Saller";
import ArticlesView from "../components/Articles/Article";
import NewsletterView from "../components/NewsLetter/NewsLetter";
import FooterView from "../components/footer/Footer";

const HomeView = () => {
  return(
<>
  <TopNavbar />
   <Navbar />
   <IntroBanner />
   <CollectionView />
   <Items/>
  <AboutView/> 
  <AchivementView/>
  <SallerView />
  <ArticlesView />
  <NewsletterView />
  <FooterView />
</>
  )
};
export default HomeView;