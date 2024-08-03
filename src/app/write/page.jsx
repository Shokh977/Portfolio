"use client";

import styles from "./write.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../utilities/firebase";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { CiImageOn } from "react-icons/ci";
import { FaExternalLinkAlt, FaVideo } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

  const WritePage = () => {
    const { status } = useSession();
    const router = useRouter();
  
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");
  
    useEffect(() => {
      const storage = getStorage(app);
      const upload = () => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
  
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      };
  
      file && upload();
    }, [file]);
  
    if (status === "loading") {
      return <div className={styles.loading}>Loading...</div>;
    }
  
    if (status === "unauthenticated") {
      router.push("/");
    }
  
    const slugify = (str) =>
      str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
  
    const handleSubmit = async () => {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
          catSlug: catSlug || "coding", //If not selected, choose the general category
        }),
      });
  
      if (res.status === 200) {
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
      }
    };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
        value={catSlug}>
        <option value="">Select a category</option>
        <option value="coding">Coding</option>
        <option value="news">News</option>
        <option value="nextjs">Next.JS</option>
        <option value="react">React</option>
        <option value="travel">Travel</option>
        <option value="javascript">JavaScript</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <IoMdAddCircleOutline size={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <CiImageOn size={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <FaExternalLinkAlt size={16} />
            </button>
            <button className={styles.addButton}>
              <FaVideo size={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
