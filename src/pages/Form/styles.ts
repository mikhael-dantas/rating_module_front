import styled from "styled-components";
import { AppColors } from "../../assets/styles/global";

const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      width: 100%;
      padding: 100px;
      background: ${AppColors.text_primary};
      box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .content section {
      width: 100%;
      max-width: 380px;
    }
    
    .content section h1 {
      margin: 34px 0 32px;
      font-size: 32px;
    }
    
    .content section p {
      font-size: 18px;
      color: ${AppColors.text_complement};
      line-height: 32px;
    }
    
    .content form {
      width: 100%;
      max-width: 450px;
    }
    
    .content form input,
    .content form textarea {
      margin-top: 8px;
    }


    /** Form **//

    input,
    button,
    textarea {
      font: 400 18px Roboto, sans-serif;
    }

    form input {
      width: 100%;
      height: 60px;
      color: ${AppColors.input};
      border: 1px solid ${AppColors.line_white};
      border-radius: 8px;
      padding: 0 24px;
    }

    form select {
      width: 100%;
      height: 60px;
      color: ${AppColors.input};
      border: 1px solid ${AppColors.line_white};
      border-radius: 8px;
      padding: 0 24px;
    }

    form textarea {
      width: 100%;
      resize: vertical;
      min-height: 140px;
      color: ${AppColors.input};
      border: 1px solid ${AppColors.line_white};
      border-radius: 8px;
      padding: 16px 24px;
      line-height: 24px;
    }

    .button {
      width: 100%;
      height: 60px;
      background-color: ${AppColors.primary_darker};
      border: 0;
      border-radius: 8px;
      color: ${AppColors.button_text};
      font-weight: 700;
      margin-top: 16px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;
    }

    /** Estrelas **/
    .estrelas input[type=radio] {
      display: none;
    }
    .estrelas label i.fa:before {
      content:'\f005';
      color: ${AppColors.star};
    }
    .estrelas input[type=radio]:checked ~ label i.fa:before {
      color: ${AppColors.input};
    }

`

export default Container
