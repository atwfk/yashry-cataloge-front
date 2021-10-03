import React, { useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import { useRouter } from "next/router";
import LinkBtns from "@modules/shared/components/organisms/LinkBtns/LinkBtns";
import { getCategories } from "@modules/CategoryPage/api/getCategories/getCategories";
import { ILinkBtns } from "@modules/shared/components/organisms/LinkBtns/ILinkBtns";
import { IError } from "@modules/shared/api/IError";

const Categories: FC = (): ReactElement => {
  const [categories, setCategories] = useState<ILinkBtns.ILinkData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError.IErrorData>({
    message: "",
    error: false,
    errorCode: 0,
  });
  const { query } = useRouter();

  useEffect(() => {
    setLoading(true);

    const fetchCategories = async (): Promise<void> => {
      try {
        const categories = await getCategories();

        const activeLink =
          query.categoryId === undefined ? "0" : query.categoryId;

        const categoryLinks: ILinkBtns.ILinkData[] = categories.map(
          (category) => ({
            linkId: `${category.id}`,
            active: activeLink === `${category.id}`,
            path:
              category.name === "All"
                ? "/"
                : `/category/${category.id}?name=${category.name}`,
            name: category.name,
          }),
        );

        setLoading(false);
        setCategories(categoryLinks);
      } catch (err) {
        const { message, error, errorCode } = err as IError.IErrorData;
        setLoading(false);
        setError({ message, error, errorCode });
      }
    };

    fetchCategories();
  }, [query.categoryId]);

  if (error.error) {
    return <div className="py-6 flex justify-center">{error.message}</div>;
  }

  return (
    <div className="py-6 flex justify-center">
      {loading ? "loading..." : <LinkBtns links={categories} />}
    </div>
  );
};

export default Categories;
