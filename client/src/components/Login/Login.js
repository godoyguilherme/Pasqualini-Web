import React, { Component } from "react";
import { Link } from "react-router-dom";
import { basicLogin, googleLogin } from "../../actions";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox, Layout, Card, Spin } from "antd";
import GoogleLogin from "react-google-login";
import keys from "../../config/keys";
import "./login.css";

class Login extends Component {
  state = { loading: false };

  onSubmitBasicLogin = e => {
    this.setState({ loading: true });
    this.props.basicLogin();
  };

  handleGoogleLogin = ({ profileObj }) => {
    this.props.googleLogin(profileObj);
  };

  handleGoogleLoginFailure = err => {
    this.setState({ loading: false });
    console.log(err);
  };

  render() {
    return (
      <Spin
        size="large"
        spinning={this.state.loading}
        style={{ position: "static" }}
      >
        <Layout
          style={{
            height: "100vh",
            background: "linear-gradient(to right, #a8caba 0%, #5d4157 100%)"
          }}
        >
          <Card
            title="Acesso área administrativa"
            headStyle={{ textAlign: "center" }}
            style={{
              width: "368px",
              height: "438px",
              border: "0px",
              margin: "auto",
              background:
                "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)"
            }}
          >
            <Form layout="vertical">
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Usuário"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Senha"
                />
              </Form.Item>
              <Form.Item>
                <Checkbox>Lembrar</Checkbox>
                <Link to="/forgotpassword" style={{ float: "right" }}>
                  Esqueci minha senha
                </Link>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  onClick={this.onSubmitBasicLogin}
                >
                  Entrar
                </Button>
              </Form.Item>
              <Form.Item>
                <GoogleLogin
                  className="googleButton"
                  clientId={keys.GOOGLE_CLIENT_ID}
                  onSuccess={this.handleGoogleLogin}
                  onFailure={this.handleGoogleLoginFailure}
                  cookiePolicy={"single_host_origin"}
                  buttonText="Entrar com Google"
                  onRequest={() => this.setState({ loading: true })}
                />
              </Form.Item>
              <Form.Item>
                Ou <Link to="/register">registrar agora!</Link>
              </Form.Item>
            </Form>
          </Card>
        </Layout>
      </Spin>
    );
  }
}

export default connect(
  null,
  { basicLogin, googleLogin }
)(Login);
