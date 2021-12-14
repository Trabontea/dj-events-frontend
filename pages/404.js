import { FaExclamationTriangle } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          <span>404</span>
        </h1>
        <h4>Sorry, this is nothing here</h4>
        <Link href="/">Go back to home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
