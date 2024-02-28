import React from 'react'
import styled from "styled-components";
import { FaArrowRight } from 'react-icons/fa';
export const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    
    .container {
      
      margin-top: -15rem;
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: transform 0.5s;
    &:hover {
      transform: rotateY(10deg) scale(1.1);
    }
      .contact-form {
        max-width: 40rem;
        
        margin: auto;
        .contact-inputs {
          display: flex;
      flex-direction: column;
      gap: 3rem;
      transform-style: preserve-3d;
      perspective: 1000px;
      transition: transform 0.5s;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div className="container">
      <h3 className="common-heading">Provide Address</h3>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mjvnbyew"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <div className="form-group">
            <label >Select Province <FaArrowRight /> {/* Render the arrow icon */}</label>
            <select >
              <option value="">Select Province</option>
              <option value="Wrong item received">Punjab</option>
              <option value="Item damaged">Islamabad</option>
              <option value="Not satisfied">Balochistan</option>
              <option value="Not satisfied">Khyber Pakhtunkhwa</option>
              <option value="Not satisfied">Sindh</option>
            </select>
          </div>
          <textarea
              name="Message"
              cols="10"
              rows="3"
              required
              autoComplete="off"
              placeholder="Enter your Address"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
export default Contact;