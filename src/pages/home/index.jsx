import Layout from "../../components/Layout";
import Header from "../../components/Header";
import NavigationMenu from "../../components/Navigation";
import Content from "../../components/Content";
import HowTo from "../../components/HowTo";
import Steps from "../../components/Steps";
function Home() {
  return (
    <Layout>
      <Header />
      <NavigationMenu />
      <Content>
        <HowTo />
        <Steps />
      </Content>
    </Layout>
  );
}

export default Home;
