import React from "react";
import { Layout } from "antd";
import CustomSider from "../containers/customSider/CustomSider";
import CustomHeader from "../containers/customHeader/CustomHeader";
const { Footer, Content } = Layout;

//Header / Footer - 099 Strong Stick
//Content - 098 Risky Concrete

const DashApp = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <CustomSider />
      <Layout>
        <CustomHeader />
        <Content
          style={{
            background:
              "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)"
          }}
        />
        <Footer
          style={{
            background: "linear-gradient(to right, #a8caba 0%, #5d4157 100%)",
            textAlign: "center",
            padding: "4px"
          }}
        >
          © {new Date().getFullYear()} Pasqualini Imóveis. Todos os direitos
          reservados.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashApp;
