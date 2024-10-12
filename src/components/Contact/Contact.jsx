import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { deleteCtct } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div className={css.npWrapper}>
        <p>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>

      <button
        className={css.contactBtn}
        onClick={() => dispatch(deleteCtct(id))}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
