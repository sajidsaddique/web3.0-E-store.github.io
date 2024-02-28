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
        max-width: 50rem;
        margin: 10px;
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
      <h2 className="common-heading">Return Product Form</h2>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mbjvwaep"
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
            <label >Reason for Return <FaArrowRight /> {/* Render the arrow icon */}</label>
            <select >
              <option value="">Select a reason</option>
              <option value="Wrong item received">Wrong item received</option>
              <option value="Item damaged">Item damaged</option>
              <option value="Not satisfied">Not satisfied</option>
            </select>
          </div>
          <textarea
              name="Message"
              cols="10"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your Comment"></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
export default Contact;