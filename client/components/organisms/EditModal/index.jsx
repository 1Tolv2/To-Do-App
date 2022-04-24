import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../../pages/_app";
import { editUser } from '../../API'
import * as s from "./styles";

export default function EditModal({ modal }) {
  const router = useRouter();

  const { userData } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [settingName, setSettingName] = useState(false);
  const [settingEmail, setSettingEmail] = useState(false);

  useEffect(() => {
    const { name, email, settings } = userData;
    setName(name);
    setEmail(email);
    setSettingEmail(settings.email);
    setSettingName(settings.name);
  }, [userData]);

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("setting_name", settingName);
    formData.append("setting_email", settingEmail);
    formData.append("image", e.target[2]?.files[0]);

    await editUser(formData)
    router.reload(window.location.pathname);
  }

  return (
    <s.Container>
      <s.Fade onClick={() => modal.setEditModal(!modal.editModal)}></s.Fade>
      <s.Modal>
        {userData && (
          <>
            <s.Form onSubmit={handleOnSubmit} encType="multipart/form-data">
              <div>
                <input
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  value={email}
                  placeholder="E-mail"

                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div>
                  <span>Profile picture:</span>
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                </div>
                <span>Display on profile:</span>
                <div>
                  <input
                    type="checkbox"
                    checked={settingName}
                    onChange={() => setSettingName(!settingName)}
                  />
                  Name
                </div>
                <div>
                  <br />
                  <input
                    type="checkbox"
                    checked={settingEmail}
                    onChange={() => setSettingEmail(!settingEmail)}
                  />
                  Email
                </div>
              </div>
              <button type="submit" width="100%">Save</button>
            </s.Form>
          </>
        )}
      </s.Modal>
    </s.Container>
  );
}
