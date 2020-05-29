import React from 'react';
import '../style.css';

function About() {
  return (
    <div className="About">
      <header className="header">
        <div className="title">
          <h1>About Us</h1>
        </div>

        <div className="description">
            <div className="text">
              ACM’s Bit Byte Program is a great way to get to know other ACM
              members. If you’re new to ACM or looking for a mentor, you can apply
              to be a bit and get to know someone new that can help you during your
              time at UCSD. Maybe you’ve been in ACM for a while and you have some
              experience you want to share with a mentee. Apply to be a byte. We’ll
              have some fun events and activities planned for you to get to know
              your bit/byte.
            </div>
        </div>

          <div className="title">
            <h1>FAQ</h1>
          </div>

          <div className="faq-text">
            <p>
              <b>How do I become a bit/byte?</b>
              <br />
              ACM will host events specific for the the bit/byte program. Attend a couple of
              those events and get to know your potential bits/byte. On Facebook, you can
              find a form to apply to the program, and we'll pair you up with a bit/byte.
            </p>

            <p>
              <b>Who can join?</b>
              <br />
              Any ACM member can apply to be a bit/byte! It’s really easy to become
              an ACM member. Just go to the ACM membership portal to make an
              account.
            </p>

            <p>
              <b>How many bits per byte?</b>
              <br />
              Each byte can have up to two bits, so one bytes can have either two
              mentees or one mentee.
            </p>


          </div>

      </header>
    </div>
  );
}

export default About;
