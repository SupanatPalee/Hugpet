import React from "react";
import "./login.css";

 const Login = () => {
  return (
    <div className="login">
      <div className="div">
        <div className="overlap">
          <div className="ellipse" />
          <div className="overlap-group">
            <div className="ellipse-2" />
            <div className="overlap-2">
           
              <div className="create-new-account">
                <div className="div-wrapper">
                  <div className="text-wrapper">Create new account</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="loginbar">
            <div className="overlap-3">

              <div className="pass">
                <div className="overlap-group-2">
                  <div className="text-wrapper-2"></div>
                  <img className="vector" alt="Vector" src="https://icons.veryicon.com/png/o/business/business-app/icons_password.png" />
                  <input 
                    className="custom-input" 
                    type="text" 
                    placeholder={`Password`}
                  />
                </div>
              </div>

              <div className="user">
                <div className="overlap-group-2">
                  <div className="text-wrapper-3"></div>
                  <img className="img" alt="Vector" src="https://cdn1.iconfinder.com/data/icons/app-user-interface-glyph/64/user_man_user_interface_app_person-512.png" />
                  <input 
                    className="custom-input" 
                    type="text" 
                    placeholder={`User name`}
                  />
                </div>
              </div>


              <a href="/hugpet">
                <button class="login-button" >
                  <div className="login">
                    LOG IN  
                  </div>
                </button>
              </a>
              <div className="text-wrapper-5">Forgotten Password?</div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="overlap-5">
            <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/431008349_299073443199127_5239554803375045517_n.png?stp=dst-png_s2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeExzpnGxW3bmJrV8RY0ecN4ytMIIcJQGNrK0wghwlAY2upzCehfCjD9PSBwfoLVxrjWeHogifp4DHeBPwHJtdiK&_nc_ohc=G-rsz5_nyrMAX_jgyyY&_nc_ht=scontent.fcnx3-1.fna&oh=03_AdTSMhWcsfG5VBH9XxT6JI0S9nEDcV7xU2u0LGF3YurBfA&oe=6620CC1E" alt="HugPet" className="logo-login"/>
            <div className="text-wrapper-7">ABOUT</div>
            <div className="text-wrapper-8">HOME</div>
            <div className="text-wrapper-9">SUPPORT</div>
            <div className="group">
              <div className="overlap-group-3">
                <div className="text-wrapper-10">welcome</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;