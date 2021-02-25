import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, auth } from "./base";

function Home() {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    db.collection(auth.currentUser.uid).onSnapshot((snapshot) => {
      setBookmarks(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  const add = (e) => {
    if (
      (document.getElementById("stacked-email").value,
      document.getElementById("stacked-password").value)
    ) {
      e.preventDefault();
      let user = auth.currentUser;
      db.collection(user.uid).add({
        name: document.getElementById("stacked-email").value,
        link: document.getElementById("stacked-password").value,
      });
      document.getElementById("stacked-email").value = "";
      document.getElementById("stacked-password").value = "";
    } else {
      alert("Please enter a name and a link");
      e.preventDefault();
    }
  };
  return (
    <div className="home">
      <div className="form">
        <form class="pure-form pure-form-stacked add">
          <fieldset>
            <label for="stacked-email">Name</label>
            <input type="text" id="stacked-email" placeholder="ex. YouTube" />
            <label for="stacked-password">Link</label>
            <input
              type="text"
              id="stacked-password"
              placeholder="https://youtube.com"
            />
            <button
              onClick={add}
              type="submit"
              class="pure-button pure-button-primary"
            >
              Add Bookmark
            </button>
          </fieldset>
        </form>
      </div>
      <div className="bookmarks">
        {bookmarks.length === 0 && <h2 className="no">No bookmarks</h2>}
        {bookmarks.map((bookmark) => {
          const remove = () => {
            db.collection(auth.currentUser.uid)
              .where("link", "==", bookmark.link)
              .get()
              .then((querySnapshot) => {
                querySnapshot.docs[0].ref.delete();
              });
          };
          return (
            <div className="bookmark">
              <a target="_blank" rel="noreferrer" href={bookmark.link}>
                {bookmark.name}
              </a>
              <br />
              <br />
              <button className="remove" onClick={remove}>
                remove bookmark
              </button>
            </div>
          );
        })}
      </div>
      <Link className="logout" to="/login">
        <button className="pure-button" onClick={() => auth.signOut()}>
          Logout
        </button>
      </Link>
    </div>
  );
}

export default Home;
