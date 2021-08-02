import React from "react";
import "./form.css";
function Form(props) {
  const [price, setPrice] = React.useState(1000);
  return (
    <form className="form">
      <h2>Form</h2>
      <div className="form_controll text">
        <label htmlFor="name">Name</label>
        <input
          required
          aria-required="true"
          maxLength="15"
          type="text"
          id="name"
          placeholder="FullName"
        />
      </div>
      <div className="form_controll email">
        <label htmlFor="email">Email</label>
        <input
          required
          aria-required="true"
          type="email"
          id="email"
          placeholder="me@email.com"
        />
      </div>
      <div className="form_controll password">
        <label htmlFor="password">password</label>
        <input
          required
          aria-required="true"
          type="password"
          id="password"
          placeholder="MqgF-23èaezè"
        />
      </div>
      <div className="form_controll url">
        <label htmlFor="url">Url</label>
        <input
          required
          aria-required="true"
          type="url"
          id="url"
          placeholder="www.site.com"
        />
      </div>
      <div className="form_controll number">
        <label htmlFor="number">number phone</label>
        <input
          required
          aria-required="true"
          type="number"
          id="number"
          placeholder="+1..."
        />
      </div>
      {/* Radio Buttons */}
      <fieldset className="form_controll radios">
        <legend>What is Your Favourite Language ?</legend>
        <div className="form_controll">
          <label htmlFor="javascript">javascript</label>
          <input name="favorite-color" type="radio" id="javascript" />
        </div>
        <div className="form_controll">
          <label htmlFor="C++">C++</label>
          <input name="favorite-color" type="radio" id="C++" />
        </div>
        <div className="form_controll">
          <label htmlFor="Python">Python</label>
          <input name="favorite-color" type="radio" id="Python" />
        </div>
        <div className="form_controll">
          <label htmlFor="C#">C#</label>
          <input name="favorite-color" type="radio" id="C#" />
        </div>
        <div className="form_controll">
          <label htmlFor="Java">Java</label>
          <input name="favorite-color" type="radio" id="Java" />
        </div>
      </fieldset>
      {/* Radio Buttons */}
      <fieldset className="form_controll checkboxs">
        <legend>What social media do you use often ?</legend>
        <div className="form_controll">
          <label htmlFor="linkedIn">linkedIn</label>
          <input name="favorite-color" type="checkbox" id="linkedIn" />
        </div>
        <div className="form_controll">
          <label htmlFor="Facebook">Facebook</label>
          <input name="favorite-color" type="checkbox" id="Facebook" />
        </div>
        <div className="form_controll">
          <label htmlFor="Instagram">Instagram</label>
          <input name="favorite-color" type="checkbox" id="Instagram" />
        </div>
        <div className="form_controll">
          <label htmlFor="Twitter">Twitter</label>
          <input name="favorite-color" type="checkbox" id="Twitter" />
        </div>
        <div className="form_controll ">
          <label htmlFor="Youtube">Youtube</label>
          <input name="favorite-color" type="checkbox" id="Youtube" />
        </div>
      </fieldset>
      {/* End CheckBox */}

      <div className="form_controll select">
        <label htmlFor="stack">Main Job</label>
        <select>
          <option value="FrontEnd">Front-End</option>
          <option value="BackEnd" selected>
            Back-End
          </option>
          <option value="FullStack">Full-Stack</option>
        </select>
      </div>
      <div className="form_controll select">
        <label htmlFor="stack">your stack Job</label>
        <select>
          <optgroup label="FullStack">
            <option value="MERN">MERN</option>
            <option value="MEAN">MEAN</option>
            <option value="MEAN">MEVN</option>
            <option value="other">other</option>
          </optgroup>
        </select>
      </div>

      {/* End Select */}
      <div className="form_controll date">
        <label htmlFor="date">date start learning Web Development</label>
        <input
          type="date"
          id="date"
          min="2000-11-15"
          max={
            //Year Logic
            new Date().getFullYear() +
            "-" +
            //Month Logic
            (new Date().getMonth() + 1 > 9
              ? new Date().getMonth() + 1
              : "0" + (new Date().getMonth() + 1)) +
            "-" +
            //Date Logic
            (new Date().getDate() + 1 > 9
              ? new Date().getDate() + 1
              : "0" + (new Date().getDate() + 1))
          }
        />
      </div>
      {/* End Date */}
      <div className="form_controll range">
        <label htmlFor="price">
          Price : <span>{price}$/Month</span>
        </label>
        <input
          type="range"
          id="price"
          min="0"
          max="10000"
          step="50"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </div>

      <div className="form_controll  textarea">
        <label htmlFor="Youtube">Message</label>
        <textarea
          placeholder="This Is awesome Practice Keep On ..."
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="form_controll file">
        <label htmlFor="resume">Upload your Resume</label>
        <input type="file" id="Youtube" />
      </div>
      <div className="form_controll">
        <div className="btncontainer">
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
